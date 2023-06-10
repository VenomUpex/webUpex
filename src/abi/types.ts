import { DecodedAbiFunctionOutputs, type DecodedTransaction } from 'everscale-inpage-provider'

import { type UpexRoot } from './UpexRoot.abi'
import { type UpexAccount } from './UpexAccount.abi'
import { type UpexOption } from './UpexOption.abi'

import { type TokenRootAbi } from './TokenRoot.abi'
import { type TokenWalletUpgradeableAbi } from './TokenWalletUpgradeable.abi'
import { TokenGiver } from './TokenGiver.abi'

export type UpexMarket = DecodedAbiFunctionOutputs<typeof UpexRoot, 'markets'>['markets']
export type UpexMyAccount = DecodedAbiFunctionOutputs<typeof UpexRoot, 'getUpexAccountAddress'>['value0']
export type UpexOptionAddress = DecodedAbiFunctionOutputs<typeof UpexRoot, 'getUpexOptionAddress'>['value0']
export type UpexEncodeTokenTransfer = DecodedAbiFunctionOutputs<typeof UpexRoot, 'encodeTokenTransfer'>['payload']
export type UpexClaimRewardr = DecodedAbiFunctionOutputs<typeof UpexRoot, 'claimReward'>

export type UpexAccountCommits = DecodedAbiFunctionOutputs<typeof UpexAccount, 'commits'>['commits']

export type UpexOptionDetail = DecodedAbiFunctionOutputs<typeof UpexOption, 'getDetails'>

export type Giver = DecodedAbiFunctionOutputs<typeof TokenGiver, 'getTokens'>
