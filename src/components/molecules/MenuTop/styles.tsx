import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    color: ${theme.colors.primary[1]};
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;
    position: relative;

    .picture-profile {
      border-radius: 100%;
    }

    .header-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  `}
`
