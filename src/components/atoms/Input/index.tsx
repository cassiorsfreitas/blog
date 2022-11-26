import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import { Container } from './styles'

import { InputProps } from './interface'

const Input = ({
  value,
  label,
  outsideLabel,
  type,
  valid,
  invalid,
  onChange,
  message,
  required,
  autoComplete,
  autoCapitalize,
  placeholder,
  fullWidth,
  disabled,
  icon,
  mask,
  ref,
  onBlur,
  noPadding,
  ...props
}: InputProps) => {
  const [isVisible, setVisible] = useState(false)
  const Eyes = () => {
    if (isVisible) {
      return <FaRegEyeSlash data-testid="hide-password" size={18} />
    }
    return <FaRegEye data-testid="show-password" size={18} />
  }
  return (
    <>
      <Container
        data-testid="input-container"
        label={outsideLabel ? '' : label}
        valid={valid}
        type={type}
        invalid={invalid}
        fullWidth={fullWidth}
        disabled={disabled}
        outsideLabel={outsideLabel}
        margin={!!message}
        noPadding={noPadding}
      >
        <label data-testid="input-label">{outsideLabel && label}</label>

        <div className="input-container">
          <InputMask
            data-testid="input"
            inputRef={ref}
            type={isVisible ? 'text' : type}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete || 'email'}
            onChange={onChange}
            maskChar={null}
            alwaysShowMask={false}
            mask={mask}
            onBlur={onBlur}
            {...props}
          />
          {icon ||
            (type === 'password' && (
              <div
                data-testid="input-icon"
                className="icon"
                onClick={() => setVisible(!isVisible)}
              >
                {type === 'password' ? <Eyes /> : icon}
              </div>
            ))}
        </div>
        <div className="line"></div>
        <p data-testid="input-message">{message}</p>
      </Container>
    </>
  )
}

export default Input
