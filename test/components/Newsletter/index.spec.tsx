import React from 'react'
import SinglePost from '../../../src/components/organisms/SinglePost'
import { cleanup, render, screen } from '../../config/react-library'
import { ThemeProvider, dark } from '../../config/theme-wrapper'
import { readFakeData } from './readFakeData'

afterEach(() => cleanup())

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <SinglePost metadata={readFakeData.metadata} content={'any_content'} />
    </ThemeProvider>
  )
}

describe('<Newsletter />', () => {
  test('should render correct title', () => {
    makeSut()
    expect(
      screen.queryByText('Subscribe to the newsletter')
    ).toBeInTheDocument()
  })
})
