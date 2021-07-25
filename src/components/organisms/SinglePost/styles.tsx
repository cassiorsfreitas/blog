import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
      font-weight: ${theme.font.weight.bold};
      margin-top: -1rem;
    }

    h2 {
      font-weight: ${theme.font.weight.normal};
      font-size: 2rem;
      margin: 1rem 0rem 0.5rem;
    }

    h3 {
      font-weight: ${theme.font.weight.normal};
      font-size: 1.125rem;
    }

    h4 {
      font-weight: ${theme.font.weight.light};
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    p {
      margin-top: 1rem;
    }

    .tag {
      width: 40%;
      margin-top: 1rem;
      text-align: center;
      font-size: 0.875rem;
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.normal};
      background-color: ${theme.colors.primary[0]};
      border-radius: 1rem;
      padding: 0.3rem 2rem;
    }

    .backToList {
      margin-top: 1rem;
      color: ${theme.colors.primary[0]};
    }

    .text-content {
      margin-top: 2rem;
      color: ${theme.colors.paragraph[1]};
      font-weight: ${theme.font.weight.light};
    }

    blockquote {
      padding: 2rem;
      margin-top: 1rem;
      text-align: center;
      position: relative;
      font-size: 1.375rem;
      font-weight: ${theme.font.weight.light};
    }

    blockquote:before {
      content: '“';
      left: 0;
      top: 0rem;
      font-size: 7rem;
      position: absolute;
      font-family: ;
      color: ${theme.colors.primary[0]};
    }
  `}
`
