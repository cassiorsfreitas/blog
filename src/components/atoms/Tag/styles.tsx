import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: 0.875rem;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.normal};
    background-color: ${theme.colors.primary[0]};
    border-radius: 1rem;
    padding: 0.3rem 1rem;
    width: 6rem;
    text-align: center;
  `}
`
