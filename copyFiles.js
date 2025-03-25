const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

// List of files to copy
const filesToCopy = [
    { src: 'public/manifest.json', dest: 'dist/manifest.webmanifest' }, // Corrected extension
    { src: 'public/logo-192.jpg', dest: 'dist/logo-192.png' },
    { src: 'public/logo-256.jpg', dest: 'dist/logo-256.png' },
    { src: 'public/favicon.ico', dest: 'dist/favicon.ico' }
];

filesToCopy.forEach(({ src, dest }) => {
    const srcPath = path.resolve(__dirname, src);
    const destPath = path.resolve(__dirname, dest);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${src} -> ${dest}`);
    } else {
        console.error(`File not found: ${src}`);
    }
});
