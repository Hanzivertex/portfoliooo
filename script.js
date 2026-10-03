const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', ()=>{
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px';
  nav.style.background = 'rgba(11,15,18,.98)';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'stretch';
  nav.style.borderBottom = '1px solid rgba(255,255,255,.1)';
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', ()=>{
    if(window.innerWidth <= 900) nav.style.display = '';
  });
});
