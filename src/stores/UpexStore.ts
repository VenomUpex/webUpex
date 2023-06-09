import { UpexMyAccount, UpexMarket, UpexAccountCommits } from "@/abi/types";
import { AbstractStore, TvmWalletService, useRpcClient, useRpcProvider } from "@broxus/js-core";
import { useWalletsCache } from "@broxus/react-modules";
import { makeObservable } from "mobx";
import { UpexUtils } from "./utils";
import { Address, Transaction } from "everscale-inpage-provider";
import BigNumber from "bignumber.js";
import { ROOT, USDT_DECIMALS } from '@/config';
import { UpexRootContract } from "./contracts";
import { toast } from "react-hot-toast";

type UpexStoreState = {
}

export type marketsOptions = {
    optionId: number | null;
    time?: number;
    commit?: {
        amount: string;
        direction: string;
    }
    win?: boolean;
    _commitEnd?: boolean;
    _close?: string;
    _multiplier?: string;
    _openPrice?: string;
    _closePrice?: string;
    _status?: string;
}

type UpexStoreData = {
    markets?: UpexMarket;
    commitsAccount?: UpexAccountCommits;
    marketsOptions: Array<Array<marketsOptions>>
}


export class UpexStore extends AbstractStore<
    UpexStoreData,
    UpexStoreState
