import { Container } from './styles'
import { SectionTitleProps } from './interface'

const SectionTitle = ({ title, strong }: SectionTitleProps) => {
  return <Container strong={strong}>{title}</Container>
}

export default SectionTitle
