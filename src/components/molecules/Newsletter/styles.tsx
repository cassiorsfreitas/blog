import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    text-align: center;
    width: 100%;
    background-color: ${theme.colors.background[1]};
    border-radius: 0.5rem;
    padding-top: 1.6rem;
    font-weight: ${theme.font.weight.normal};
    color: ${theme.colors.paragraph[1]};
    padding-bottom: 1.2rem;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 1rem;
      padding: 0 1rem;
    }

    .input-container {
      padding-top: 0;
      width: 100%;
    }

    .button-container {
      display: flex;
      justify-content: center;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-bottom: 0.6rem;
      width: 100%;
    }

    .button-subscribe {
      background-color: ${theme.colors.background};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        color: ${theme.colors.paragraph[0]};
        font-size: 0.9rem;
        margin-top: 0;
      }
    }

    .info {
      margin-top: 1rem;
      padding-top: 0;
      padding-bottom: 1rem;

      a {
        color: ${theme.colors.paragraph[1]};
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 720px) {
      padding-bottom: 0rem;
      padding-left: 2rem;
      padding-right: 2rem;

      .title {
        padding-left: 1rem;
      }
      .content {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 4rem;
        padding-right: 4rem;
      }

      .input-container {
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 0;
      }

      .info {
        margin-top: 0;

      }
  `}
`
