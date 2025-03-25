const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

// List of files to copy
const filesToCopy = [
    { src: 'public/manifest.json', dest: 'dist/manifest.json' },
    { src: 'public/logo-192.jpg', dest: 'dist/logo-192.jpg' },
    { src: 'public/logo-256.jpg', dest: 'dist/logo-256.jpg' },
    { src: 'public/favicon.ico', dest: 'dist/favicon.ico' } // Add favicon.ico if missing
];

filesToCopy.forEach(({ src, dest }) => {
    fs.copyFileSync(path.resolve(__dirname, src), path.resolve(__dirname, dest));
    console.log(`Copied ${src} -> ${dest}`);
});
