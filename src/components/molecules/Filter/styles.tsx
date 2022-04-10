import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 100%;

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
      gap: 1rem;
    }

    @media (min-width: 768px) {
      .categories {
        gap: 0.8rem;
      }
    }

    .categories::-webkit-scrollbar {
      display: none;
    }

    .category {
      flex: 0 0 auto;
    }
  `}
`
