import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    .postCardContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .more {
      margin-top: 4rem;
    }

    .simple-button {
      background-color: ${theme.colors.background[1]};
    }

    span {
      font-size: 1rem;
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.paragraph[1]};
    }
  `}
`
