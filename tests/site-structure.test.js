const fs = require('fs');
const html = fs.readFileSync('index.html','utf8');
const required = [
  'id="cinematic-gate"',
  '<nav',
  'id="founder"',
  'id="work"',
  'id="projects"',
  'id="team"',
  'id="auditions"',
  'id="contact"'
];
let failed = false;
for (const token of required) {
  if (!html.includes(token)) {
    console.error(`Missing required homepage hook: ${token}`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log('Homepage cinematic structure OK');
