import React from 'react'

export type InputProps = {
  noPadding?: boolean
  children?: React.ReactNode
  value?: string
  label?: string
  required?: boolean
  outsideLabel?: boolean
  type?:
    | 'text'
    | 'password'
    | 'submit'
    | 'search'
    | 'tel'
    | 'time'
    | 'email'
    | 'file'
    | 'date'
    | 'hidden'
    | 'month'
    | 'number'
    | 'image'
    | 'datetime-local'
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoComplete?: 'on' | 'off'
  placeholder?: string
  valid?: boolean
  invalid?: boolean
  onChange?: (e: any) => void
  message?: string
  alwaysShowMask?: boolean
  fullWidth?: boolean
  maskPlaceholder?: string | null
  // eslint-disable-next-line no-undef
  icon?: JSX.Element
  disabled?: boolean
  margin?: boolean
  mask?: any
  maskChar?: null
  ref?: React.Ref<HTMLInputElement>
  onBlur?: () => void
  onClick?: () => void
}

export type TextareaProps = {
  children?: React.ReactNode
  value?: string
  label?: string
  required?: boolean
  outsideLabel?: boolean
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoComplete?: 'on' | 'off'
  placeholder?: string
  valid?: boolean
  invalid?: boolean
  onChange?: (e: any) => void
  message?: string
  fullWidth?: boolean
  disabled?: boolean
  margin?: boolean
  ref?: React.Ref<HTMLTextAreaElement>
  onClick?: () => void
}
