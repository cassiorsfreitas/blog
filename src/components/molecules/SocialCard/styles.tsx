import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    .card {
      width: 150px;
      height: 150px;
    }

    .container-card {
      width: 100%;
      height: 100%;
      padding: 1rem;
      background: ${theme.colors.background[1]};
      border-radius: 0.4rem;
      color: ${theme.colors.primary[0]};
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .container-card:hover {
      transform: scale(1.1);
    }

    .title {
      color: ${theme.colors.primary[1]};
    }

    .subtitle {
      color: ${theme.colors.primary[1]};
      font-weight: ${theme.font.weight.light};
    }

    .icon {
      margin-top: 1rem;
    }

    @media screen and (max-width: 360px) {
      .card {
        width: 140px;
        height: 140px;
      }
    }

    @media screen and (max-width: 320px) {
      .card {
        width: 120px;
        height: 120px;
      }

      .icon {
        margin-top: 0.5rem;
      }

      .title,
      .subtitle {
        font-size: 0.8rem;
      }
    }
  `}
`
