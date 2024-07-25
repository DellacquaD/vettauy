import { FC, ReactElement } from "react";
import { Box, Container, Typography, Paragraph } from "@mui/material";
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
        display: "flex",
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
                        fontWeight: 500,
                        fontSize: '15px',
                        color: 'inherit',
                        textDecoration: 'none',
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
                        fontSize: '15px',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    099 999 999
                </Typography>
            </Container>
        </Container>
      </Container>
      <Typography>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
      {/* <Container style={{ display: "flex", flexDirection: "column", gap: "1rem"}}>
        <Typography
          variant="h6"
          flexWrap="nowrap"
          href="/"
          component="a"
          color="inherit"
          fontFamily={'monospace'}
          >INICIO</Typography>
        <Typography
          variant="h6"
          flexWrap="nowrap"
          href="/products"
          component="a"
          color="inherit"
          fontFamily={'monospace'}
          > PRODUCTOS</Typography>
        <Typography
          variant="h6"
          flexWrap="nowrap"
          href="/works"
          component="a"
          fontFamily={'monospace'}
          color="inherit"
          >TRABAJOS</Typography>
        <Typography
          variant="h6"
          flexWrap="nowrap"
          href="/about"
          component="a"
          fontFamily={'monospace'}
          color="inherit"
          >SOBRE NOSOTROS</Typography>
        <Typography
          variant="h6"
          flexWrap="nowrap"
          href="/contact"
          component="a"
          fontFamily={'monospace'}
          color="inherit"
          >CONTACTO</Typography>
      </Container> */}
      <Container style={{ display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "center" }}>
        <Typography><InstagramIcon /></Typography>
        <Typography><FacebookIcon /></Typography>
        <Typography><XIcon /></Typography>
        <Typography><PinterestIcon /></Typography>
      </Container>
    </Box>
  );
};

export default AppFooter;