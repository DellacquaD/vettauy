// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './src/routes/contactRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173', // Reemplaza con el origen de tu aplicación
  methods: ['GET', 'POST'], // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Encabezados permitidos
}));

// Rutas
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log(process.env.EMAIL_USER); // Deberías ver tu correo en la consola
console.log(process.env.RECEIVER_EMAIL); // Deberías ver el destinatario en la consola