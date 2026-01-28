import styled from "styled-components";
import yaml from "js-yaml";
import contactsRaw from "../../content/information/contacts.md?raw";

import { FaPhone, FaFacebook } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";


const Section = styled.div`
  background-color: gold;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    to bottom right,
    rgba(191, 163, 74, 0.95),
    rgba(191, 163, 74, 0.75)
  );
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const IconCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  background-color: #bfa34a;
  color: #000;
  border-radius: 50%;
  flex-shrink: 0;
`;

const StyledLink = styled.a`
  color: #2b2b2b;
  text-decoration: none;
  font-weight: 500;
  word-break: break-word;
  overflow-wrap: anywhere;
  transition: color 0.25s ease;

  &:hover {
    color: #000;
  }
`;


const ContactInfo = () => {
  // Extract YAML frontmatter
  const match = contactsRaw.match(/---\n([\s\S]*?)\n---/);
  const data = match ? yaml.load(match[1]) : {};

  const { name, phone, email } = data;

  return (
    <Section>
      <h2>Contacto</h2>
      <p>
        <strong>Párroco: {name}</strong>
      </p>
      <TextWrapper>
        <IconCircle>
          <FaPhone />
        </IconCircle>
        <StyledLink href={`tel:${phone}`}>{phone}</StyledLink>
      </TextWrapper>
      <TextWrapper>
        <IconCircle>
          <IoMailSharp />
        </IconCircle>
        <StyledLink href={`mailto:${email}`}>
          {email}
        </StyledLink>
      </TextWrapper>
      <TextWrapper>
        <IconCircle>
          <FaFacebook />
        </IconCircle>
        <StyledLink href="https://www.facebook.com/p/Parroquia-Inmaculada-Concepci%C3%B3n-de-Vigo-100064541060687/">
          Facebook
        </StyledLink>
      </TextWrapper>
    </Section>
  );
};

export default ContactInfo;
