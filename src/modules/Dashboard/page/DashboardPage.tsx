import * as React from 'react'

import { useProvider, useStore } from '@/hooks/useStore'
import './DashboardPage.scss'

import { useTvmWallet } from '@/utils'

import {
    Button,
    Flex, Grid, Heading, Label, Tabs, Text, Tile, Width,
} from '@broxus/react-uikit'
import { Observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'
import { AdvancedRealTimeChart, TechnicalAnalysis, TickerTape } from 'react-ts-tradingview-widgets'
import { UpexStore } from '@/stores/UpexStore'
import { observable } from 'mobx'
import { Dashboard } from '../components/Dashboard'

export default function DashboardPage(): JSX.Element {
    const intl = useIntl()
    const wallet = useTvmWallet()
    const Upex = useStore(UpexStore)

 
    return (
        <div className='dashboard'>
            <Dashboard />
        </div>
    )
}

