import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.light};
    margin-bottom: 15px;

    .titleMin {
      color: ${theme.colors.darkGray};
      font-weight: ${theme.font.weight.normal};
      font-size: 1.25rem;
    }

    .titleMax {
      color: ${theme.colors.primary[1]};
      font-weight: ${theme.font.weight.bold};
      font-size: 1.75rem;
    }
  `}
`
