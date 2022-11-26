import { Container } from './styles'

export interface PropsTag {
  category: string
}

const Tag = ({ category }: PropsTag) => {
  return <Container data-testId="category">{category}</Container>
}

export default Tag
