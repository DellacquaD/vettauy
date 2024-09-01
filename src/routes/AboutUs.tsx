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
    <div>
      <Box sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
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
