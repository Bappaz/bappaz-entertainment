import fs from 'node:fs';
const home = fs.readFileSync('index.html','utf8');
const audition = fs.readFileSync('auditions.html','utf8');
const visibleText = home.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
const must = [
  '<nav', 'id="work"', 'id="about"', 'id="capabilities"', 'id="team"', 'id="auditions"', 'id="contact"',
  'Shreekant D. Ahire', 'Shiva Ahire', 'Rajput Kiran', 'href="auditions.html"',
  'href="assets/site.css"', 'defer src="assets/site.js"', 'aria-label="Primary navigation"', 'aria-expanded="false"', 'data-reveal'
];
let failed = false;
for (const token of must) if (!home.includes(token)) { console.error('Missing home requirement:', token); failed = true; }
for (const name of ['Password', 'The New', 'The Dancing', 'Ishq']) if (!visibleText.includes(name)) { console.error('Missing project:', name); failed = true; }
if (!home.includes('src="assets/shreekant-founder.jpg"')) { console.error('Founder portrait missing'); failed = true; }
if (!audition.includes('ISHQ') || !audition.includes('viewport')) { console.error('Audition route/content requirement missing'); failed = true; }
if (!home.includes('viewport')) { console.error('Homepage viewport missing'); failed = true; }
if (failed) process.exit(1);
console.log('Bappaz cinematic site smoke requirements satisfied.');
