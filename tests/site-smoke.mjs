import fs from 'node:fs';
const home = fs.readFileSync('index.html','utf8');
const audition = fs.readFileSync('auditions.html','utf8');
const bench = fs.readFileSync('the-new-bench.html','utf8');
const visibleText = home.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
const must = [
  '<nav', 'id="work"', 'id="performances"', 'id="gallery"', 'id="about"', 'id="capabilities"', 'id="team"', 'id="auditions"', 'id="contact"',
  'Shreekant D. Ahire', 'Shiva Ahire', 'Rajput Kiran', 'href="auditions.html"',
  'href="assets/site.css"', 'defer src="assets/site.js"', 'aria-label="Primary navigation"', 'aria-expanded="false"', 'data-reveal'
];
let failed = false;
for (const token of must) if (!home.includes(token)) { console.error('Missing home requirement:', token); failed = true; }
for (const name of ['Password', 'The New', 'The Dancing', 'Ishq']) if (!visibleText.includes(name)) { console.error('Missing project:', name); failed = true; }
if (!home.includes('src="assets/shreekant-founder-full.jpg"')) { console.error('Founder portrait missing'); failed = true; }
for (const path of ['assets/shreekant-founder-full.jpg', 'assets/portrait-editorial-black.jpg', 'assets/portrait-editorial-white.jpg', 'assets/archive/bappaz-original-logo.jpg']) if (!home.includes(path)) { console.error('Missing image reference:', path); failed = true; }
for (const name of ['Adbhut', 'Culture of India', 'Save Earth', 'Shiv Ahire', 'bappaexcel77@gmail.com']) if (!visibleText.includes(name)) { console.error('Missing archive content:', name); failed = true; }
for (const file of ['assets/archive/hero.webp','assets/archive/password-poster.jpg','assets/archive/bappaz-logo-3d.webp','assets/archive/on-set-celebration.mp4']) if (!fs.existsSync(file)) { console.error('Missing archive asset:', file); failed = true; }
if (!home.includes('href="the-new-bench.html"') || !bench.includes('DIALOGUE-FREE')) { console.error('Bench concept page missing'); failed = true; }
if (!audition.includes('ISHQ') || !audition.includes('viewport')) { console.error('Audition route/content requirement missing'); failed = true; }
if (!home.includes('viewport')) { console.error('Homepage viewport missing'); failed = true; }
if (failed) process.exit(1);
console.log('Bappaz cinematic site smoke requirements satisfied.');
