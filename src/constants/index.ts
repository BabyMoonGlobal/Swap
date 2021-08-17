import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap-libs/sdk'

export const ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const $BMOON = new Token(
  ChainId.MAINNET,
  '0x5d56BC67c29E6b5A4df2F3E3DF3ca786420C4da5',
  18,
  '$BMOON',
  'BabyMoon'
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token'
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], BUSD, USDT, $BMOON, ETH],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], $BMOON, BUSD, USDT],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], $BMOON, BUSD, USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d56BC67c29E6b5A4df2F3E3DF3ca786420C4da5', 18, '$BMOON', 'BabyMoon'),
      new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
    ],
    [BUSD, USDT],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
