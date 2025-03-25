const fs = require('fs');
const path = require('path');

const filesToCopy = [
  { src: 'public/manifest.json', dest: 'dist/manifest.json' },
  { src: 'public/logo-192.jpg', dest: 'dist/logo-192.jpg' },
  { src: 'public/logo-256.jpg', dest: 'dist/logo-256.jpg' }
];

filesToCopy.forEach(({ src, dest }) => {
  fs.copyFileSync(path.resolve(__dirname, src), path.resolve(__dirname, dest));
  console.log(`Copied ${src} -> ${dest}`);
});
