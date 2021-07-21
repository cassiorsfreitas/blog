import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
      font-weight: ${theme.font.weight.bold};
    }

    h2 {
      font-weight: ${theme.font.weight.normal};
      font-size: 1.125;
      margin: 1rem 0rem 0.5rem;
    }

    h4 {
      font-weight: ${theme.font.weight.light};
    }

    p {
      margin-top: 1rem;
    }

    .text-content {
      margin-top: 2rem;
      color: ${theme.colors.paragraph[1]};
      font-weight: ${theme.font.weight.light};
    }

    blockquote {
      padding: 2rem;
      text-align: center;
      position: relative;
      font-size: 1.375rem;
      font-weight: ${theme.font.weight.light};
    }

    blockquote:before {
      content: '"';
      left: 0;
      top: 0rem;
      font-size: 7rem;
      position: absolute;
      color: ${theme.colors.primary[0]};
    }
  `}
`
