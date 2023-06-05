export const UpexOption = {
	"ABI version": 2,
	data: [
		{
			key: 1,
			name: "id",
			type: "uint32"
		},
		{
			key: 2,
			name: "market_id",
			type: "uint32"
		}
	],
	events: [],
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
			name: "id",
			type: "uint32"
		},
		{
			name: "market_id",
			type: "uint32"
		},
		{
			name: "root",
			type: "address"
		},
		{
			name: "platform_code",
			type: "cell"
		},
		{
			name: "currentVersion",
			type: "uint32"
		},
		{
			name: "start",
			type: "uint32"
		},
		{
			name: "commitEnd",
			type: "uint32"
		},
		{
			name: "close",
			type: "uint32"
		},
		{
			name: "multiplier",
			type: "uint32"
		},
		{
			name: "openPrice",
			type: "uint128"
		},
		{
			name: "closePrice",
			type: "uint128"
		}
	],
	functions: [
		{
			inputs: [],
			name: "getDetails",
			outputs: [
				{
					name: "_id",
					type: "uint32"
				},
				{
					name: "_market_id",
					type: "uint32"
				},
				{
					name: "_root",
					type: "address"
				},
				{
					name: "_platform_code",
					type: "cell"
				},
				{
					name: "_currentVersion",
					type: "uint32"
				},
				{
					name: "_start",
					type: "uint32"
				},
				{
					name: "_commitEnd",
					type: "uint32"
				},
				{
					name: "_close",
					type: "uint32"
				},
				{
					name: "_openPrice",
					type: "uint128"
				},
				{
					name: "_closePrice",
					type: "uint128"
				},
				{
					name: "_multiplier",
					type: "uint32"
				}
			]
		},
		{
			inputs: [
				{
					name: "close_price",
					type: "uint128"
				}
			],
			name: "setClosePrice",
			outputs: []
		},
		{
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
			name: "process_claimReward",
			outputs: []
		},
		{
			inputs: [
				{
					name: "new_code",
					type: "cell"
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
			name: "upgrade",
			outputs: []
		},
		{
			inputs: [],
			name: "constructor",
			outputs: []
		}
	],
	header: [
		"time"
	],
	version: "2.2"
} as const