import { Container } from './styles'
import { SectionTitleProps } from './interface'

const SectionTitle = ({ title, strong = false }: SectionTitleProps) => {
  return (
    <Container strong={strong} data-testid="section-title">
      {title}
    </Container>
  )
}

export default SectionTitle
