import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    color: ${theme.colors.primary[0]};
    background-color: #202329;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: relative;
    border-top: 1px solid ${theme.colors.darkGray};

    .scrollTop {
      cursor: pointer;
    }

    .menu-desktop {
      display: none;
    }

    @media screen and (min-width: 720px) {
      justify-content: center;
      gap: 3rem;
      border-top: 1px solid #333333;

      .menu-desktop {
        display: block;
      }

      .menu-mobile {
        width: 1.25rem;
        opacity: 0;
      }

      a:hover .menu-mobile {
        opacity: 1;
        transition: opacity 0.2s linear;
      }

      .button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  `}
`
