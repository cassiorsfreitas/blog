import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProps } from './interface'

import { useGlobalContext } from '../../../contexts/globalContext'
import GlobalStyle from '../../../styles/global'
import dark from '../../../styles/default'
import light from '../../../styles/light'

const ThemeWrapper = ({ children, ...props }: ThemeProps) => {
  const { isLight } = useGlobalContext()

  return (
    <ThemeProvider theme={isLight ? light : dark} {...props}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default ThemeWrapper
