import { css, DefaultTheme } from 'styled-components'

export const stateModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  valid: (theme: DefaultTheme) => css`
    border: 1.5px solid ${theme.colors.secondary[1]};
    color: ${theme.colors.secondary[1]};
  `,
  invalid: (theme: DefaultTheme) => css`
    border: 1.5px solid ${theme.colors.red};
    color: ${theme.colors.red};
  `,
  disabled: (theme: DefaultTheme) => css`
    border: 1.5px solid ${theme.colors.lightGray};
    color: ${theme.colors.lightGray};

    & > label {
      color: ${theme.colors.darkGray};
    }
  `
}
