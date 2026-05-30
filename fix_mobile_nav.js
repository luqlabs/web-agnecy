const fs = require('fs');

const mobileCSS = `
<style id="mobile-fix">
@media (max-width: 991px) {
  /* Hide desktop progress nav completely on mobile */
  .fixed-progress-nav {
    display: none !important;
  }

  /* Hamburger menu - open from top left, stretch full width */
  .w-nav-menu {
    position: absolute !important;
    top: 100% !important;
    left: 0 !important;
    right: auto !important;
    width: 100% !important;
    background-color: #FFFDEB !important;
    z-index: 9999 !important;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
    border-bottom: 3px solid #ed5724 !important;
    padding: 1rem 1.5rem 1.5rem !important;
    text-align: left !important;
    display: none;
    flex-direction: column !important;
  }

  .w-nav-menu.w--open {
    display: flex !important;
  }

  /* Nav items left-aligned */
  .nav-menu {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    width: 100% !important;
    gap: 0 !important;
  }

  .nav-link {
    font-size: 1.1rem !important;
    font-weight: 600 !important;
    color: #1a1a1a !important;
    display: block !important;
    padding: 0.75rem 0 !important;
    border-bottom: 1px solid rgba(0,0,0,0.06) !important;
    width: 100% !important;
    text-align: left !important;
  }

  /* Showreel button in menu */
  .showreel-wrapper {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    padding: 0.75rem 0 !important;
    border-bottom: 1px solid rgba(0,0,0,0.06) !important;
    width: 100% !important;
    margin-top: 0 !important;
  }

  .showreel-text {
    font-size: 1.1rem !important;
    font-weight: 600 !important;
    color: #1a1a1a !important;
  }

  .showreel-link img {
    width: 36px !important;
    height: 36px !important;
  }

  /* Contact Us button */
  .nav-cta-button-container {
    width: 100% !important;
    margin-top: 1rem !important;
  }

  .nav-link.primary {
    background-color: #ed5724 !important;
    color: white !important;
    border-radius: 999px !important;
    text-align: center !important;
    padding: 0.75rem 1.5rem !important;
    border-bottom: none !important;
    display: inline-block !important;
    width: auto !important;
  }

  /* Navbar bar itself */
  .nav-bar {
    position: sticky !important;
    top: 0 !important;
    z-index: 10000 !important;
    background-color: #FFFDEB !important;
  }

  /* Hero text */
  .heading._2xl {
    font-size: clamp(2.5rem, 10vw, 3.5rem) !important;
    line-height: 1 !important;
    text-align: center !important;
    padding: 0 1rem !important;
  }

  .paragraph.x-large {
    font-size: clamp(1rem, 4vw, 1.25rem) !important;
    line-height: 1.5 !important;
    text-align: center !important;
    padding: 0 1rem !important;
  }

  /* Social media floating */
  .footer-socials {
    position: fixed !important;
    right: 12px !important;
    bottom: 80px !important;
    top: auto !important;
    transform: none !important;
    flex-direction: column !important;
    display: flex !important;
    gap: 8px !important;
    z-index: 9998 !important;
  }

  .footer-social-button {
    width: 44px !important;
    height: 44px !important;
  }

  /* Services cards */
  .services-card, .services-card._2, .services-card._3 {
    padding: 1.5rem !important;
    margin-bottom: 1rem !important;
  }

  .services-card-title { font-size: 1.6rem !important; }
  .services-short-text { font-size: 0.95rem !important; }

  /* FAQ */
  .question-container { padding: 1rem !important; }
  .heading.s { font-size: 1.1rem !important; }
  .answer p { font-size: 0.95rem !important; }

  /* General padding */
  .w-container { padding-left: 1rem !important; padding-right: 1rem !important; }
  .container { padding-left: 1rem !important; padding-right: 1rem !important; }
}
</style>
`;

function fixFile(filename) {
  let html = fs.readFileSync(filename, 'utf8');

  // Remove previous mobile-fix style blocks
  html = html.replace(/<style id="mobile-fix">[\s\S]*?<\/style>/g, '');
  html = html.replace(/<style>\s*@media \(max-width: 991px\)[\s\S]*?<\/style>/g, '');

  // Remove footer-team (random faces)
  html = html.replace(/<div class="footer-team">[\s\S]*?<div class="footer-socials">/, '<div class="footer-socials">');

  // Remove old footer-socials button group
  html = html.replace(/<div class="footer-socials">[\s\S]*?<\/a>\s*<\/div>/, '');

  // Inject new mobile CSS before </head>
  html = html.replace('</head>', mobileCSS + '</head>');

  fs.writeFileSync(filename, html);
  console.log('Fixed: ' + filename);
}

fixFile('index.html');
fixFile('our-work.html');
