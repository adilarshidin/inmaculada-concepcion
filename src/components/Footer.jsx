import styled from "styled-components";
import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
  background: linear-gradient(to top, #000, #111);
  color: #ccc;
  padding: 1.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  font-size: 0.9rem;
`;

const Credits = styled.p`
  margin: 0;
  opacity: 0.8;
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  border-radius: 50%;
  background: rgba(191, 163, 74, 0.15);
  color: #bfa34a;

  transition: all 0.25s ease;
  text-decoration: none;

  &:hover {
    background: rgba(191, 163, 74, 0.35);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #bfa34a;
    outline-offset: 2px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Credits>Hecho con respeto por Adil Arshidin</Credits>

      <Socials>
        <SocialLink
          href="https://wa.me/34603249025"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp size={18} />
        </SocialLink>

        <SocialLink
          href="https://t.me/adiltherunningman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por Telegram"
        >
          <FaTelegram size={18} />
        </SocialLink>

        <SocialLink
          href="https://www.instagram.com/adil_the_running_man/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por Instagram"
        >
          <FaInstagram size={18} />
        </SocialLink>
      </Socials>
    </StyledFooter>
  );
};

export default Footer;
