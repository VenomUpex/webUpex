import { Address } from "everscale-inpage-provider"

export type NetworkGroup = 'mainnet' | 'testnet' | 'fld' | 'rfld' | 'localnet' | string

export const USDT_DECIMALS = 6
export const PRICE__DECIMALS = 8
export const MULTIPLICATOR__DECIMALS = 3
export const FEE = 2500000000 

export const ROOT = new Address("0:182a8e49ab54fdf73ea722c431d0ad599abf60daf8972a603fce295759e29616")
export const USDT_TOKEN_ROOT = new Address("0:1935e67480e3cab02ee26cc48268f5329a15ea3b6f33705540b431facc5e27e8")
export const GIVER_ROOT = new Address("0:957585921e32e75c2e68c8e5c371e3b172d77b0b0dc732eb608d22fe12ed9352")
