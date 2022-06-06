import React from 'react'
import { cleanup, render, screen } from '../../config/react-library'
import { ThemeProvider, dark } from '../../config/theme-wrapper'
import PostCard from '../../../src/components/atoms/PostCard'
import { readFakeData } from './readFakeData'

afterEach(() => cleanup())

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <PostCard
        title={readFakeData.title}
        subtitle={readFakeData.subtitle}
        time={readFakeData.time}
        date={readFakeData.date}
        imagePath={readFakeData.imagePath}
        link={readFakeData.link}
        category={readFakeData.category}
      />
    </ThemeProvider>
  )
}

describe('<PostCard />', () => {
  test('should render correct title', () => {
    makeSut()
    expect(screen.queryByText(readFakeData.title)).toBeInTheDocument()
  })

  test('should render correct subtitle', () => {
    makeSut()
    expect(screen.queryByText(readFakeData.subtitle)).toBeInTheDocument()
  })

  test('should render correct time', () => {
    makeSut()
    expect(screen.queryByText(readFakeData.time)).toBeInTheDocument()
  })

  test('should render correct date', () => {
    makeSut()
    expect(screen.queryByText(readFakeData.date)).toBeInTheDocument()
  })

  test('should render correct imagePath', () => {
    makeSut()
    expect(screen.queryByText(readFakeData.imagePath)).toBeDefined()
  })

  test('should render correct link', () => {
    makeSut()
    expect(screen.queryByText(readFakeData.link)).toBeDefined()
  })

  test('should render correct category', () => {
    makeSut()
    expect(screen.queryByText(readFakeData.category)).toBeInTheDocument()
  })
})
