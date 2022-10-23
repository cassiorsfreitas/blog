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
      flex-direction: column;
    }

    .header-profile h1 {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 0;
      margin: 0;
    }

    @media screen and (max-width: 780px) {
      display: flex;
      align-items: center;

      .header-profile h1 {
        font-size: 1.5rem;
        padding: 0;
        margin: 0;
      }
    }
  `}
`

export const ContainerMobile = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 780px) {
      display: flex;
      justify-content: center;
    }
  `}
`
