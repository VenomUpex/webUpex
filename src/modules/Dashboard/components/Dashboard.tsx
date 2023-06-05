import * as React from 'react'

import { useProvider, useStore } from '@/hooks/useStore'

import { useTvmWallet } from '@/utils'

import {
    Button,
    Flex, Grid, Heading, Label, Tabs, Text, Tile, Width,
} from '@broxus/react-uikit'
import { Observer, observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'
import { AdvancedRealTimeChart, TechnicalAnalysis, TickerTape } from 'react-ts-tradingview-widgets'
import { UpexStore } from '@/stores/UpexStore'
import { observable } from 'mobx'
import { Options } from './Options'

function DashboardInner(): JSX.Element {
    const intl = useIntl()
    const wallet = useTvmWallet()
    const Upex = useStore(UpexStore)
    
    return (
        <div className='dashboard'>
            <Grid gap='medium' match childWidth={1}>
                <Grid gap="xsmall" childWidth={2} >
                    <Width size='3-5' >
                        <Tile type='primary' className="uk-height-large uk-padding-small">
                            <AdvancedRealTimeChart theme="dark" autosize interval='5' range='5D' symbol='ETH'></AdvancedRealTimeChart>
                        </Tile>
                    </Width>
                    <Width size='2-5'>
                        <Tile type='primary' className="uk-height-large uk-padding-small">
                            <TechnicalAnalysis colorTheme="dark" autosize isTransparent={true}></TechnicalAnalysis>
                        </Tile>
                    </Width>
                </Grid>
                <Options />
            </Grid>
        </div>
    )
}

export const Dashboard = observer(DashboardInner)
