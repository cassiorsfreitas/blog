import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      color: ${theme.colors.primary[1]};
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.bold};
      font-size: 1.25rem;
      margin-bottom: 15px;
    }

    span {
      font-size: 1rem;
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.paragraph[0]};
    }

    .categories {
      display: flex;
      padding: 0.1rem 0px;
      flex-wrap: nowrap;
      overflow: auto;
      width: 90vw;
      gap: 1rem;
    }

    .categorie {
      flex: 0 0 auto;
    }
  `}
`
