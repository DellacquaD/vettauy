import { FC, ReactElement } from "react";
import { Box, Container, Typography } from "@mui/material";
import PinDropIcon from '@mui/icons-material/PinDrop';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const AppFooter: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: {
          xs: "1rem",
          sm: "1rem",
          md: "0",
        },
        alignItems: "center",
      }}
    >
      <Container >
        <Container >
        <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: '25px',
                    letterSpacing: '.4rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                VETTA
            </Typography>
            <Container style={{ display: "flex", justifyContent: "center" }}>
                <PinDropIcon />
                <Typography
                    variant="h6"
                    flexWrap="wrap"
                    component="a"
                    href="https://www.google.com/maps/place/5P5R%2BRCX,+Av.+Luis+Batlle+Berres+6000,+12600+Montevideo,+Departamento+de+Montevideo/data=!4m2!3m1!1s0x95a1d450230ae329:0xbc313d638e77d282?sa=X&ved=1t:242&ictx=111"
                    sx={{
                      mr: 2,
                      fontFamily: 'monospace',
                      textDecoration:"none",
                        fontWeight: 500,
                        fontSize: '15px',
                        color: 'white',

                    }}
                >
                    Luis Batlle Berres 6000
                </Typography>
            </Container>
            <Container style={{ display: "flex", justifyContent: "center" }}>
                <WhatsAppIcon />
                <Typography
                    variant="h6"
                    flexWrap="wrap"
                    component="a"
                    sx={{
                      mr: 2,
                      fontFamily: 'monospace',
                      fontWeight: 500,
                      textDecoration:"none",
                        fontSize: '15px',
                        color: 'white',
                    }}
                >
                    098 258 098
                </Typography>
            </Container>
        </Container>
      </Container>
      <Typography sx={{
        color: "white",
        textAlign: "center",
        padding: "1rem",
      }}>
      Combinamos años de experiencia con técnicas modernas para ofrecerte soluciones personalizadas y de alta calidad. Nos especializamos en detalles precisos y acabados impecables, garantizando que cada proyecto, desde muebles a medida hasta renovaciones, supere tus expectativas.
      </Typography>
      <Container style={{ display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "center" }}>
        <Typography><InstagramIcon sx={{ color: "white"}}/></Typography>
        <Typography><FacebookIcon sx={{ color: "white"}}/></Typography>
        <Typography><XIcon sx={{ color: "white"}}/></Typography>
        <Typography><PinterestIcon sx={{ color: "white"}}/></Typography>
      </Container>
    </Box>
  );
};

export default AppFooter;