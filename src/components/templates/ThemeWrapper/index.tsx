import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProps } from './interface'

import GlobalStyle from '../../../styles/global'
import dark from '../../../styles/default'

const ThemeWrapper = ({ children, ...props }: ThemeProps) => {
  return (
    <ThemeProvider theme={dark} {...props}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default ThemeWrapper
