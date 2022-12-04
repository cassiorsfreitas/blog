import MenuBottom from '../../molecules/MenuBottom'
import MenuTop from '../../molecules/MenuTop'
import { LayoutProps } from './interface'
import { Container } from './styles'

// top menu
// bottom menu

const LayoutMobile = ({ children, noTop }: LayoutProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container>
      {!noTop && <MenuTop />}

      {children}

      <div className="menu-bottom">
        <MenuBottom scrollTop={scrollTop} />
      </div>
    </Container>
  )
}

export default LayoutMobile
