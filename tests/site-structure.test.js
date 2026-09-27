const fs = require('fs');
const html = fs.readFileSync('index.html','utf8');
const required = ['id="cinematic-gate"','<nav','id="founder"','id="work"','id="projects"','id="team"','id="auditions"','id="contact"','href="assets/css/site.css"','defer src="assets/js/site.js"'];
let failed = false;
for (const token of required) if (!html.includes(token)) { console.error(`Missing: ${token}`); failed = true; }
for (const file of ['assets/css/site.css','assets/js/site.js']) if (!fs.existsSync(file)) { console.error(`Missing file: ${file}`); failed = true; }
if (fs.existsSync('assets/css/site.css')) {
 const css=fs.readFileSync('assets/css/site.css','utf8');
 for(const token of ['prefers-reduced-motion',':focus-visible','@media (max-width: 700px)','overflow-x']) if(!css.includes(token)){console.error(`Missing CSS safeguard: ${token}`);failed=true;}
}
if (failed) process.exit(1);
console.log('Cinematic site structure and safeguards OK');
