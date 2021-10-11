import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding-bottom: 6rem;

    @media screen and (min-width: 1440px) {
      padding-bottom: 8rem;
    }

    .menu-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 99;
    }
  `}
`
