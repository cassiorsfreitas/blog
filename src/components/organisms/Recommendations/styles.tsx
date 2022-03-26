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

    .explore {
      background-color: ${theme.colors.background[1]};
      color: ${theme.colors.paragraph[1]};
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 1rem;
      align-items: center;
      font-size: 2rem;
      cursor: pointer;
      padding: 0.75rem 0;
    }

    @media screen and (min-width: 720px) {
      .postCardContainer {
        width: 100%;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(6, 320px);
        overflow-x: auto;
        padding-bottom: 1rem;
      }

      .postCardContainer::-webkit-scrollbar {
        width: 100%;
      }

      .postCardContainer::-webkit-scrollbar-thumb {
        background-image: linear-gradient(90deg, #363636 0%, #fbc72b 99%);
        box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
        border-radius: 100px;
      }

      .card {
        width: 100%;
      }

      .explore {
        background-color: ${theme.colors.background[1]};
        color: ${theme.colors.paragraph[1]};
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 1rem;
        align-items: center;
        font-size: 4rem;
        cursor: pointer;
        padding: 0;
      }
    }
  `}
`
