import styled from "styled-components";
import { useEffect } from "react";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ViewRoutes from "./ViewRoutes";
import GlobalStyle from "./GlobalStyle";
import ScrollToHash from "./components/ScrollToHash";

const MainContainer = styled.main(`
  display: flex;
  flex-direction: column;
  background-color: black;
`);

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Church",
      "@id": "https://inmaculadavigo.es/#church",
      "name": "Parroquia de la Inmaculada Concepción",
      "url": "https://inmaculadavigo.es/",
      "image": "https://inmaculadavigo.es/assets/1.webp",
      "telephone": "+34986274622",
      "email": "mailto:vigo.inmaculada@diocesetuivigo.org",
      "foundingDate": "1968",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rúa Toledo, 5",
        "addressLocality": "Vigo",
        "postalCode": "36205",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.232338,
        "longitude": -8.700442
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Vigo"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday"
          ],
          "opens": "09:30",
          "closes": "18:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["https://schema.org/Saturday"],
          "opens": "18:30",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["https://schema.org/Sunday"],
          "opens": "10:00",
          "closes": "13:30"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/p/Parroquia-Inmaculada-Concepci%C3%B3n-de-Vigo-100064541060687/"
      ],
      "hasMap": "https://www.google.com/maps?q=42.232338,-8.700442"
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ScrollToHash />
      <MainContainer>
        <Menu />
        <ViewRoutes />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
