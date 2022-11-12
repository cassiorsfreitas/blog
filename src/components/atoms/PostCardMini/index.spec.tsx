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
  test('should render correctly', () => {
    makeSut()
    const postCardMini = screen.queryByTestId('post-card-mini')
    expect(postCardMini).toBeInTheDocument()
  })
})
