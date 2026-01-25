import styled from "styled-components";
import { NavLink, Link } from "react-router";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaClock } from "react-icons/fa";
import crossIcon from "../assets/cross-2.png";

const StyledMenu = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, ${({ $scrolled }) => ($scrolled ? 0.75 : 0.9)});
  backdrop-filter: blur(6px);
  transition: background 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`;

const MenuInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Logo = styled.img`
  max-width: 36px;
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled(NavLink)`
  color: #fefbf5;
  text-decoration: none;
  font-size: 1.05rem;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #bfa34a;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #bfa34a;
    transition: width 0.3s ease;
  }

  &.active {
    color: #bfa34a;
  }

  &.active::after {
    width: 100%;
  }
`;

const HorariosBadge = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  background: #bfa34a;
  color: #000;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    background 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background: #e5d8b0;
    transform: scale(1.05);
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fefbf5;
  font-size: 1.4rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  background: #111;
  max-height: ${({ $open }) => ($open ? "320px" : "0")};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;

const MobileLink = styled(NavLink)`
  display: block;
  padding: 1rem 2rem;
  color: #fefbf5;
  text-decoration: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &.active {
    color: #bfa34a;
    background: rgba(191, 163, 74, 0.12);
  }
`;

const MobileHorarios = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 2rem;
  padding: 0.75rem 1rem;
  background: #bfa34a;
  color: #000;
  border-radius: 20px;
  font-weight: 600;
  text-decoration: none;
  justify-content: center;
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledMenu $scrolled={scrolled}>
      <MenuInner>
        <a href="https://www.diocesetuivigo.org/">
          <Logo src={crossIcon} alt="Cruz católica dorada" />
        </a>

        <DesktopLinks>
          <MenuLink to="/" end>
            Inicio
          </MenuLink>
          <MenuLink to="/about">La Iglesia</MenuLink>
          <MenuLink to="/services">Servicios parroquiales</MenuLink>

          <HorariosBadge to="/about#horarios">
            <FaClock /> Horarios
          </HorariosBadge>
        </DesktopLinks>

        <Hamburger onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <FaTimes /> : <FaBars />}
        </Hamburger>
      </MenuInner>

      <MobileMenu $open={open}>
        <MobileLink to="/" end onClick={() => setOpen(false)}>
          Inicio
        </MobileLink>
        <MobileLink to="/about" onClick={() => setOpen(false)}>
          La Iglesia
        </MobileLink>
        <MobileLink to="/services" onClick={() => setOpen(false)}>
          Servicios parroquiales
        </MobileLink>

        <MobileHorarios to="/about#horarios" onClick={() => setOpen(false)}>
          <FaClock /> Horarios de Misas
        </MobileHorarios>
      </MobileMenu>
    </StyledMenu>
  );
};

export default Menu;
