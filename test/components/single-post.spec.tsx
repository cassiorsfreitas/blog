import React from 'react'
import SinglePost from '../../src/components/organisms/SinglePost'
import { ThemeProvider } from 'styled-components'
import { cleanup, render } from '@testing-library/react'
import dark from '../../src/styles/default'

const fakeData = {
  id: '6',
  title: 'My VIM Cheat Sheet',
  excerpt:
    'A Great Vim Cheat Sheet! I have compiled a list of essential Vim commands that I use every day.',
  date: '21-04-2022',
  time: '1 min',
  cover: '/images/post6/cover.jpg',
  slug: 'vim-cheat-sheet',
  category: 'Quick tips',
  link: 'quick-tips'
}

afterEach(cleanup)

describe('Component SinglePost', () => {
  it('should render favorite icon', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={dark}>
        <SinglePost metadata={fakeData} content={'any_content'} />
      </ThemeProvider>
    )
    expect(getByTestId('favorite-icon')).toBeTruthy()
  })
})
