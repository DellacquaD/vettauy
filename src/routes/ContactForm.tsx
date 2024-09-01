import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: '',
  });

  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    telefono: false,
    consulta: false,
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      nombre: formData.nombre === '',
      email: !validateEmail(formData.email),
      telefono: formData.telefono === '',
      consulta: formData.consulta === '',
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // Todos los campos son válidos, aquí puedes manejar el envío del formulario.
      alert('Formulario enviado con éxito');
      // Aquí podrías agregar la lógica para enviar un correo electrónico, tal como una integración con un backend o servicio de correo.
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
    }}>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
        padding: '1rem',
        width: 'auto',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
        gap: '1rem',
      }}>
        <Typography variant="h6" noWrap component="a" href="/" sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '40px', letterSpacing: '.4rem', color: 'black', textDecoration: 'none' }}>
          Contáctanos
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
          <FormControl sx={{ gap: "1rem" }}>
            <OutlinedInput
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              error={errors.nombre}
              sx={{ borderRadius: '10px' }}
            />
            <OutlinedInput
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              sx={{ borderRadius: '10px' }}
            />
            <OutlinedInput
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              error={errors.telefono}
              sx={{ borderRadius: '10px' }}
            />
            <TextField
              placeholder="Dejanos tu consulta"
              name="consulta"
              value={formData.consulta}
              onChange={handleChange}
              error={errors.consulta}
              multiline
              minRows={1}
              maxRows={6}
              variant="outlined"
              sx={{ borderRadius: '10px' }}
            />
          </FormControl>
          <Button
            type="submit"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '10px',
              marginTop: '1rem',
              width: '100px',
              alignSelf: 'center',
            }}>
            Enviar
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default ContactForm;
