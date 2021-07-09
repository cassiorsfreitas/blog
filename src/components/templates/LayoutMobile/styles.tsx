import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding-top: 20px;

    .menu-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `}
`
