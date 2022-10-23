import MenuBottom from '../../molecules/MenuBottom'
import MenuTop from '../../molecules/MenuTop'
import { LayoutProps } from './interface'
import { Container } from './styles'

// top menu
// bottom menu

const LayoutMobile = ({ children, noTop }: LayoutProps) => {
  return (
    <Container>
      {!noTop && <MenuTop />}

      {children}

      <div className="menu-bottom">
        <MenuBottom />
      </div>
    </Container>
  )
}

export default LayoutMobile
