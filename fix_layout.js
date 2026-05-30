const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Remove footer-team
html = html.replace(/<div class="footer-team">[\s\S]*?<div class="footer-socials">/, '<div class="footer-socials">');

// Remove footer-socials
html = html.replace(/<div class="footer-socials">[\s\S]*?<\/a>\s*<\/div>/, '');

// Update CSS
html = html.replace('.fixed-progress-nav { display: none !important; }', '.fixed-progress-nav { display: flex !important; flex-direction: column !important; position: fixed !important; left: 10px !important; top: 50% !important; transform: translateY(-50%) !important; width: auto !important; height: auto !important; gap: 15px !important; z-index: 999 !important; background: transparent !important; border: none !important; box-shadow: none !important; } .fixed-progress-item { display: flex !important; flex-direction: column !important; gap: 5px !important; }');

html = html.replace('.w-nav-menu { background-color: #FFFDEB !important;', '.w-nav-menu { z-index: 9999 !important; background-color: #FFFDEB !important;');

fs.writeFileSync('index.html', html);
console.log('Fixed index.html');

let html2 = fs.readFileSync('our-work.html', 'utf8');
html2 = html2.replace('.w-nav-menu { background-color: #FFFDEB !important;', '.w-nav-menu { z-index: 9999 !important; background-color: #FFFDEB !important;');
fs.writeFileSync('our-work.html', html2);
console.log('Fixed our-work.html');
