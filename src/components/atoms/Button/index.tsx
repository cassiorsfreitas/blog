import { WrapperButton } from './styles'
import { ButtonProps } from './interface'

const Button = ({
  size = 'medium',
  fullWidth = false,
  icon,
  children,
  className,
  onClick,
  outline,
  white,
  selected,
  submit,
  ...props
}: ButtonProps) => {
  return (
    <WrapperButton
      data-testid="button"
      className={className}
      size={size}
      white={white}
      outline={outline}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      onClick={onClick}
      selected={selected}
      type={submit ? 'submit' : 'button'}
      {...props}
    >
      {icon}
      {children && <p>{children}</p>}
    </WrapperButton>
  )
}

export default Button