> {

    protected rpc = useRpcProvider()
    protected walletsCache = useWalletsCache(this.rpc)
    public static Utils = UpexUtils

    constructor(
        public readonly wallet: TvmWalletService,
    ) {
        super()
        makeObservable(this)
    }


    // Markets
    public async getMarkets() {
        const markets = await UpexStore.Utils._getMarkets()
        this.setData('markets', markets)
        const marketsOptions: Array<Array<marketsOptions>> = [[], [], [], []]

        await Promise.all(
            markets.map(async (item) => {
                const length = parseInt(item[1].curOptionId);
                if (length > 2) {
                    marketsOptions[parseInt(item[0])].push(
                        { optionId: length - 2 },
                        { optionId: length - 1 }
                    );
                } else if (length > 1) {
                    marketsOptions[parseInt(item[0])].push(
                        { optionId: length - 2 }
                    );
                }
                marketsOptions[parseInt(item[0])].push(
                    { optionId: length },
                    { optionId: null, time: parseInt(item[1].curOptionStart) + parseInt(item[1].optionTtl) },
                    { optionId: null, time: parseInt(item[1].curOptionStart) + (parseInt(item[1].optionTtl) * 2) }
                );

                await Promise.all(
                    marketsOptions[parseInt(item[0])].map(async (option) => {
                        if (option.optionId) {
                            const address = await this.getOption(option.optionId.toString(), item[0].toString());
                            const data = await this.getOptionData(address);
                            Object.assign(option, {
                                _status: parseInt(data._close) > new Date().getTime() / 1000 ? 'Live' : 'Finish',
                                _close: data._close,
                                _closePrice: data._closePrice,
                                _commitEnd: parseInt(data._commitEnd) > new Date().getTime() / 1000 ? false : true,
                                _currentVersion: data._currentVersion,
                                _id: data._id,
                                _market_id: data._market_id,
                                _multiplier: data._multiplier,
                                _openPrice: data._openPrice,
                                _start: data._start
                            });
                        } else {
                            Object.assign(option, {
                                _status: 'Soon'
                            });
                        }
                    })
                );
            })
        );

        this.setData('marketsOptions', marketsOptions)
    }

    // Option
    public async getOption(optionId: string, marketId: string) {
        const option = await UpexStore.Utils._getUpexOptionAddress(optionId, marketId)
        return option
    }

    public async getOptionData(addressOption: Address) {
        const optionData = await UpexStore.Utils._getDetails(addressOption)
        return optionData
    }

    public async claimReward(i: number, option_id: string, market_id: string, meta: {
        call_id: string,
        send_gas_to: Address
    }) {
        const toastId = toast.loading('Wait for the withdrawal...');
        const provider = useRpcClient('venom')
        const subscriber = new provider.Subscriber()
        const contract = UpexRootContract(ROOT)
        const successStream = await subscriber
            .transactions(ROOT)
            .flatMap(item => item.transactions)
            .flatMap(transaction => contract.decodeTransactionEvents({
                transaction,
            }))
            .filterMap(async result => {
                if (
                    result.event === 'RewardClaim'
                    && result.data.call_id === meta.call_id
                ) {
                    let dataOption = this.marketsOptions
                    dataOption[parseInt(market_id)][i].win = false
                    this.setData('marketsOptions', dataOption)
                    toast.success('The withdrawal was successful', {
                        id: toastId,
                    });
                    return;
                }
                return undefined
            })
            .delayed(s => s.first())

        await UpexStore.Utils._claimReward(option_id, market_id, meta)

        await successStream()
        await subscriber.unsubscribe()
    }

    // Account
    public async getUpexAccountAddress() {
        const upexMyAccount = await UpexStore.Utils._getUpexAccountAddress(this.wallet.account?.address as Address)
        this.getUpexAccountCommits(upexMyAccount)
    }

    public async getUpexAccountCommits(upexMyAccount: Address) {
        const commitsAccount = await UpexStore.Utils._commits(upexMyAccount)
        this.setData('commitsAccount', commitsAccount)
        let dataOption: Array<Array<marketsOptions>>
        await Promise.all(
            commitsAccount.map((commitsMarket, i) => {
                dataOption = this.marketsOptions
                commitsMarket[1].map((commit) => {
                    dataOption[parseInt(commitsMarket[0])].map((itemOption) => {
                        if (itemOption.optionId?.toString() === commit[0]) {
                            itemOption.commit = {
                                amount: new BigNumber(commit[1].amount).shiftedBy(-USDT_DECIMALS).toFixed(),
                                direction: commit[1].direction,
                            };
                            if (itemOption._closePrice !== "0") {
                                itemOption.win = (commit[1].direction === '0' && new BigNumber(itemOption._closePrice!).gt(new BigNumber(itemOption._openPrice!))) ||
                                    (commit[1].direction === '1' && new BigNumber(itemOption._openPrice!).gt(new BigNumber(itemOption._closePrice!))) ? true : false

                            }
                        }
                    })
                })
            })
        )
        this.setData('marketsOptions', dataOption!)
    }

    public async encodeTokenTransfer(market_id: string, bet: string, call_id: string, valueWithdraw: string) {
        const toastId = toast.loading('Wait for the adding a bet...');
        const provider = useRpcClient('venom')
        const subscriber = new provider.Subscriber()
        const contract = UpexRootContract(ROOT)
        const successStream = await subscriber
            .transactions(ROOT)
            .flatMap(item => item.transactions)
            .flatMap(transaction => contract.decodeTransactionEvents({
                transaction,
            }))
            .filterMap(async result => {
                if (
                    result.event === 'CommitSaved'
                    && result.data.call_id === call_id
                ) {
                    let dataOption = this.marketsOptions
                    dataOption[parseInt(market_id)][2].commit = {
                        amount: valueWithdraw,
                        direction: bet,
                    }
                    this.setData('marketsOptions', dataOption)
                    toast.success('The bet was successful', {
                        id: toastId,
                    });
                    return;
                }
                return undefined
            })
            .delayed(s => s.first())

        const encodeToken = await UpexStore.Utils._encodeTokenTransfer(market_id, bet, call_id)
        const tokenWallet = await UpexStore.Utils._getTokenWallet(this.wallet.account?.address as Address)
        if (this.wallet.account?.address)
            await this.transfer(tokenWallet, this.wallet.account.address, {
                remainingGasTo: this.wallet.account.address,
                deployWalletValue: 0,
                amount: new BigNumber(valueWithdraw).shiftedBy(USDT_DECIMALS).toFixed(),
                notify: true,
                recipient: ROOT,
                payload: encodeToken,
            })

        await successStream()
        await subscriber.unsubscribe()
        return encodeToken
    }

    public async transfer(address: Address, sender: Address, params: {
        amount: string | number;
        recipient: Address;
        deployWalletValue: string | number;
        remainingGasTo: Address;
        notify: boolean;
        payload: string;
    }): Promise<Transaction> {
        return UpexStore.Utils._transfer(address, sender, params)
    }

    public get markets() {
        return this._data.markets
    }

    public get marketsOptions() {
        return this._data.marketsOptions
    }
}