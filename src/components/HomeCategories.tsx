import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box"
import {Container} from "@mui/material";
import './styles.css'

export default function TitlebarImageList() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClickOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <div>
            <ImageList
                style={{ gap: '1rem', padding: '2rem' }}
                sx={{
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr) !important',
                        md: 'repeat(2, 1fr) !important',
                    },
                }}
            >
                {itemData.map((item) => (
                    <ImageListItem
                        key={item.img}
                        sx={{ borderRadius: '10px', cursor: 'pointer' }}
                        onClick={() => handleClickOpen(item)}
                    >
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 20px 0 rgba(0,0,0,1)',
                            }}
                        />
                        <ImageListItemBar
                            sx={{ borderRadius: '0 0 10px 10px' }}
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth >
                <DialogContent className="scrollable-container">
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ position: 'absolute', top: 8, right: 20 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedItem && (
                        <div >
                            <Typography variant="h4" component="h2">
                                {selectedItem.title}
                            </Typography>
                            <Box>
                                <Box className="scrollable-container" sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: {
                                                xs: 'repeat(1, 1fr)', // 1
                                                md: 'repeat(2, 1fr)', // 2
                                            },
                                            gap: 2,
                                            width: '100%',
                                        }}
                                    >
                                        {selectedItem.blog.img.map((img, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    borderRadius: '8px',
                                                    overflow: 'hidden', // Asegura que el contenido no se desborde
                                                }}
                                            >
                                                <img
                                                    srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    src={`${img}?w=248&fit=crop&auto=format`}
                                                    alt={`Blog Image ${index}`}
                                                    loading="lazy"
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <Container>
                                        {selectedItem.blog.paragraph.map((paragraph, index) => (
                                            <Typography key={index} variant="body1" component="p" style={{ marginTop: '1rem' }}>
                                                {paragraph}
                                            </Typography>
                                        ))}
                                </Container>
                            </Box>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Mobiliario',
        blog: {
            img: [
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            paragraph: [
                "En nuestra categoría de Mobiliario, ofrecemos una amplia gama de productos diseñados para satisfacer las necesidades de cualquier hogar u oficina. Desde elegantes mesas de comedor y cómodas sillas hasta sofisticados armarios y estanterías personalizadas, cada pieza es fabricada con la más alta calidad de madera y atención al detalle. Nuestros muebles no solo aportan funcionalidad, sino que también enriquecen el ambiente con su diseño estético y duradero. Ya sea que busques un estilo clásico o moderno, nuestro mobiliario se adapta a tus gustos y requerimientos específicos.",
                "En nuestra categoría de Mobiliario, ofrecemos una amplia gama de productos diseñados para satisfacer las necesidades de cualquier hogar u oficina. Desde elegantes mesas de comedor y cómodas sillas hasta sofisticados armarios y estanterías personalizadas, cada pieza es fabricada con la más alta calidad de madera y atención al detalle. Nuestros muebles no solo aportan funcionalidad, sino que también enriquecen el ambiente con su diseño estético y duradero. Ya sea que busques un estilo clásico o moderno, nuestro mobiliario se adapta a tus gustos y requerimientos específicos.",
                "En nuestra categoría de Mobiliario, ofrecemos una amplia gama de productos diseñados para satisfacer las necesidades de cualquier hogar u oficina. Desde elegantes mesas de comedor y cómodas sillas hasta sofisticados armarios y estanterías personalizadas, cada pieza es fabricada con la más alta calidad de madera y atención al detalle. Nuestros muebles no solo aportan funcionalidad, sino que también enriquecen el ambiente con su diseño estético y duradero. Ya sea que busques un estilo clásico o moderno, nuestro mobiliario se adapta a tus gustos y requerimientos específicos.",
                "En nuestra categoría de Mobiliario, ofrecemos una amplia gama de productos diseñados para satisfacer las necesidades de cualquier hogar u oficina. Desde elegantes mesas de comedor y cómodas sillas hasta sofisticados armarios y estanterías personalizadas, cada pieza es fabricada con la más alta calidad de madera y atención al detalle. Nuestros muebles no solo aportan funcionalidad, sino que también enriquecen el ambiente con su diseño estético y duradero. Ya sea que busques un estilo clásico o moderno, nuestro mobiliario se adapta a tus gustos y requerimientos específicos."
            ]
        },
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Kids',
        blog: {
            img: [
                'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1684980181655-ab1cf2e31b17?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ],
            paragraph: [
                "La categoría Kids está especialmente pensada para crear espacios seguros y divertidos para los más pequeños. Ofrecemos una variedad de muebles y accesorios para habitaciones infantiles, incluyendo camas temáticas, escritorios con almacenamiento integrado y estanterías coloridas. Cada pieza está diseñada pensando en la seguridad y el confort de los niños, utilizando materiales no tóxicos y resistentes. Desde camas con formas de vehículos hasta muebles modulares que crecen con ellos, nuestro objetivo es fomentar un entorno de juego y aprendizaje que también se vea genial."
            ]
        }
    },
    {
        img: 'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Home',
        blog: {
            img: [
                'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
                'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
                'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
                'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
                'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
                'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
            ],
            paragraph: [
                "En la categoría Home, nos especializamos en soluciones de carpintería para el hogar que combinan estilo y funcionalidad. Aquí encontrarás desde elegantes soluciones de almacenamiento, como armarios empotrados y vestidores, hasta paneles decorativos y revestimientos para paredes. Nuestros productos están diseñados para mejorar la organización y el aspecto de cualquier habitación, integrando tecnología moderna y técnicas de construcción tradicionales. Ya sea para renovar tu cocina, baño o sala de estar, nuestros diseños se adaptan a tus necesidades y estilo de vida."
            ]
        }
    },
    {
        img: 'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
        title: 'Vidriado',
        blog: {
            img: [
                'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
                'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
                'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
                'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
                'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
                'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
            ],
            paragraph: [
                "Vidriado es nuestra categoría dedicada a soluciones de carpintería con aplicaciones de vidrio. Ofrecemos una variedad de productos que incluyen puertas corredizas de vidrio, barandillas y mamparas de baño. Estos productos no solo aportan una estética contemporánea y elegante a tus espacios, sino que también permiten una mayor entrada de luz natural, creando ambientes más abiertos y luminosos. Utilizamos vidrio de alta calidad y técnicas avanzadas de instalación para asegurar que cada producto no solo luzca espectacular, sino que también sea seguro y duradero."
            ]
        }
    },
];
