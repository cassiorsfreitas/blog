import { Container } from './styles'

export interface PropsTag {
  category: string
}

const Tag = ({ category }: PropsTag) => {
  return <Container data-testid="category">{category}</Container>
}

export default Tag
