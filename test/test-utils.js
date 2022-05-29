/* eslint-disable react/display-name */
/* eslint-disable no-undef */
// test-utils.js
import { render } from '@testing-library/react'
// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ dark }) => {
  return dark
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
