import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://dellacquad.github.io/vettauy/',
  plugins: [react()],
});
