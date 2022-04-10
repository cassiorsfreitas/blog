import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    margin-bottom: 2rem;

    input {
      border: 1px solid black;
    }

    @media screen and (min-width: 720px) {
      width: 100%;
    }
  `}
`
