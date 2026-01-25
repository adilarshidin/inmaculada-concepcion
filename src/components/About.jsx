import styled from "styled-components";
import { FaFacebook, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { Link } from "react-router";

import tabletImage from "../assets/4.webp";
import confessionBoothImage from "../assets/5.webp";
import ViewWrapper from "./ViewWrapper";
import SEO from "./SEO";
import MassesSchedule from "../content-renderers/MassesSchedule";

const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 3 / 2;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  object-fit: cover;
`;

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

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 3%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const StyledLink = styled(Link)`
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

const About = () => (
  <>
    <SEO
      title="La Iglesia en Vigo | Parroquia de la Inmaculada Concepción"
      description="Historia, arquitectura y horarios de misas de la Parroquia de la Inmaculada Concepción en Vigo."
    />
    <ViewWrapper>
      <h1>La Iglesia de la Inmaculada Concepción en Vigo</h1>
      <ImageBlock>
        <Image
          src={tabletImage}
          loading="lazy"
          alt="Interior de la Iglesia de la Inmaculada Concepción en Vigo"
        />
        <Image
          src={confessionBoothImage}
          loading="lazy"
          alt="Confesionario de la Iglesia de la Inmaculada Concepción en Vigo"
        />
      </ImageBlock>

      <Section>
        <h2>Historia y arquitectura</h2>
        <p>
          <strong>Arquitecto:</strong> Antonio Román Conde
        </p>
        <p>
          <strong>Año:</strong> 1968
        </p>
        <p>
          <strong>Localización:</strong> Calle del Cronista J. Espinosa
        </p>
        <p>
          Esta iglesia, situada en el popular barrio del Calvario, sigue una
          línea arquitectónica inspirada en Le Corbusier.
        </p>
      </Section>

      <Section>
        <h2>Contacto</h2>
        <p>
          <strong>Párroco:</strong> D. Miguel Ángel Castro Quinteiro
        </p>
        <TextWrapper>
          <IconCircle>
            <FaPhone />
          </IconCircle>
          <StyledLink href="tel:696759567">696759567</StyledLink>
        </TextWrapper>
        <TextWrapper>
          <IconCircle>
            <IoMailSharp />
          </IconCircle>
          <StyledLink href="mailto:vigo.inmaculada@diocesetuivigo.org">
            vigo.inmaculada@diocesetuivigo.org
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

      <Section id="horarios" style={{ scrollMarginTop: "25em" }}>
        <h2>Horarios de misas</h2>
        <MassesSchedule />
        <br />
        <p>
          Consulta también nuestras{" "}
          <StyledLink
            to="/services"
            aria-label="Ver servicios y actividades de la parroquia"
          >
            actividades y servicios parroquiales
          </StyledLink>.
        </p>
      </Section>

      <MapWrapper>
        <TextWrapper>
          <IconCircle>
            <FaLocationDot />
          </IconCircle>
          <h2>Ubicación</h2>
        </TextWrapper>
        <iframe
          title="Ubicación de la iglesia"
          src="https://vigo.maps.arcgis.com/apps/webappviewer/index.html?id=95730d02d392425da3fe379a2336ac15&marker=-8.70044231414795,42.23233848882558&level=17"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapWrapper>
    </ViewWrapper>
  </>
);

export default About;
