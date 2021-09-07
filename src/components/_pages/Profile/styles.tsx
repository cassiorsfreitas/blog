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
      width: 8rem;
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
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .tech {
      color: ${theme.colors.primary[1]};
    }

    @media screen and (min-width: 720px) {
      padding: 0 15rem;

      .description {
        text-align: justify;
      }
    }
  `}
`
