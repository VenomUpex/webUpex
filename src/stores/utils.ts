import { Transaction, type Address } from 'everscale-inpage-provider'
import BigNumber from 'bignumber.js'

import { FEE, GIVER_ROOT, ROOT, USDT_DECIMALS, USDT_TOKEN_ROOT } from '@/config'
import { GiverContract, UpexAccountContract, UpexOptionContract, UpexRootContract, UsdtTokenWallet, UsdtTokenWalletRoot } from './contracts'
import { UpexAccountCommits, UpexClaimRewardr, UpexEncodeTokenTransfer, UpexMarket, UpexMyAccount, UpexOptionAddress, UpexOptionDetail } from '@/abi/types'
import { useRpcProvider } from '@broxus/js-core'


export abstract class UpexUtils {

    // ROOT CONTRACT
    public static async _getMarkets(address = ROOT): Promise<UpexMarket> {
        const provider = useRpcProvider("venom")
        const contract = UpexRootContract(address, provider)
        const { markets } = await contract.methods.markets().call()
        return markets
    }
    public static async _getUpexAccountAddress(sender: Address, address = ROOT): Promise<UpexMyAccount> {
        const provider = useRpcProvider("venom")
        const contract = UpexRootContract(address, provider)
        const { value0 } = await contract.methods.getUpexAccountAddress({
            answerId: 0,
            user: sender
        }).call()
        return value0
    }
    public static async _getUpexOptionAddress(optionId: string, marketId: string, address = ROOT): Promise<UpexOptionAddress> {
        const provider = useRpcProvider("venom")
        const contract = UpexRootContract(address, provider)
        const { value0 } = await contract.methods.getUpexOptionAddress({
            answerId: 0,
            option_id: optionId,
            market_id: marketId,
        }).call()
        return value0
    }

    public static async _encodeTokenTransfer(market_id: string, bet: string, call_id: string, address = ROOT): Promise<UpexEncodeTokenTransfer> {
        const provider = useRpcProvider("venom")
        const contract = UpexRootContract(address, provider)
        const { payload } = await contract.methods.encodeTokenTransfer({
            market_id: market_id,
            bet: bet,
            call_id: call_id
        }).call()
        return payload
    }

    public static async _claimReward(option_id: string, market_id: string, meta: {
        call_id: string,
        send_gas_to: Address
    }, address = ROOT): Promise<UpexClaimRewardr> {
        const provider = useRpcProvider("venom")
        const contract = UpexRootContract(address, provider)

        const claimReward = await contract.methods.claimReward({
            option_id: option_id,
            market_id: market_id,
            meta: meta
        }).send({
            from: meta.send_gas_to,
            amount: new BigNumber(FEE).toFixed(),
        })
        return claimReward
    }



    // ACCOUNT CONTRACT
    public static async _commits(address: Address): Promise<UpexAccountCommits> {
        const provider = useRpcProvider("venom")
        const contract = UpexAccountContract(address, provider)
        const { commits } = await contract.methods.commits().call()
        return commits
    }

    // OPTION CONTRACT
    public static async _getDetails(address: Address): Promise<UpexOptionDetail> {
        const provider = useRpcProvider("venom")
        const contract = UpexOptionContract(address, provider)
        const option = await contract.methods.getDetails().call()
        return option
    }

    // TOKEN CONTRACT
    public static async _getTokenWallet(owner: Address, address = USDT_TOKEN_ROOT): Promise<Address> {
        const provider = useRpcProvider("venom")
        const contract = UsdtTokenWalletRoot(address, provider)
        const tokenWallet = await contract.methods.walletOf({
            answerId: 0,
            walletOwner: owner,
        }).call().then(r => r.value0)
        return tokenWallet
    }

    public static async _transfer(address: Address, sender: Address, params: {
        amount: string | number;
        recipient: Address;
        deployWalletValue: string | number;
        remainingGasTo: Address;
        notify: boolean;
        payload: string;
    }): Promise<Transaction> {
        const provider = useRpcProvider("venom")
        const contract = UsdtTokenWallet(address, provider)
        const transaction = await contract.methods
            .transfer(params)
            .send({
                from: sender,
                amount: new BigNumber(FEE).toFixed(),
            })
        return transaction
    }

    public static async _getTokens(sender: Address, address = GIVER_ROOT) {
        const provider = useRpcProvider("venom")
        const contract = GiverContract(address, provider)
        await contract.methods.getTokens().send({
            from: sender,
            amount: new BigNumber(FEE).toFixed(),
        })
    }

}

