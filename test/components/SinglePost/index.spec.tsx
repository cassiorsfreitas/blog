import React from 'react'
import SinglePost from '../../../src/components/organisms/SinglePost'
import { cleanup, render, screen, userEvent } from '../../config/react-library'
import { ThemeProvider, dark } from '../../config/theme-wrapper'
import { parseCookies, destroyCookie } from 'nookies'
import { readFakeData } from './readFakeData'

afterEach(() => {
  cleanup()
  destroyCookie(null, `FAVPOST${readFakeData.metadata.id}`)
})

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <SinglePost metadata={readFakeData.metadata} content={'any_content'} />
    </ThemeProvider>
  )
}

describe('<SinglePost />', () => {
  it('Component has correct title', () => {
    makeSut()
    expect(screen.getByText(readFakeData.metadata.title)).toBeInTheDocument()
  })

  it('Component has correct excerpt', () => {
    makeSut()
    expect(screen.getByText(readFakeData.metadata.excerpt)).toBeInTheDocument()
  })

  it('Component has correct category', () => {
    makeSut()
    expect(screen.getByText(readFakeData.metadata.category)).toBeInTheDocument()
  })

  it('should show unliked icon at start', () => {
    makeSut()
    expect(screen.queryByTestId('unlike-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('like-icon')).not.toBeInTheDocument()
  })

  it('should be no favorite post in cookies at start', () => {
    makeSut()
    const cookies = parseCookies()
    expect(cookies['FAVPOST' + readFakeData.metadata.id]).toBeUndefined()
  })

  it('should show liked icon after click', async () => {
    makeSut()
    await userEvent.click(screen.queryByTestId('unlike-icon') as HTMLElement)
    expect(screen.queryByTestId('like-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('unlike-icon')).not.toBeInTheDocument()
  })

  it('should add favorite post in cookies after click', async () => {
    makeSut()
    // console.log(userEvent.click(screen.queryByTestId('unliked-icon')))
    await userEvent.click(screen.queryByTestId('unlike-icon') as HTMLElement)
    const cookies = parseCookies()
    expect(cookies['FAVPOST' + readFakeData.metadata.id]).not.toBeUndefined()
  })

  it('should show backToList link', () => {
    makeSut()
    expect(screen.queryByText('← back to list')).toBeInTheDocument()
  })

  it('should show share icon', () => {
    makeSut()
    expect(screen.queryByTestId('share-icon')).toBeInTheDocument()
  })

  it('should add url in clipboard after click on share icon', async () => {
    makeSut()
    Object.assign(navigator, {
      clipboard: {
        writeText: () => {
          Object.defineProperty(window, 'location', {
            value: new URL(readFakeData.urlCopied)
          })
        }
      }
    })
    await userEvent.click(screen.queryByTestId('share-icon') as HTMLElement)

    expect(window.location.href).toEqual(readFakeData.urlCopied)
    expect(screen.getByText('URL copied successfully')).toBeInTheDocument()
  })
})
