import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    font-size: 0.8rem;

    .spotify {
      opacity: 0.5;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    @media screen and (max-width: 780px) {
      display: block;
      background-color: ${theme.colors.primaryLowOpacity[1]};
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-bottom: 2rem;
      padding: 1rem;
      color: white;
      gap: 0.3rem;
    }
  `}
`
