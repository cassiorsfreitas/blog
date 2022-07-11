import styled, { css } from 'styled-components'
import { stateModifiers } from '../../../constants/components/styles'
import { InputProps } from './interface'

export const Container = styled.div<InputProps>`
  ${({
    theme,
    label,
    outsideLabel,
    invalid,
    valid,
    disabled,
    fullWidth,
    margin,
    type,
    noPadding
  }) => css`
    background-color: ${theme.colors.background[1]};
    color: ${theme.colors.primary[1]};
    font-size: 1.125rem;
    border-radius: 1rem;
    margin-bottom: ${margin ? '3.5rem' : '24px'};
    min-width: 6rem;
    height: 4.8rem;
    width: max-content;
    padding: 1.5rem 1rem 1rem;
    padding: ${noPadding && '0rem 1rem'};

    ${!!valid && stateModifiers.valid(theme)}
    ${!!invalid && stateModifiers.invalid(theme)}
    ${!!disabled && stateModifiers.disabled(theme)}
    ${!!fullWidth && stateModifiers.fullWidth}

    & > div > input {
      border: none;
      width: 100%;
      height: 2.5rem;
      color: inherit;
      background: none;
      font-size: inherit;
      padding: 0 0.5rem;

      &::placeholder {
        color: ${theme.colors.primary[1]};
      }
      &:focus {
        outline: none;
      }

      &::-webkit-search-cancel-button {
        display: none;
      }
    }

    &::before {
      content: '${label}';
      position: absolute;
      background-color: ${theme.colors.background[0]};
      font-size: 0.75rem;
      margin-left: 0.75rem;
      padding: 0 0.5rem;
      max-height: 3px;
      display: flex;
      align-items: center;
      border-color: ${theme.colors.primary[0]};
    }

    .line {
      border-bottom: 1px solid ${theme.colors.primary[3]};
      margin: 0 0.5rem;
    }

    label {
      position: absolute;
      font-size: 0.875rem;
      margin-top: -1.75rem;
    }

    p {
      color: inherit;
      font-size: 0.75rem;
      margin-top: 0.75rem;
      margin-left: ${outsideLabel ? '0' : '1.25rem'};
    }

    .input-container {
      display: flex;
      height: 100%;
      align-items: center;
    }

    .icon {
      padding: 0 1rem;
      transition: 140ms ease;
      cursor: ${type === 'password' ? 'pointer' : 'default'};
      font-size: 1rem;

      &:hover {
        opacity: 0.8;
        transition: 140ms ease;
      }
    }
  `}
`
