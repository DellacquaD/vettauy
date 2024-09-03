const fs = require('fs');
const path = require('path');

const manifestPath = path.resolve(__dirname, 'dist/.vite/manifest.json');
const htmlPath = path.resolve(__dirname, 'dist/index.html');

if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const scriptPath = manifest['index.html'].file;

  let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  htmlContent = htmlContent.replace('<script type="module" src=""></script>', `<script type="module" src="${scriptPath}"></script>`);

  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  console.log('HTML file updated with the correct script path.');
} else {
  console.error('Manifest file not found.');
}