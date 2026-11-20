const root=document.documentElement,btn=document.getElementById('theme');
try{const s=localStorage.getItem('theme');if(s)root.dataset.theme=s}catch(e){}
btn.onclick=()=>{const dark=getComputedStyle(root).getPropertyValue('--bg').trim()==='#0f1426';root.dataset.theme=dark?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}};
document.getElementById('year').textContent=new Date().getFullYear();
// Hero demo: one message routed through the connector to an agent
