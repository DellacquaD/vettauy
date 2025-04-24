import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
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
                        <div>
                            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', color: 'black' }}>
                                {selectedItem.title}
                            </Typography>
                            <Box>
                                <Box className="scrollable-container" sx={{ width: '100%', height: 450, }}>
                                    <Box
                                        sx={{
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                                                                    }}
                                    >
                                        <img
                                            srcSet={`${selectedItem.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${selectedItem.img}?w=248&fit=crop&auto=format`}
                                            alt={`Blog Image`}
                                            loading="lazy"
                                            style={{
                                                width: '100%',
                                                marginTop: '1rem',
                                                height: 450,
                                                borderRadius: '8px'
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Container sx={{ padding: '2rem', paddingBottom: '2rem' }}>
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
        title: 'Diseño y Fabricación de Muebles',
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
                "En Vetta UY, transformamos espacios con nuestro enfoque artesanal y dedicación a la excelencia. Nos especializamos en crear muebles y trabajos de carpintería a medida para aquellos que buscan soluciones únicas y personalizadas en obras y reformas integrales.",
                "Para aquellos que lideran proyectos de renovación y diseño, ofrecemos muebles exclusivos que reflejan su visión y estilo. Nuestra experiencia nos permite ofrecer soluciones innovadoras y personalizadas, garantizando la máxima calidad en cada pieza.",
                "Si estás pensando en mejorar tu hogar, trabajamos contigo para diseñar y fabricar mobiliario que se ajuste perfectamente a tus necesidades y gustos, convirtiendo tu espacio en algo único y funcional.",
                "Calidad y Detalle: Cada mueble que creamos refleja nuestra pasión por el detalle y la calidad, utilizando materiales de primera calidad. Nuestro compromiso es superar tus expectativas y brindarte piezas duraderas y de estilo atemporal que mantendrán tu hogar siempre a la vanguardia.",
                "Proyectos Personalizados: Trabajamos en estrecha colaboración con nuestros clientes para comprender sus necesidades y deseos, transformándolos en realidad a través de un proceso de diseño y fabricación únicos.",
                "Confía en Vetta UY para tus proyectos de carpintería.",
                "Dale a tus espacios el toque distintivo que merecen.",
                "Tu satisfacción, nuestro compromiso."
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
                "Creamos entornos únicos para niños, combinando creatividad y aprendizaje en un ambiente seguro y natural. Nos especializamos en diseñar y fabricar mobiliario y juguetes a medida, fomentando el desarrollo y el disfrute de los más pequeños. Con materiales orgánicos y un diseño esencial, nuestras piezas crean un ambiente saludable y estimulante.",
                "Juegos y Juguetes en Madera: Fomentamos el desarrollo y la creatividad de los niños con juguetes en madera, ecológicos y duraderos. Ofrecemos una amplia gama de opciones, enfocados en técnicas del Método Montessori y el Método Waldorf, diseñadas para inspirar y educar.",
                "Mobiliario para Niños: Diseñamos y fabricamos mobiliario que combina funcionalidad y atractivo visual, pensado para acompañar el crecimiento de los niños en un entorno seguro y estimulante.",
                "Espacios de Aventura al Aire Libre: Transformamos tu jardín o patio en un espacio de aventuras. Garantizamos horas de disfrute en un entorno seguro y natural, perfecto para el juego y la exploración.",
                "Dale a tus hijos el entorno ideal para crecer y aprender. Su bienestar, nuestro compromiso",
            ]
        }
    },
    {
        img: 'https://images.unsplash.com/photo-1495130656884-992a9f30d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXRlbnNpbGxvcyUyMG1hZGVyYXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Hogar',
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
                "Accesorios Decorativos: Ofrecemos una amplia gama de opciones que aportan carácter y personalidad a tus espacios. Desde cuadros y espejos hasta jardineras y maceteros, cada accesorio está diseñado para embellecer y realzar tu hogar.",
                "Iluminación: te ayudamos a crear el ambiente perfecto con nuestras opciones de luminaria. Lámparas de mesa, de pie y de techo que contribuyen al diseño e iluminación del ambiente",
                ]
        }
    },
    {
        img: 'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
        title: 'Cerramientos',
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
                "Fabricamos cerramientos y divisiones para locales comerciales que combinan funcionalidad y estilo, creando espacios modernos y seguros. Nuestra dedicación a la calidad y los detalles se reflejan en cada proyecto, aportando valor y estética a tu negocio.",
                "Con materiales de alta calidad y un diseño contemporáneo, nuestras piezas añaden un toque distintivo a cualquier ambiente comercial.",
                "Cerramientos en vidrio tipo Blindex: ideales para crear espacios luminosos y seguros que mejoran la visibilidad de tu negocio y atraen a más clientes.",
                "Divisiones de Oficinas: Creamos divisiones de oficinas que proporcionan privacidad y estilo. Son ideales para optimizar el espacio y mejorar la funcionalidad en entornos de trabajo.",
                "Puertas tipo Blindex: ofrecen máxima transparencia y seguridad, perfectas para entradas de locales comerciales y oficinas combinando el diseño moderno y la resistencia.",
                ]
        }
    },{
        img: 'https://aluminiossardina.es/wp-content/uploads/2021/09/cerramiento-ventanas-abatibles.jpg',
        title: 'Mamparas',
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
                "Diseñamos y fabricamos mamparas de baño corredizas y batientes creando espacios modernos y versátiles, aportando valor y estética a tus baños.",
                "Mamparas Corredizas: maximizan el uso del espacio, ideales para baños donde se requiere una solución práctica y elegante. Estas mamparas proporcionan flexibilidad y eficiencia, perfectas para cualquier baño moderno.",
                "Mamparas Batientes: ofrecen comodidad y estilo sin comprometer la funcionalidad. Son ideales para baños que requieren accesos fáciles y frecuentes, proporcionando una solución estética y práctica.",
               ]
        }
    },
];
