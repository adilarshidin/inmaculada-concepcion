import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import firstChurchImage from "../assets/1.webp";
import secondChurchImage from "../assets/6.webp";
import thirdChurchImage from "../assets/7.webp";
import fourthChurchImage from "../assets/8.webp";
import fifthChurchImage from "../assets/9.webp";
import SEO from "./SEO";

const images = [
  { src: firstChurchImage, alt: "Fachada de la Iglesia de la Inmaculada Concepción en Vigo" },
  { src: secondChurchImage, alt: "Interior de la iglesia durante una celebración" },
  { src: thirdChurchImage, alt: "Vista lateral de la parroquia en Vigo" },
  { src: fourthChurchImage, alt: "Detalle arquitectónico de la iglesia" },
  { src: fifthChurchImage, alt: "Altar de la Parroquia de la Inmaculada Concepción" },
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: min(90%, 720px);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  animation: ${fadeIn} 1s ease-in;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: min(100vh, 90vh);
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const H1 = styled.h1`
  color: gold;
  font-family: "Playfair Display", serif;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  line-height: 1.4;
  margin: 0;
`;

const VisuallyHiddenH2 = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

const Blockquote = styled.blockquote`
  color: #f1e9c6;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;

  background: rgba(0, 0, 0, 0.45);
  padding: 1rem;
  border-radius: 8px;
`;

const Paragraph = styled.p`
  color: #f1e9c6;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;

  background: rgba(0, 0, 0, 0.45);
  padding: 1rem;
  border-radius: 8px;
`;

const CTAButton = styled(Link)`
  margin-top: 0.5rem;
  padding: 0.75rem 2.2rem;

  color: black;
  background-color: gold;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;

  transition:
    transform 0.25s ease,
    background-color 0.25s ease;

  &:hover {
    background-color: #e5d8b0;
    transform: translateY(-2px);
  }
`;


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Parroquia de la Inmaculada Concepción | Iglesia en Vigo"
        description="Iglesia de la Inmaculada Concepción en Vigo. Horarios de misas, comunidad cristiana, celebraciones, actividades y servicios parroquiales."
      />
      <Wrapper>
        <ImageContainer>
          {images.map((img, index) => (
            <Image
              key={img.src}
              src={img.src}
              loading="lazy"
              alt={img.alt}
              $active={index === currentIndex}
            />
          ))}
          <HeroContent>
            <H1>Parroquia de la Inmaculada Concepción</H1>
            <VisuallyHiddenH2>
              Iglesia católica en Vigo – horarios, actividades y servicios
            </VisuallyHiddenH2>

            <Blockquote cite="https://www.biblegateway.com/passage/?search=Mateo+18:20">
              “Porque donde están dos o tres congregados en mi nombre, allí
              estoy yo en medio de ellos.”
              <br />
              <small>Mateo 18:20</small>
            </Blockquote>

            <Paragraph>
              Comunidad cristiana en Vigo dedicada a la fe, la oración y el servicio.
              Consulta los horarios de misas, actividades parroquiales y servicios
              abiertos a toda la comunidad.
            </Paragraph>

            <CTAButton
              to="/services"
              aria-label="Ver servicios y actividades de la parroquia"
            >
              Ver Servicios
            </CTAButton>
          </HeroContent>
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default Home;
