import * as React from 'react'

import './Footer.scss'
import { TickerTape } from 'react-ts-tradingview-widgets'

export function Footer(): JSX.Element {

    const symbols = [
        {
            "proName": "BTC",
            "title": "BTC"
        },
        {
            "proName": "ETH",
            "title": "ETH"
        },
        {
            "proName": "TSLA",
            "title": "TSLA"
        },
        {
            "proName": "AAPL",
            "title": "AAPL"
        }
    ]

    return (
        <footer className="footer">
            <TickerTape colorTheme="dark" symbols={symbols} displayMode='regular'></TickerTape>
        </footer>
    )
}
