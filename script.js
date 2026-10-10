const commands = [
  "dotnet build StocklyPOS",
  "python forecast.py",
  "git push origin main",
  "streamlit run app.py",
  "SELECT * FROM opportunities;"
];
let commandIndex = 0, charIndex = 0, deleting = false;
const target = document.getElementById('typing');
function typeLoop(){
  const word = commands[commandIndex];
  target.textContent = deleting ? word.slice(0, charIndex--) : word.slice(0, charIndex++);
  if(!deleting && charIndex > word.length + 6) deleting = true;
  if(deleting && charIndex < 0){deleting=false; commandIndex=(commandIndex+1)%commands.length; charIndex=0;}
  setTimeout(typeLoop, deleting ? 40 : 70);
}
if(target) typeLoop();
const year = document.getElementById('year');
if(year) year.textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
