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

    .profileImageIn {
      border-radius: 100rem;
    }

    .social {
      color: ${theme.colors.primary[0]};
      display: flex;
      gap: 2rem;
    }

    .description {
      font-weight: ${theme.font.weight.normal};
      color: ${theme.colors.primary[1]};
      text-align: justify;
      margin-top: 1rem;
      h2 {
        margin-bottom: 1rem;
        font-weight: ${theme.font.weight.normal};
      }
    }

    .career {
      margin-top: 3rem;
      margin-bottom: 3rem;

      .careerContainer {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      h2 {
        font-weight: ${theme.font.weight.normal};
        color: ${theme.colors.primary[1]};
        margin-bottom: 1rem;
      }
    }

    @media screen and (min-width: 720px) {
      padding: 0 15rem;

      .photo {
        width: 20rem;
      }

      .career {
        margin-top: 3rem;
        margin-bottom: 3rem;

        .careerContainer {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }

        h2 {
          font-weight: ${theme.font.weight.normal};
          color: ${theme.colors.primary[1]};
          margin-bottom: 1rem;
        }
      }
    }

    @media screen and (min-width: 1460px) {
      padding: 0 32rem;
    }
  `}
`
