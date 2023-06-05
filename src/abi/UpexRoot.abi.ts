export const UpexRoot = {
    "ABI version": 2,
    version: "2.2",
    header: [
      "time"
    ],
    functions: [
      {
        name: "constructor",
        inputs: [
          {
            name: "_owner",
            type: "address"
          },
          {
            name: "_launcher_pubkey",
            type: "uint256"
          },
          {
            name: "_usdt",
            type: "address"
          }
        ],
        outputs: []
      },
      {
        name: "upgrade",
        inputs: [
          {
            name: "newcode",
            type: "cell"
          }
        ],
        outputs: []
      },
      {
        name: "transferOwnership",
        inputs: [
          {
            name: "new_owner",
            type: "address"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "setLauncherPubkey",
        inputs: [
          {
            name: "pubkey",
            type: "uint256"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "setPause",
        inputs: [
          {
            name: "new_state",
            type: "bool"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "receiveTokenWalletAddress",
        inputs: [
          {
            name: "wallet",
            type: "address"
          }
        ],
        outputs: []
      },
      {
        name: "addMarkets",
        inputs: [
          {
            components: [
              {
                name: "ticker",
                type: "string"
              },
              {
                name: "curOptionId",
                type: "uint32"
              },
              {
                name: "curOptionStart",
                type: "uint32"
              },
              {
                name: "optionTtl",
                type: "uint32"
              },
              {
                name: "optionOpenDuration",
                type: "uint32"
              },
              {
                name: "winMultiplier",
                type: "uint32"
              }
            ],
            name: "new_markets",
            type: "tuple[]"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "updateMarket",
        inputs: [
          {
            components: [
              {
                name: "ticker",
                type: "string"
              },
              {
                name: "curOptionId",
                type: "uint32"
              },
              {
                name: "curOptionStart",
                type: "uint32"
              },
              {
                name: "optionTtl",
                type: "uint32"
              },
              {
                name: "optionOpenDuration",
                type: "uint32"
              },
              {
                name: "winMultiplier",
                type: "uint32"
              }
            ],
            name: "up_markets",
            type: "map(uint32,tuple)"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "launchNewOption",
        inputs: [
          {
            name: "market_id",
            type: "uint32"
          },
          {
            name: "market_price",
            type: "uint128"
          }
        ],
        outputs: []
      },
      {
        name: "onAcceptTokensTransfer",
        inputs: [
          {
            name: "value0",
            type: "address"
          },
          {
            name: "amount",
            type: "uint128"
          },
          {
            name: "sender",
            type: "address"
          },
          {
            name: "value3",
            type: "address"
          },
          {
            name: "remainingGasTo",
            type: "address"
          },
          {
            name: "payload",
            type: "cell"
          }
        ],
        outputs: []
      },
      {
        name: "revert_saveCommit",
        inputs: [
          {
            name: "user",
            type: "address"
          },
          {
            name: "req_nonce",
            type: "uint32"
          }
        ],
        outputs: []
      },
      {
        name: "finish_saveCommit",
        inputs: [
          {
            name: "user",
            type: "address"
          },
          {
            name: "req_nonce",
            type: "uint32"
          }
        ],
        outputs: []
      },
      {
        name: "claimReward",
        inputs: [
          {
            name: "option_id",
            type: "uint32"
          },
          {
            name: "market_id",
            type: "uint32"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "option_revert_claimReward",
        inputs: [
          {
            name: "user",
            type: "address"
          },
          {
            name: "market_id",
            type: "uint32"
          },
          {
            name: "option_id",
            type: "uint32"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "account_revert_claimReward",
        inputs: [
          {
            name: "user",
            type: "address"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "finish_claimReward",
        inputs: [
          {
            name: "user",
            type: "address"
          },
          {
            name: "win_amount",
            type: "uint128"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "updateUpexAccountCode",
        inputs: [
          {
            name: "code",
            type: "cell"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "updateUpexOptionCode",
        inputs: [
          {
            name: "code",
            type: "cell"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "upgradeUpexAccount",
        inputs: [
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "forceUpgradeUpexAccountsByUsers",
        inputs: [
          {
            name: "users",
            type: "address[]"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "forceUpgradeUpexAccountsByContracts",
        inputs: [
          {
            name: "contracts",
            type: "address[]"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "onUpexAccountUpgrade",
        inputs: [
          {
            name: "user",
            type: "address"
          },
          {
            name: "old_version",
            type: "uint32"
          },
          {
            name: "new_version",
            type: "uint32"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "onUpexAccountDeploy",
        inputs: [
          {
            name: "user",
            type: "address"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "deployUpexAccount",
        inputs: [
          {
            name: "answerId",
            type: "uint32"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        outputs: [
          {
            name: "account",
            type: "address"
          }
        ]
      },
      {
        name: "onUpexOptionDeploy",
        inputs: [
          {
            name: "option_id",
            type: "uint32"
          },
          {
            name: "market_id",
            type: "uint32"
          }
        ],
        outputs: []
      },
      {
        name: "getDetails",
        inputs: [
          {
            name: "answerId",
            type: "uint32"
          }
        ],
        outputs: [
          {
            name: "_usdt",
            type: "address"
          },
          {
            name: "_usdtWallet",
            type: "address"
          },
          {
            name: "_usdtBalance",
            type: "uint128"
          },
          {
            name: "_owner",
            type: "address"
          },
          {
            name: "_paused",
            type: "bool"
          },
          {
            name: "_optionLauncherPubkey",
            type: "uint256"
          },
          {
            name: "_marketCount",
            type: "uint16"
          }
        ]
      },
      {
        name: "getCodes",
        inputs: [
          {
            name: "answerId",
            type: "uint32"
          }
        ],
        outputs: [
          {
            name: "_platformCode",
            type: "cell"
          },
          {
            name: "_upexAccountCode",
            type: "cell"
          },
          {
            name: "_upexOptionCode",
            type: "cell"
          },
          {
            name: "_upexAccountVersion",
            type: "uint32"
          },
          {
            name: "_upexOptionVersion",
            type: "uint32"
          }
        ]
      },
      {
        name: "encodeTokenTransfer",
        inputs: [
          {
            name: "market_id",
            type: "uint32"
          },
          {
            name: "bet",
            type: "uint8"
          },
          {
            name: "call_id",
            type: "uint32"
          }
        ],
        outputs: [
          {
            name: "payload",
            type: "cell"
          }
        ]
      },
      {
        name: "decodeTokenTransfer",
        inputs: [
          {
            name: "payload",
            type: "cell"
          }
        ],
        outputs: [
          {
            name: "market_id",
            type: "uint32"
          },
          {
            name: "bet",
            type: "uint8"
          },
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "correct",
            type: "bool"
          }
        ]
      },
      {
        name: "getUpexAccountAddress",
        inputs: [
          {
            name: "answerId",
            type: "uint32"
          },
          {
            name: "user",
            type: "address"
          }
        ],
        outputs: [
          {
            name: "value0",
            type: "address"
          }
        ]
      },
      {
        name: "getUpexOptionAddress",
        inputs: [
          {
            name: "answerId",
            type: "uint32"
          },
          {
            name: "option_id",
            type: "uint32"
          },
          {
            name: "market_id",
            type: "uint32"
          }
        ],
        outputs: [
          {
            name: "value0",
            type: "address"
          }
        ]
      },
      {
        name: "markets",
        inputs: [],
        outputs: [
          {
            components: [
              {
                name: "ticker",
                type: "string"
              },
              {
                name: "curOptionId",
                type: "uint32"
              },
              {
                name: "curOptionStart",
                type: "uint32"
              },
              {
                name: "optionTtl",
                type: "uint32"
              },
              {
                name: "optionOpenDuration",
                type: "uint32"
              },
              {
                name: "winMultiplier",
                type: "uint32"
              }
            ],
            name: "markets",
            type: "map(uint32,tuple)"
          }
        ]
      }
    ],
    data: [
      {
        key: 1,
        name: "deploy_nonce",
        type: "uint32"
      },
      {
        key: 2,
        name: "upexAccountCode",
        type: "cell"
      },
      {
        key: 3,
        name: "upexOptionCode",
        type: "cell"
      },
      {
        key: 4,
        name: "platformCode",
        type: "cell"
      }
    ],
    events: [
      {
        name: "Pause",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "new_state",
            type: "bool"
          }
        ],
        outputs: []
      },
      {
        name: "NewOwner",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "new_owner",
            type: "address"
          }
        ],
        outputs: []
      },
      {
        name: "NewLauncherPubkey",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "pubkey",
            type: "uint256"
          }
        ],
        outputs: []
      },
      {
        name: "NewMarket",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            components: [
              {
                name: "ticker",
                type: "string"
              },
              {
                name: "curOptionId",
                type: "uint32"
              },
              {
                name: "curOptionStart",
                type: "uint32"
              },
              {
                name: "optionTtl",
                type: "uint32"
              },
              {
                name: "optionOpenDuration",
                type: "uint32"
              },
              {
                name: "winMultiplier",
                type: "uint32"
              }
            ],
            name: "new_market",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "UpdateMarket",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "market_id",
            type: "uint32"
          },
          {
            components: [
              {
                name: "ticker",
                type: "string"
              },
              {
                name: "curOptionId",
                type: "uint32"
              },
              {
                name: "curOptionStart",
                type: "uint32"
              },
              {
                name: "optionTtl",
                type: "uint32"
              },
              {
                name: "optionOpenDuration",
                type: "uint32"
              },
              {
                name: "winMultiplier",
                type: "uint32"
              }
            ],
            name: "new_market",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "UpexAccountCodeUpdate",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "old_version",
            type: "uint32"
          },
          {
            name: "new_version",
            type: "uint32"
          }
        ],
        outputs: []
      },
      {
        name: "UpexOptionCodeUpdate",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "old_version",
            type: "uint32"
          },
          {
            name: "new_version",
            type: "uint32"
          }
        ],
        outputs: []
      },
      {
        name: "UpexAccountUpgrade",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "user",
            type: "address"
          },
          {
            name: "old_version",
            type: "uint32"
          },
          {
            name: "new_version",
            type: "uint32"
          }
        ],
        outputs: []
      },
      {
        name: "UpexAccountDeploy",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "user",
            type: "address"
          }
        ],
        outputs: []
      },
      {
        name: "UpexOptionDeploy",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "option",
            type: "address"
          },
          {
            name: "option_id",
            type: "uint32"
          },
          {
            name: "market_id",
            type: "uint32"
          }
        ],
        outputs: []
      },
      {
        name: "ActionRevert",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "user",
            type: "address"
          }
        ],
        outputs: []
      },
      {
        name: "CommitSaved",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            components: [
              {
                name: "market_id",
                type: "uint32"
              },
              {
                name: "option_id",
                type: "uint32"
              },
              {
                name: "direction",
                type: "uint8"
              },
              {
                name: "amount",
                type: "uint128"
              },
              {
                name: "user",
                type: "address"
              },
              {
                components: [
                  {
                    name: "call_id",
                    type: "uint32"
                  },
                  {
                    name: "send_gas_to",
                    type: "address"
                  }
                ],
                name: "meta",
                type: "tuple"
              }
            ],
            name: "commit",
            type: "tuple"
          }
        ],
        outputs: []
      },
      {
        name: "RewardClaim",
        inputs: [
          {
            name: "call_id",
            type: "uint32"
          },
          {
            name: "user",
            type: "address"
          },
          {
            name: "win_amount",
            type: "uint128"
          }
        ],
        outputs: []
      }
    ],
    fields: [
      {
        name: "_pubkey",
        type: "uint256"
      },
      {
        name: "_timestamp",
        type: "uint64"
      },
      {
        name: "_constructorFlag",
        type: "bool"
      },
      {
        name: "deploy_nonce",
        type: "uint32"
      },
      {
        name: "upexAccountCode",
        type: "cell"
      },
      {
        name: "upexOptionCode",
        type: "cell"
      },
      {
        name: "platformCode",
        type: "cell"
      },
      {
        name: "upexAccountVersion",
        type: "uint32"
      },
      {
        name: "upexOptionVersion",
        type: "uint32"
      },
      {
        name: "usdt",
        type: "address"
      },
      {
        name: "usdtWallet",
        type: "address"
      },
      {
        name: "usdtBalance",
        type: "uint128"
      },
      {
        name: "owner",
        type: "address"
      },
      {
        name: "paused",
        type: "bool"
      },
      {
        name: "optionLauncherPubkey",
        type: "uint256"
      },
      {
        name: "marketCount",
        type: "uint16"
      },
      {
        components: [
          {
            name: "ticker",
            type: "string"
          },
          {
            name: "curOptionId",
            type: "uint32"
          },
          {
            name: "curOptionStart",
            type: "uint32"
          },
          {
            name: "optionTtl",
            type: "uint32"
          },
          {
            name: "optionOpenDuration",
            type: "uint32"
          },
          {
            name: "winMultiplier",
            type: "uint32"
          }
        ],
        name: "markets",
        type: "map(uint32,tuple)"
      },
      {
        components: [
          {
            name: "market_id",
            type: "uint32"
          },
          {
            name: "option_id",
            type: "uint32"
          },
          {
            name: "direction",
            type: "uint8"
          },
          {
            name: "amount",
            type: "uint128"
          },
          {
            name: "user",
            type: "address"
          },
          {
            components: [
              {
                name: "call_id",
                type: "uint32"
              },
              {
                name: "send_gas_to",
                type: "address"
              }
            ],
            name: "meta",
            type: "tuple"
          }
        ],
        name: "pendingCommits",
        type: "map(uint32,tuple)"
      },
      {
        name: "req_nonce",
        type: "uint32"
      }
    ]
  } as const