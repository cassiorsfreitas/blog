import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import PostCardMini from '.'
import { PostCardMiniProps } from './interface'
import { dataMockPostCardMini } from '../../../constants/dataMock/index'

const makeSut = (props: Partial<PostCardMiniProps> = {}) => {
  const defaultProps = {
    ...dataMockPostCardMini,
    ...props
  }

  return render(
    <ThemeProvider theme={dark}>
      <PostCardMini {...defaultProps} />
    </ThemeProvider>
  )
}

describe('PostCardMini component', () => {
  test('should render by default', () => {
    makeSut()
    const postCardMini = screen.queryByTestId('post-card-mini')
    expect(postCardMini).toBeInTheDocument()
  })

  test('should render with correct text', () => {
    makeSut()
    const postCardMini = screen.queryByTestId('post-card-mini')
    expect(postCardMini).toHaveTextContent(dataMockPostCardMini.title)
    expect(postCardMini).toHaveTextContent(dataMockPostCardMini.date)
    expect(postCardMini).toHaveTextContent(dataMockPostCardMini.time)
  })

  test('should render with correct text', () => {
    makeSut()
    const postCardMiniLink = screen.getByRole('link')
    expect(postCardMiniLink).toHaveAttribute(
      'href',
      `/${dataMockPostCardMini.link}`
    )
  })
})
