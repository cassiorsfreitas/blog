import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  uppercase?: boolean
  white?: boolean
  outline?: boolean
  rounded?: boolean
  className?: string
  disabled?: boolean
  hasIcon?: boolean
  selected?: boolean
  submit?: boolean
  // eslint-disable-next-line no-undef
  icon?: JSX.Element
  onClick?: () => void
}
