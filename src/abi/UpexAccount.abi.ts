export const UpexAccount = {
	"ABI version": 2,
	version: "2.2",
	header: [
		"time"
	],
	functions: [
		{
			name: "constructor",
			inputs: [],
			outputs: []
		},
		{
			name: "upgrade",
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
			outputs: []
		},
		{
			name: "process_saveCommit",
			inputs: [
				{
					name: "req_nonce",
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
			name: "process_claimReward",
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
					name: "openPrice",
					type: "uint128"
				},
				{
					name: "closePrice",
					type: "uint128"
				},
				{
					name: "multiplier",
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
			name: "commits",
			inputs: [],
			outputs: [
				{
					components: [
						{
							name: "amount",
							type: "uint128"
						},
						{
							name: "direction",
							type: "uint8"
						}
					],
					name: "commits",
					type: "map(uint32,map(uint32,tuple))"
				}
			]
		}
	],
	data: [],
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
			name: "currentVersion",
			type: "uint32"
		},
		{
			name: "root",
			type: "address"
		},
		{
			name: "user",
			type: "address"
		},
		{
			components: [
				{
					name: "amount",
					type: "uint128"
				},
				{
					name: "direction",
					type: "uint8"
				}
			],
			name: "commits",
			type: "map(uint32,map(uint32,tuple))"
		},
		{
			name: "platform_code",
			type: "cell"
		}
	]
} as const