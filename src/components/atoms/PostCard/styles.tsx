import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 340px;
    border-radius: 1rem;
    width: 100%;
    align-items: center;

    .cardContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .cardImage {
      min-height: 170px;
      border-radius: 1rem 1rem 0 0;
    }

    .cardImageIn {
      border-radius: 1rem 1rem 0 0;
    }

    .cardDescription {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      color: ${theme.colors.paragraph[1]};
      background: ${theme.colors.background[1]};
      min-height: 170px;
      border-radius: 0 0 1rem 1rem;
    }

    .title {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1rem;
      font-weight: ${theme.font.weight.normal};
    }

    .details {
      font-weight: ${theme.font.weight.normal};
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      bottom: 0;
    }

    .clockIcon {
      color: ${theme.colors.primary[0]};
      margin-right: 0.5rem;
    }
  `}
`
