import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    width: 100%;
    background-color: ${theme.colors.primary[2]};
    margin-bottom: 2rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: ${theme.colors.primary[1]};
    gap: 0.3rem;

    .spotify {
      opacity: 0.5;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    @media screen and (max-width: 780px) {
      background-color: ${theme.colors.primary[2]};
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-bottom: 2rem;
      padding: 1rem;
      color: ${theme.colors.primary[1]};
      gap: 0.3rem;
    }
  `}
`
