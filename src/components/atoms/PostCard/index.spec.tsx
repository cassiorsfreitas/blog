import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import PostCard from '.'
import { PostCardProps } from './interface'
import { dataMockPostCard } from '../../../constants/dataMock/index'

const makeSut = (props: Partial<PostCardProps> = {}) => {
  const defaultProps = {
    ...dataMockPostCard,
    ...props
  }

  return render(
    <ThemeProvider theme={dark}>
      <PostCard {...defaultProps} />
    </ThemeProvider>
  )
}

describe('PostCard component', () => {
  test('should render by default', () => {
    makeSut()
    const postCard = screen.queryByTestId('post-card')
    expect(postCard).toBeInTheDocument()
  })

  test('should render with correct text', () => {
    makeSut()
    const postCard = screen.queryByTestId('post-card')
    expect(postCard).toHaveTextContent(dataMockPostCard.title)
    expect(postCard).toHaveTextContent(dataMockPostCard.subtitle)
    expect(postCard).toHaveTextContent(dataMockPostCard.date)
    expect(postCard).toHaveTextContent(dataMockPostCard.time)
    expect(postCard).toHaveTextContent(dataMockPostCard.category)
  })

  test('should render with correct link', () => {
    makeSut()
    const postCardLink = screen.getByRole('link')
    expect(postCardLink).toHaveAttribute('href', `/${dataMockPostCard.link}`)
  })

  test('should render with correct image url', async () => {
    makeSut()
    const postCardImage = screen.queryByTestId('image')
    expect(postCardImage).toBeInTheDocument()
  })
})
