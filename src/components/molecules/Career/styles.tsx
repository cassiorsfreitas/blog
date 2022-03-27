import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.primary[1]};

    a {
      color: ${theme.colors.primary[0]};
    }

    h3 {
      font-size: 1.3rem;
      font-weight: ${theme.font.weight.normal};
    }

    p {
      font-weight: ${theme.font.weight.normal};
    }

    span {
      font-weight: ${theme.font.weight.light};
      color: ${theme.colors.gray};
    }

    @media screen and (min-width: 720px) {
    }

    @media screen and (min-width: 1460px) {
    }
  `}
`
