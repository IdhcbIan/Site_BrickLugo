import styled from 'styled-components'
import Logo1 from '../assets/Logo2.avif'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const seaGreen = '#a97b7f';

const Nav = styled.nav`
  padding: 1.5rem 3rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 4px 8px rgba(169,123,127,0.1);
  min-height: 80px;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
`

const Logo = styled.img`
  height: 70px;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
`

const SocialIcon = styled.a`
  color: ${seaGreen};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #333;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${seaGreen};
  font-weight: 600;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;

  &:hover {
    color: #333;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #333;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    visibility: visible;
    transform: scaleX(1);
  }
`

function Header() {
  return (
    <Nav>
      <a href="/">
        <Logo src={Logo1} alt="Logo Doria" />
      </a>
      <NavLinks>
        <StyledLink href="/missao">Missão</StyledLink>
        <StyledLink href="/servicos">Serviços</StyledLink>
        <StyledLink href="/depoimentos">Depoimentos</StyledLink>
        <StyledLink href="/financeiro">Financeiro</StyledLink>
      </NavLinks>
      <SocialLinks>
        <SocialIcon href="https://www.instagram.com/bricklugo/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://wa.me/message/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </SocialIcon>
      </SocialLinks>
    </Nav>
  )
}

export default Header
