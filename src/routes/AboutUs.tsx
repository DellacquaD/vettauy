import React, { FC, ReactElement } from "react";
import {Box, Typography, Container} from "@mui/material";
import Cards from "../components/Cards";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// Define el array cardInfo dentro de AboutUs
export const AboutUs: FC = (): ReactElement => {

  return (
    <div style={{backdropFilter: "blur(3px)"}}>
      <Box sx={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          // margin: "1rem",
          padding: "1rem",
          justifyContent: "center",
          minHeight: "80vh",
        }}>
        <Container>
            <Container sx = {{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                borderRadius: 2,
            }}
            >
                <Typography sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.3rem",
                    fontFamily: "Roboto",
                    padding: "1rem",
                }}>
                    ¡Te damos la bienvenida a Vetta UY!
                </Typography>
                <Typography sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.3rem",
                    fontFamily: "Roboto",
                    padding: "1rem",
                }}>
                    Diseñamos y fabricamos productos a medida que combinan funcionalidad y estilo para transformar tus espacios.
                </Typography>
                <Typography sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.3rem",
                    fontFamily: "Roboto",
                    padding: "1rem",
                }}>
                    Nos especializamos en transformar espacios con soluciones personalizadas. Diseñamos y fabricamos muebles, accesorios y cerramientos que se integran perfectamente en cualquier ambiente, con un enfoque en los detalles técnicos. Trabajamos para ofrecer resultados que reflejen la visión y las necesidades de nuestros clientes, ya sea en la renovación de hogares, la optimización de espacios comerciales o la creación de entornos funcionales.
                </Typography>
            </Container>
        <Container
            style={{ gap: '4rem', padding: '2rem', display: 'grid' }}
            sx={{
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                },
            }}
        >
            {itemData.map((item) => (
                <Container
                    key={item.title}
                    sx = {{
                        maxWidth: '50%',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        borderRadius: '10px',
                        boxShadow: '0 0 20px 0 rgba(0,0,0,1)',

                    }}
                >
                    <Typography
                    sx = {{
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                    }}
                    >
                        {item.title}
                    </Typography>
                    <Typography>
                        {item.paragraph}
                    </Typography>
                </Container>
            ))}
        </Container>
        </Container>
      </Box>
    </div>
  );
};

const itemData = [
    {
        title: 'Misión',
            paragraph: [
                "Transformar espacios a través del diseño y fabricación de productos que combinan funcionalidad y estilo priorizando la calidad y la satisfacción del cliente."
            ]
    },
    {
        title: 'Visión',
        paragraph: [
            "Ser reconocidos por nuestra excelencia, compromiso con la sostenibilidad y el bienestar. Aspiramos a crear soluciones ecológicas y saludables que respeten el medio ambiente, promoviendo un estilo de vida más sostenible y consciente."
        ]
    },{
        title: 'Postventa',
        paragraph: [
            "Ofrecemos un sólido servicio de atención proporcionando soporte a nuestros clientes durante todo el desarrollo de sus proyectos."
        ]
    },{
        title: 'Equipo Profesional',
        paragraph: [
            "Contamos con un equipo técnico en constante capacitación y crecimiento que asegura el desarrollo de cada proyecto, liderando con una visión clara y un compromiso con la calidad."
        ]
    },{
        title: 'Atención Personalizada',
        paragraph: [
            "Ofrecemos atención personalizada, trabajando en estrecha colaboración con nuestros clientes para entender sus necesidades específicas y desarrollar soluciones que se adapten a estas."
        ]
    },{
        title: 'Calidad y Detalle',
        paragraph: [
            "Cada mueble que creamos refleja nuestra pasión por el detalle y la calidad, utilizando materiales de primera calidad. Nuestro compromiso es superar tus expectativas y brindarte piezas duraderas y de estilo atemporal que mantendrán tu hogar siempre a la vanguardia."
        ]
    },
];

export default AboutUs