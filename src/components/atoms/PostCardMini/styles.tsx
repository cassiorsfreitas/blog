import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    .cardContainer {
      width: 100%;
      display: flex;
      height: 120px;
      background: ${theme.colors.background[1]};
      border-radius: 1rem;
    }

    .cardImage {
      width: 60%;
      max-height: 120px;
      position: relative;
    }

    .cardImageIn {
      border-radius: 1rem 0 0 1rem;
    }

    .cardDescription {
      width: 60%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: ${theme.colors.paragraph[1]};
    }

    .title {
      font-size: 16px;
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
      color: ${theme.colors.primary[3]};
      margin-right: 0.5rem;
    }
  `}
`
