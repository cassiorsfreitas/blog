import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    .postCardContainer {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .more {
      margin-top: 1.5rem;
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

    @media screen and (min-width: 720px) {
      .postCardContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .card {
        max-width: 20rem;
        flex-basis: 20rem;
        flex-grow: 1;
      }
    }
  `}
`
