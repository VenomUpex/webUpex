import { Address } from "everscale-inpage-provider"

export type NetworkGroup = 'mainnet' | 'testnet' | 'fld' | 'rfld' | 'localnet' | string

export const USDT_DECIMALS = 6
export const PRICE__DECIMALS = 8
export const MULTIPLICATOR__DECIMALS = 3
export const FEE = 2500000000 

export const ROOT = new Address("0:d9d7c15158a4237350064535ab9430167bf9a01f0722f316fc9388da1147a5ea")
export const USDT_TOKEN_ROOT = new Address("0:20470e6a6e33aa696263b5702608d69e3317c23bf20c2f921b38d6588c555603")