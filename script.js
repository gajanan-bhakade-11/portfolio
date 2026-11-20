const root=document.documentElement,btn=document.getElementById('theme');
try{const s=localStorage.getItem('theme');if(s)root.dataset.theme=s}catch(e){}
btn.onclick=()=>{const dark=getComputedStyle(root).getPropertyValue('--bg').trim()==='#0f1426';root.dataset.theme=dark?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}};
document.getElementById('year').textContent=new Date().getFullYear();
const bubbleField=document.getElementById('scroll-bubbles');
if(bubbleField&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  let lastSpawnY=window.scrollY;
  let framePending=false;
  window.addEventListener('scroll',()=>{
    if(Math.abs(window.scrollY-lastSpawnY)<70||framePending)return;
    lastSpawnY=window.scrollY;
    framePending=true;
    requestAnimationFrame(()=>{
      framePending=false;
      if(bubbleField.childElementCount>=10)return;
      const bubble=document.createElement('span');
      bubble.className='scroll-bubble';
      bubble.style.setProperty('--bubble-x',`${Math.random()*96}%`);
      bubble.style.setProperty('--bubble-size',`${14+Math.random()*28}px`);
      bubble.style.setProperty('--bubble-duration',`${1.8+Math.random()*1.2}s`);
      bubble.style.setProperty('--bubble-rise-offset',`${-100-Math.random()*100}px`);
      bubble.style.setProperty('--bubble-drift',`${-35+Math.random()*70}px`);
      bubble.addEventListener('animationend',()=>bubble.remove(),{once:true});
      bubbleField.appendChild(bubble);
    });
  },{passive:true});
}
// Hero demo: one message routed through the connector to an agent
