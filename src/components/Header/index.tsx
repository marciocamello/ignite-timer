import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <nav>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
