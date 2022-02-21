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
      margin: 2rem 0rem 0.5rem;
    }

    h3 {
      font-weight: ${theme.font.weight.normal};
      font-size: 1.125rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    h4 {
      font-weight: ${theme.font.weight.light};
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    h5 {
      font-weight: ${theme.font.weight.bold};
      margin: 1.5rem 0;
      font-size: 0.875rem;
    }

    p {
      margin-top: 1rem;
    }

    a {
      color: ${theme.colors.primary[0]};
    }

    hr {
      margin-top: 2rem;
      opacity: 0.1;
    }

    img[alt$='-fullwidth'] {
      width: 100%;
      display: block;
    }

    ul li::marker {
      color: ${theme.colors.primary[0]};
    }

    ul > li {
      margin-left: 1rem;
    }

    .tag {
      width: 40%;
      margin-top: 2rem;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .fav-icon {
      margin-left: 1rem;
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

    iframe {
      margin-top: 1rem;
    }

    .message {
      background: ${theme.colors.primary[1]};
      border-radius: 0.8rem;
      padding: 0.5rem 2rem;
      text-align: center;
      margin-top: 1rem;
      display: none;
    }

    .message-content {
      color: ${theme.colors.background[0]};
    }

    .scale-true {
      display: block;
      animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }

    /* .post-image {
      padding: 0 18rem;
    } */

    @keyframes scale-up-ver-top {
      0% {
        transform: scaleY(0.4);
        transform-origin: 100% 0%;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 100% 0%;
      }
    }

    @media screen and (min-width: 720px) {
      .tag {
        max-width: 10rem;
      }

      .desktop {
        padding: 0 18rem;
      }
    }

    @media screen and (min-width: 1460px) {
      .desktop {
        padding: 0 32rem;
      }
    }
  `}
`
