import { FC, ReactElement } from "react";
import { Box, Typography, Container } from "@mui/material";
import Cards from "../components/Cards";

// Define el array cardInfo dentro de AboutUs
export const AboutUs: FC = (): ReactElement => {

  const cardInfo = [
    { title: "Sebastián Conde", text: "Apasionado por el diseño minimalista y la funcionalidad. Sus creaciones son elegantes y atemporales." },
    { title: "Rodrigo Gimenez", text: "Experto en restauración de antigüedades. Ha devuelto la vida a piezas centenarias con un amor profundo por la historia." },
    { title: "Carlos Poittevin", text: "Amante de la madera maciza y los detalles intrincados. Sus tallas y grabados son verdaderas obras de arte." },
    { title: "Santiago Delgado", text: "Especialista en mobiliario personalizado. Cada proyecto es un desafío que aborda con creatividad y precisión." },
  ];

  return (
    <div style={{ border: "1px solid black", marginTop: '12vh', minHeight: '80vh', backgroundImage: "url(https://editorialtelevisa.brightspotcdn.com/dims4/default/16ac18c/2147483647/strip/false/crop/1500x857+0+0/resize/1486x849!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fc2%2F3e%2F22fe65ae49adbffd7cc78671679d%2Fapartamento-moderno-lujo-comoda-decoracion-almohadas-generada-ia.jpg)", backgroundRepeat: 'round', backgroundSize: 'cover' }}>
      <Box sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "1rem",
          padding: "1rem",
          justifyContent: "center",
          minHeight: "80vh",
        }}>
        <Container>
        <Typography sx={{
          color: "white",
          textAlign: "center",
          fontSize: "1.3rem",
          fontFamily: "Roboto",
          padding: "3rem",
        }}>
          Somos más que serruchos y clavos. Somos artesanos que transforman la madera en obras maestras. Cada pieza que sale de nuestro taller lleva consigo la dedicación, la precisión y el amor que solo un verdadero amante de la madera puede ofrecer.
        </Typography>
        </Container>
        <Container sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "2rem",
          justifyItems: "center",
        }}>
          <Cards cardInfo={cardInfo} />
        </Container>
      </Box>
    </div>
  );
};

export default AboutUs;
