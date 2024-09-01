import express from 'express';
import contactRoutes from './src/routes/contactRoutes.js'; // Asegúrate de incluir la extensión `.js` al importar archivos locales
const app = express();

app.use(express.json());

app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
