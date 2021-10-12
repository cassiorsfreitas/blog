import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .titles {
      text-align: center;
    }

    .photo {
      width: 10rem;
      margin-top: 3rem;
      margin-bottom: 1.5rem;
    }

    .ProfileImageIn {
      border-radius: 100rem;
    }

    .social {
      color: ${theme.colors.primary[0]};
      display: flex;
      gap: 2rem;
    }

    .description {
      text-align: center;
      font-weight: ${theme.font.weight.normal};
      color: ${theme.colors.primary[1]};
    }

    .status {
      padding: 2rem 0;
      width: 100%;
      min-width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .tech {
      color: ${theme.colors.primary[1]};
      margin-top: 1rem;

      .about-title {
        font-size: 1rem;
        font-weight: ${theme.font.weight.light};
      }
    }

    @media screen and (min-width: 720px) {
      padding: 0 15rem;

      .status {
        flex-direction: row;
        justify-content: space-between;
      }

      .description {
        text-align: justify;
      }
    }

    @media screen and (min-width: 1460px) {
      padding: 0 32rem;

      .status {
        flex-direction: row;
      }

      .description {
        text-align: justify;
      }
    }
  `}
`
