(()=>{const menu=document.querySelector('.menu');const nav=document.querySelector('#primary-nav');if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}))}const items=[...document.querySelectorAll('[data-reveal]')];const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced||!('IntersectionObserver'in window)){items.forEach(x=>x.classList.add('visible'));return}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -5%'});items.forEach(x=>observer.observe(x))})();
const enquiry = document.querySelector('#enquiry-form');
if (enquiry) enquiry.addEventListener('submit', event => {
  event.preventDefault();
  if (!enquiry.reportValidity()) return;
  const data = Object.fromEntries(new FormData(enquiry));
  const recipient = data.recipient === 'shiv' ? { name:'Shiv Ahire', email:'bappaexcel77@gmail.com', phone:'919920101966' } : { name:'Shreekant Ahire', email:'sbappashri@gmail.com', phone:'919967255438' };
  const message = `Hello Bappaz Entertainment & FilmZ,

I'd like to discuss a ${data.interest} project.

Name: ${data.name.trim()}
Email: ${data.email.trim()}
Company: ${data.company.trim() || 'Not specified'}
City / venue: ${data.city.trim() || 'To be decided'}
Date: ${data.date || 'To be decided'}

Brief:
${data.brief.trim()}`;
  const email = event.submitter?.value === 'email';
  const url = email ? `mailto:${recipient.email}?subject=${encodeURIComponent('New project enquiry — ' + data.interest)}&body=${encodeURIComponent(message)}` : `https://wa.me/${recipient.phone}?text=${encodeURIComponent(message)}`;
  const status = document.querySelector('#form-status');
  status.replaceChildren(document.createTextNode(`Your message for ${recipient.name} is prepared. Review and send it in your app. `));
  const again = document.createElement('a'); again.href = url; again.textContent = 'Open draft again ↗';
  if (!email) { again.target = '_blank'; again.rel = 'noopener noreferrer'; window.open(url, '_blank', 'noopener,noreferrer'); }
  else window.location.href = url;
  status.append(again);
});
