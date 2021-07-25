import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    color: ${theme.colors.primary[0]};
    background-color: ${theme.colors.background[0]};
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    position: relative;
    border-top: 1px solid ${theme.colors.darkGray};
  `}
`
