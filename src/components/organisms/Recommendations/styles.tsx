import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    .postCardContainer {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
  `}
`
