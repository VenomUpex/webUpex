import { UpexAccount } from '@/abi/UpexAccount.abi'
import { UpexOption } from '@/abi/UpexOption.abi'
import { UpexRoot } from '@/abi/UpexRoot.abi'

import { TokenRootAbi } from '@/abi/TokenRoot.abi'
import { TokenWalletUpgradeableAbi } from '@/abi/TokenWalletUpgradeable.abi'

import { resolveTvmAddress, useRpcClient, useRpcProvider } from '@broxus/js-core'
import { type Address, type Contract } from 'everscale-inpage-provider'


type UpexRootAbi = typeof UpexRoot
type UpexAccountAbi = typeof UpexAccount
type UpexOptionAbi = typeof UpexOption

type RootAbi = typeof TokenRootAbi
type WalletUpgradeableAbi = typeof TokenWalletUpgradeableAbi

export function UpexRootContract(
    address: Address,
    provider = useRpcClient('venom'),
): Contract<UpexRootAbi> {
    return new provider.Contract(UpexRoot, resolveTvmAddress(address))
}

export function UpexAccountContract(
    address: Address,
    provider = useRpcClient('venom'),
): Contract<UpexAccountAbi> {
    return new provider.Contract(UpexAccount, resolveTvmAddress(address))
}

export function UpexOptionContract(
    address: Address,
    provider = useRpcClient('venom'),
): Contract<UpexOptionAbi> {
    return new provider.Contract(UpexOption, resolveTvmAddress(address))
}



export function UsdtTokenWalletRoot(
    address: Address,
    provider = useRpcClient('venom'),
): Contract<RootAbi> {
    return new provider.Contract(TokenRootAbi, resolveTvmAddress(address))
}

export function UsdtTokenWallet(
    address: Address,
    provider = useRpcClient('venom'),
): Contract<WalletUpgradeableAbi> {
    return new provider.Contract(TokenWalletUpgradeableAbi, resolveTvmAddress(address))
}
