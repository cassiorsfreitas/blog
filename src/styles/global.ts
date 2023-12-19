import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    height: 100%;
  }

  html,
  body {
    padding: 0;
    min-height: 100%;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.background[0]};
    font-family: 'Fira Code', sans-serif;
    scroll-behavior: smooth;

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3.25rem;
    margin-bottom: 1rem;
    font-family: 'Fira Code', sans-serif;

  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Fira Code', sans-serif;

  }

  h3 {
    font-size: 1rem;
  }

  p, span {
    line-height: 1.75rem
  }

  input,
  textarea,
  button,
  select,
  img,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .mrg-top-01 {
    margin-top: 1rem;
  }
  .mrg-top-02 {
    margin-top: 2rem;
  }
  .mrg-bottom-01 {
    margin-top: 2rem;
  }
  .mrg-bottom-02 {
    margin-top: 2rem;
  }
  .mrg-v-01 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .mrg-v-02 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

`

export default GlobalStyles
