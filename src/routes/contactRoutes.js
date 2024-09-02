// routes/contactRoutes.js
import express from 'express';
import { sendContactEmail } from '../controllers/contactController.js'; // Ajusta la ruta si es necesario

const router = express.Router();

router.post('/contact', sendContactEmail);

export default router;
