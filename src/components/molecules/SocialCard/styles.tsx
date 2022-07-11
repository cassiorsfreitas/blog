import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    .card {
      width: 47%;
      height: 47%;
      cursor: pointer;
    }

    .container-card {
      padding: 1rem;
      background: ${theme.colors.background[1]};
      border-radius: 0.4rem;
      color: ${theme.colors.primary[0]};
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .title {
      color: ${theme.colors.primary[1]};
      font-size: 1rem;
    }

    .subtitle {
      color: ${theme.colors.primary[1]};
      font-weight: ${theme.font.weight.light};
      font-size: 1rem;
    }

    .icon {
      margin-top: 1rem;
      color: ${theme.colors.primary[3]};
    }

    @media screen and (max-width: 360px) {
      .card {
        width: 140px;
        height: 140px;
      }
    }

    @media screen and (max-width: 320px) {
      .card {
        width: 124px;
        height: 124px;
      }

      .icon {
        margin-top: 0.5rem;
      }

      .title,
      .subtitle {
        font-size: 0.8rem;
      }
    }

    @media screen and (min-width: 720px) {
      justify-content: center;

      .card {
        flex-grow: 1;
      }
    }
  `}
`
