import { MainContentProps } from './interface'
import { Container } from './styles'

const MainContent = ({ children }: MainContentProps) => {
  return <Container>{children}</Container>
}

export default MainContent
