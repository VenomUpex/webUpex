import * as React from 'react'
import { observer } from "mobx-react-lite";
import { useStore } from '@/hooks/useStore';
import { UpexStore, marketsOptions } from '@/stores/UpexStore';
import { Button, Flex, Grid, Input, Tabs, Text, Tile, ValueType, Width } from '@broxus/react-uikit';
import { useTvmWallet } from '@/utils';
import BigNumber from 'bignumber.js';
import { MULTIPLICATOR__DECIMALS, PRICE__DECIMALS } from '@/config';
import classNames from 'classnames';
import { Placeholder } from '@/components/common/Placeholder';
import { InputNumber } from '@broxus/react-uikit/dist/esm/components/Control/Input/Number';

function OptionsInner({ stateTransactionTransactions }: { stateTransactionTransactions: string }): JSX.Element {
    const wallet = useTvmWallet()
    const Upex = useStore(UpexStore)

    React.useEffect(() => {
        if (wallet.isConnected)
            Upex.getMarkets()
    }, [Upex, wallet.isConnected])


    React.useEffect(() => {
        if (Upex.marketsOptions)
            Upex.getUpexAccountAddress()
    }, [Upex.marketsOptions, wallet.account?.address])

    const symbols = [
        "BTC",
        "ETH",
        "TSLA",
        "AAPL"
    ]

    function convertTimestamp(timestampInSeconds: number) {
        const date = new Date(timestampInSeconds * 1000);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return (
            <>
                {day}:{month}:{year} - {hours}:{minutes}
            </>
        );
    }

    function generateRandomUint32() {
        return Math.floor(Math.random() * Math.pow(2, 32)).toString();
    }

    function growthCheck(item: marketsOptions) {
        return new BigNumber(item._closePrice!).gt(new BigNumber(item._openPrice!))
    }

    const [dataTransaction, setDataTransaction] = React.useState(null)

    const [valueWithdraw, setValueWithdraw] = React.useState('')
    const onChangeWithdraw = (event: ValueType) => {
        setValueWithdraw(event.toString())
    }

    const sendEncodeTokenTransfer = () => {
        //@ts-ignore
        Upex.encodeTokenTransfer(dataTransaction.market_id, dataTransaction.bet, generateRandomUint32(), valueWithdraw)
        setDataTransaction(null)
    }

    React.useEffect(() => {
        setDataTransaction(null)
    }, [stateTransactionTransactions])

    console.log(Upex?.marketsOptions)

    return (
        <>
            {wallet.isConnected && Upex.markets?.map((e, i) => (
                <>
                    {stateTransactionTransactions === symbols[i] &&
                        <Grid gap="xsmall" childWidth={5} style={{
                            position: "relative",
                        }}>
                            <Text component={'h3'} className='simbol'>
                                {symbols[i]}
                            </Text>
                            <Flex>
                                {Upex?.marketsOptions ?
                                    Upex.marketsOptions[parseInt(e[0])].map((item, i_option) => (
                                        <Width size='1-5' className={
                                            classNames("uk-margin-small-right", (item._status === "Finish" && "dashboard--item__finish"), item._status === "Finish" ? (growthCheck(item) ? "dashboard--item__finish--up" : "dashboard--item__finish--down") : (".now"))
                                        }>
                                            <Tile type='primary' className="uk-padding-small">
                                                <Flex className="uk-padding-small uk-padding-remove-left">
                                                    {/* <Tile type='secondary' className="uk-padding-small" style={{ width: "100%" }}> */}
                                                    <Text component='h3'>
                                                        {item._status}
                                                    </Text>
                                                    {/* </Tile> */}
                                                </Flex>
                                                <Tile type='secondary' className="uk-padding-small">
                                                    {(item._status === "Live" || item._status === "Finish") &&
                                                        <>
                                                            <Flex flexDirection='column' className="uk-margin-medium-bottom">
                                                                <Flex className="uk-margin-small-bottom">
                                                                    <Text>Win multiplier:</Text>
                                                                    <Text>{new BigNumber(item._multiplier!).shiftedBy(-MULTIPLICATOR__DECIMALS).toFixed()}</Text>
                                                                </Flex>
                                                                <Flex className="uk-margin-small-bottom">
                                                                    <Text>Option price:</Text>
                                                                    <Text>{new BigNumber(item._openPrice!).shiftedBy(-PRICE__DECIMALS).toFixed()}$</Text>
                                                                </Flex>
                                                                {item._closePrice !== "0" &&
                                                                    <Flex className="uk-margin-small-bottom">
                                                                        <Text>Close price:</Text>
                                                                        <Text>{new BigNumber(item._closePrice!).shiftedBy(-PRICE__DECIMALS).toFixed()}$</Text>
                                                                    </Flex>
                                                                }
                                                                {item.commit?.amount &&
                                                                    <Flex className="uk-margin-small-bottom">
                                                                        <Text>Your commit:</Text>
                                                                        <Text>{item.commit?.amount}$ for up</Text>
                                                                    </Flex>
                                                                }
                                                            </Flex>
                                                            <Flex className="uk-margin-medium-bottom uk-text-center">
                                                                <Text>In {item?._close && convertTimestamp(parseInt(item._close))} price will....?</Text>
                                                            </Flex>
                                                            {item.win && item.commit &&
                                                                <Flex justifyContent='between' flexDirection='column'>

                                                                    <Button
                                                                        type={growthCheck(item) ? 'tertiary' : 'danger'}
                                                                        className='uk-margin-small-bottom'
                                                                        onClick={() => Upex.claimReward(i_option, item.optionId!.toString(), i.toString(), {
                                                                            call_id: generateRandomUint32(),
                                                                            send_gas_to: wallet.account?.address!
                                                                        })}>
                                                                        Сlame
                                                                    </Button>
                                                                </Flex>
                                                            }
                                                        </>
                                                    }
                                                    {item._status === "Soon" &&
                                                        <Flex flexDirection='column'>
                                                            <Flex className="uk-margin-small-bottom" justifyContent='center'>
                                                                <Text className='uk-text-center' component={'h5'}>Next start time</Text>
                                                            </Flex>
                                                            <Flex className="uk-margin-small-bottom" justifyContent='center'>
                                                                <Text className='uk-text-center' component={'h4'}>{convertTimestamp(item.time!)}</Text>
                                                            </Flex>
                                                        </Flex>
                                                    }
                                                    {
                                                        !item._commitEnd &&
                                                        item._status === "Live" && !item.commit?.amount &&
                                                        <Flex justifyContent='between' flexDirection='column'>
                                                            {!dataTransaction ?
                                                                <>
                                                                    <Button
                                                                        type='tertiary'
                                                                        className='uk-margin-small-bottom'
                                                                        disabled={item._commitEnd}
                                                                        onClick={() => setDataTransaction({
                                                                            //@ts-ignore
                                                                            market_id: i.toString(),
                                                                            bet: "0"
                                                                        })}>
                                                                        Go Up
                                                                    </Button>
                                                                    <Button
                                                                        type='danger'
                                                                        disabled={item._commitEnd}
                                                                        onClick={() => setDataTransaction({
                                                                            //@ts-ignore
                                                                            market_id: i.toString(),
                                                                            bet: "1"
                                                                        })}>
                                                                        Go Down
                                                                    </Button>
                                                                </>
                                                                :
                                                                <div className='input--go'>
                                                                    <InputNumber
                                                                        value={valueWithdraw}
                                                                        placeholder="Enter your bet"
                                                                        onChange={(e) => { onChangeWithdraw(e!) }}
                                                                        max={100}
                                                                    />
                                                                    <Button
                                                                        type='danger'
                                                                        onClick={sendEncodeTokenTransfer}>
                                                                        Go
                                                                    </Button>
                                                                </div>
                                                            }
                                                        </Flex>
                                                    }

                                                </Tile>
                                            </Tile>
                                        </Width>
                                    ))
                                    :
                                    <>
                                        <Width size='1-5' className="uk-margin-small-right">
                                            <Placeholder height={305} width={245} />
                                        </Width>
                                        <Width size='1-5' className="uk-margin-small-right">
                                            <Placeholder height={305} width={245} />
                                        </Width>
                                        <Width size='1-5' className="uk-margin-small-right">
                                            <Placeholder height={305} width={245} />
                                        </Width>
                                        <Width size='1-5' className="uk-margin-small-right">
                                            <Placeholder height={305} width={245} />
                                        </Width>
                                        <Width size='1-5' className="uk-margin-small-right">
                                            <Placeholder height={305} width={245} />
                                        </Width>
                                    </>
                                }
                            </Flex>
                        </Grid>
                    }
                </>
            ))
            }
        </>
    )
}
export const Options = observer(OptionsInner)
