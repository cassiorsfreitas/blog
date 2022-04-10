import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './interface'

const wrapperModifiers = {
  small: () => css`
    @media only screen and (min-width: 680px) {
      font-size: 1rem;
      height: 1.95rem;
      padding: 0.15rem 1.5rem;
    }
    font-size: 1rem;
    padding: 0.5rem 3.5rem;
  `,
  medium: () => css`
    font-size: 1rem;
    padding: 0.5rem 3.5rem;
  `,
  large: () => css`
    font-size: 1rem;
    padding: 1.25rem 2rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  outline: (theme: DefaultTheme) => css`
    background: none;
    border: 1px solid ${theme.colors.primary[1]};
    color: ${theme.colors.primary[1]};
  `,
  white: (theme: DefaultTheme) => css`
    background: white;
    border: 1px solid white;
    color: ${theme.colors.primary[0]};
  `,
  uppercase: () => css`
    text-transform: uppercase;
  `,
  rounded: () => css`
    border-radius: 1rem;
  `,
  disabled: () => css`
    opacity: 0.4;
    cursor: default;
  `,
  hover: (theme: DefaultTheme) => css`
    &:hover {
      cursor: pointer;
      transition: 140ms ease;
      background: ${theme.colors.primary[1]};
      color: white;
      border: 1px solid rgba(0, 0, 0, 0);
    }
  `,
  active: (theme: DefaultTheme, outline?: boolean) => css`
    &:active {
      background: ${outline
        ? theme.colors.primary[0]
        : theme.colors.secondary[1]};
      color: white;
    }
  `,
  selected: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary[0]};
    color: white;
    border: none;
  `,
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    svg {
      width: 1rem;

      & + span {
        margin-left: 0.5rem;
      }
    }
  `
}

export const WrapperButton = styled.button<ButtonProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    outline,
    uppercase,
    rounded,
    disabled,
    white,
    selected
  }) => css`
    background: ${theme.colors.primary[0]};
    color: white;
    border: none;
    height: 46px;
    border-radius: 0.25rem;
    cursor: pointer;
    min-width: 5.5rem;
    white-space: nowrap;

    ${!!size && wrapperModifiers[size]}
    ${!!fullWidth && wrapperModifiers.fullWidth}
    ${!!hasIcon && wrapperModifiers.withIcon}
    ${!!uppercase && wrapperModifiers.uppercase}
    ${!!outline && wrapperModifiers.outline(theme)}
    ${!!white && wrapperModifiers.white(theme)}
    ${!!rounded && wrapperModifiers.rounded}
    ${!!selected && wrapperModifiers.selected(theme)}
    ${disabled ? wrapperModifiers.disabled : wrapperModifiers.hover(theme)}
    ${
      disabled
        ? wrapperModifiers.disabled
        : wrapperModifiers.active(theme, outline)
    }

    transition: 200ms ease;

    &:focus {
      outline: none;
      border: 1px solid ${
        outline ? theme.colors.primary[0] : theme.colors.primary[0]
      };
      background-color: ${
        outline ? theme.colors.primary[0] : theme.colors.primary[0]
      };
      color: white;
    }

    p {
      margin 0;
    }
  `}
`
