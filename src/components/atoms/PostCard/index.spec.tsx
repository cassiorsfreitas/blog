import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import PostCard from '.'
import { PostCardProps } from './interface'
import dataMock from './dataMock'

const makeSut = (props: Partial<PostCardProps> = {}) => {
  const defaultProps = {
    ...dataMock,
    ...props
  }

  return render(
    <ThemeProvider theme={dark}>
      <PostCard {...defaultProps} />
    </ThemeProvider>
  )
}

describe('PostCard component', () => {
  test('should render with correct component', () => {
    makeSut()
    const postCard = screen.queryByTestId('post-card')
    expect(postCard).toBeInTheDocument()
  })

  test('should render with correct data', () => {
    makeSut()
    const postCard = screen.queryByTestId('post-card')
    expect(postCard).toHaveTextContent(dataMock.title)
  })
})
