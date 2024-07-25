import { FC, ReactElement } from "react";
import { Box, Container, Typography } from "@mui/material";
import PinDropIcon from '@mui/icons-material/PinDrop';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const AppFooter: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/92/73/13/360_F_292731351_p4objwWzlIieS2Kh7kbWVWmOhNrNE5Ft.jpg)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: "grid",
        gridTemplateColumns: "(3, 1fr",
        gridTemplateRows: "repeat(2, auto)",
      }}
    >
      <Container style={{ gridRow: 1, gridColumn: 1 }}>
        <Container>
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
            <Container>
                <PinDropIcon />
                <Typography
                    variant="h6"
                    flexWrap="wrap"
                    component="a"
                    href="https://lh3.googleusercontent.com/a-/ALV-UjWDMysJqDKQ04aumdD6K7unLFu40ZrVxXkHbemaQLHu79erXbZQ=w36-h36-p-rp-mo-ba3-br100"
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
            <Container>
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
      <Container style={{ gridRow: 1, gridColumn: 2 }}>
        Dos
      </Container>
      <Container style={{ gridRow: 1, gridColumn: 3 }}>
        Tres
      </Container>
      <Container style={{ gridRow: 2, gridColumnStart: 1, gridColumnEnd: 4 }}>
        Cuatro
      </Container>
    </Box>
  );
};

export default AppFooter;