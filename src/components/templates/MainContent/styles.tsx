import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 0px 1.5rem;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.bold};
    font-size: 1.25rem;
  `}
`
