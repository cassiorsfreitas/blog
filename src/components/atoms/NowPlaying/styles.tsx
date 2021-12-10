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
      display: none;
    }
  `}
`
