const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

const filesToCopy = [
    { src: 'public/manifest.json', dest: 'dist/manifest.json' },
    { src: 'public/logo-192.png', dest: 'dist/logo-192.png' },
    { src: 'public/logo-256.png', dest: 'dist/logo-256.png' },
    { src: 'public/favicon.ico', dest: 'dist/favicon.ico' }
];

filesToCopy.forEach(({ src, dest }) => {
    if (fs.existsSync(path.resolve(__dirname, src))) {
        fs.copyFileSync(path.resolve(__dirname, src), path.resolve(__dirname, dest));
        console.log(`Copied ${src} -> ${dest}`);
    } else {
        console.warn(`Warning: ${src} not found. Skipping.`);
    }
});
