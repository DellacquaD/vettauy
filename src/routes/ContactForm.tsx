import React, { useState } from 'react';
import { Box, Button, Typography, Slide, TextField, Container, CircularProgress } from '@mui/material';
import { useNavigate } from "react-router";

export default function MyForm() {
    const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', consulta: '' });
    const [errors, setErrors] = useState({ nombre: false, email: false, telefono: false, consulta: false });
    const [formSent, setFormSent] = useState(false);
    const [loading, setLoading] = useState(false); // Añadido para manejar el estado de carga

    const navigate = useNavigate();

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            nombre: formData.nombre === '',
            email: !validateEmail(formData.email),
            telefono: formData.telefono === '',
            consulta: formData.consulta === '',
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error)) {
            setLoading(true);

            try {
                const response = await fetch('https://qusyq2uf12.execute-api.us-east-2.amazonaws.com/prod/sendEmail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setFormSent(true); // Muestra el mensaje de éxito
                    setFormData({ nombre: '', email: '', telefono: '', consulta: '' });
                } else {
                    alert('Error al enviar el formulario. Por favor, intenta de nuevo.');
                }
            } catch (error) {
                alert('Error al enviar el formulario. Por favor, intenta de nuevo.');
            } finally {
                setLoading(false); // Oculta el indicador de carga
            }
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    };

    const handleBackToHome = () => {
        navigate('/'); // Redirige a la página principal
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Slide direction="up" in={!formSent && !loading} mountOnEnter unmountOnExit>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            maxWidth: '600px',
                            backgroundColor: 'white',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            mb: 3,
                        }}
                    >
                        <Typography variant="h4" gutterBottom sx={{ color: 'black', fontFamily: 'monospace' }}>
                            Contáctanos
                        </Typography>
                        <TextField
                            label="Nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            error={errors.nombre}
                            helperText={errors.nombre ? 'Nombre es requerido' : ''}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            helperText={errors.email ? 'Email no válido' : ''}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Teléfono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            error={errors.telefono}
                            helperText={errors.telefono ? 'Teléfono es requerido' : ''}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Consulta"
                            name="consulta"
                            value={formData.consulta}
                            onChange={handleChange}
                            error={errors.consulta}
                            helperText={errors.consulta ? 'Consulta es requerida' : ''}
                            margin="normal"
                            fullWidth
                            multiline
                            rows={4}
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                            Enviar
                        </Button>
                    </Box>
                </Slide>
                <Slide direction="up" in={formSent} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: '80vw',
                            maxHeight: '80vh',
                            backgroundColor: 'white',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h4" gutterBottom sx={{
                            color: 'black'
                        }}>
                            Gracias por contactarnos
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: 'black'
                        }}>
                            Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            onClick={handleBackToHome} // Maneja el click del botón
                        >
                            Volver a Inicio
                        </Button>
                    </Box>
                </Slide>
                <Slide direction="up" in={loading} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80vw',
                            height: '80vh',
                            backgroundColor: 'white',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                            zIndex: 1,
                        }}
                    >
                        <CircularProgress />
                        <Typography variant="h6" sx={{ mt: 2, color: 'black' }}>
                            Enviando tu consulta...
                        </Typography>
                    </Box>
                </Slide>
            </Box>
        </Container>
    );
}
