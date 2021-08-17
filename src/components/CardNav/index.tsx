import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {TranslateString(1142, 'SWAP')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'LIQUIDITY')}
        </ButtonMenuItem>
        <ButtonMenuItem
          id="pool-nav-link"
          as="a"
          href="https://pancakeswap.info/token/0x5d56BC67c29E6b5A4df2F3E3DF3ca786420C4da5"
          target="_blank"
          rel="noreferrer noopener"
        >
          INFO
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
