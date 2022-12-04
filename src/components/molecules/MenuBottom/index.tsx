/* eslint-disable multiline-ternary */
import Link from 'next/link'
import { Container } from './styles'

import {
  MdHome,
  MdFavorite,
  MdAccountCircle,
  MdArrowUpward
} from 'react-icons/md'

export interface MenuBottomProps {
  scrollTop: () => void
}

const MenuBottom = ({ scrollTop }: MenuBottomProps) => {
  return (
    <Container data-testid="menu-bottom">
      <Link href="/">
        <a className="button">
          <div className="menu-desktop">home</div>
          <MdHome className="menu-mobile" size={30} />
        </a>
      </Link>
      <Link href="/fav">
        <a className="button">
          <div className="menu-desktop">favorites</div>
          <MdFavorite className="menu-mobile" size={30} />
        </a>
      </Link>
      <Link href="/profile">
        <a className="button">
          <div className="menu-desktop">profile</div>
          <MdAccountCircle className="menu-mobile" size={30} />
        </a>
      </Link>
      <a
        className="button"
        onClick={() => scrollTop()}
        data-testid="menu-bottom-btn"
      >
        <div className="menu-desktop">top</div>
        <MdArrowUpward size={30} className="scrollTop menu-mobile" />
      </a>
    </Container>
  )
}

export default MenuBottom
