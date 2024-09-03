// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { createHtmlPlugin } from 'vite-plugin-html';

// export default defineConfig({
//   plugins: [
//     react(),
//     createHtmlPlugin({
//       minify: true,
//       inject: {
//         data: {
//           scriptPath: '/dist/assets/main-8NnE9eik.js'
//         }
//       }
//     })
//   ],
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main: 'index.html'
//       }
//     }
//   }
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          scriptPath: '' // Inicialmente vacío, se actualizará después de la construcción
        }
      }
    })
  ],
  build: {
    outDir: 'dist',
    manifest: true, // Genera el archivo manifest.json
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});