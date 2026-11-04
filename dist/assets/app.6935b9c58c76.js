document.documentElement.classList.add('js');
const skills=[
 ['Languages',[['JavaScript','Modern interfaces, browser logic and server-side applications.'],['TypeScript','Typed application code across frontend and backend.'],['Python','Automation, web scraping and AI-powered workflows.'],['PHP','Backend application development with Laravel.'],['C++','Programming foundations and computer science.']]],
 ['Frontend',[['React.js','Interactive, responsive web applications.'],['HTML / CSS','Semantic structure, responsive layouts and visual detail.'],['Flutter','Mobile app development, including the Railways complaint system.']]],
 ['Backend',[['Node.js','Full-stack services and backend integrations.'],['Express.js','REST APIs and application services.'],['NestJS','Structured TypeScript backend development.'],['Laravel','PHP applications, queues and event broadcasting.']]],
 ['Data & real-time',[['PostgreSQL','Relational data, migrations and query optimization.'],['MySQL','Relational database design and queries.'],['Supabase','Application data and backend services.'],['Firebase','Cloud-backed application development.'],['WebSockets','Real-time features with Pusher and Laravel Reverb.']]],
 ['Automation',[['Web scraping','Collecting, processing and organizing dynamic web content.'],['Mobile automation','Python-driven workflows and repeatable app navigation.'],['AI integration','AI-powered workflows and automation tooling.'],['Redis / Queues','Background jobs, caching, Horizon and scheduled workflows.']]],
 ['Tools & cloud',[['Docker','Containerized development environments.'],['Git / GitHub','Version control and collaborative development.'],['CI / CD','Foundations of automated delivery.'],['AWS / S3','AWS basics and S3-compatible storage.']]]
];
const hint=document.querySelector('.skill-hint');
skills.forEach(([group,items])=>{const row=document.createElement('div');row.className='skill-row reveal';const label=document.createElement('span');label.className='label';label.textContent=group;const list=document.createElement('div');list.className='skill-items';items.forEach(([name,desc])=>{const b=document.createElement('button');b.className='skill';b.textContent=name;b.title=desc;b.addEventListener('mouseenter',()=>hint.textContent=desc);b.addEventListener('focus',()=>hint.textContent=desc);b.addEventListener('click',()=>hint.textContent=desc);list.append(b)});row.append(label,list);document.querySelector('#skill-rows').append(row)});
const projects=[
  {
    "title": "Yuqelo",
    "type": "Everyday tools platform",
    "accent": "#db995e",
    "tint": "#8b604044",
    "tech": [
      "End-to-end build",
      "Full stack",
      "Utility tools"
    ],
    "short": "A free workspace for everyday PDF, image, text and developer tasks. Designed and built the complete product end to end.",
    "detail": "I built Yuqelo end to end: a responsive tools platform that brings PDF workflows, image utilities, text tools, developer tools, calculators and converters into one workspace. I handled the complete product, from the user experience to implementation and delivery.",
    "live": "https://www.yuqelo.site/",
    "image": "assets/yuqelo-preview.png",
    "alt": "Yuqelo homepage showing its everyday online tools workspace"
  },
  {
    "title": "M4BE",
    "type": "Gaming marketplace",
    "accent": "#a39aff",
    "tint": "#52498655",
    "tech": [
      "End-to-end build",
      "Full stack",
      "Gaming"
    ],
    "short": "A gaming marketplace built end to end, with a dedicated web experience for discovering, buying and selling gaming accounts.",
    "detail": "I developed M4BE as a complete gaming marketplace, owning the frontend, backend integration and delivery end to end. The product focuses on a dedicated marketplace experience for gaming accounts.",
    "live": "https://m4be5.com/",
    "image": null,
    "alt": ""
  },
  {
    "title": "Smart Scheduler",
    "type": "Academic scheduling platform",
    "accent": "#82b9e1",
    "tint": "#30516f66",
    "tech": [
      "End-to-end build",
      "Role-based access",
      "Scheduling"
    ],
    "short": "An academic scheduling platform for admins, faculty and students, bringing timetable generation, availability and class schedules together.",
    "detail": "I built Smart Scheduler end to end, with separate experiences for administrators, faculty and students. Administrators manage data, constraints, timetable generation and emergency updates; faculty view schedules and submit availability; students access weekly class timetables.",
    "live": "https://fyp-pied-eight.vercel.app/",
    "image": "assets/scheduler-preview.png",
    "alt": "Smart Scheduler sign-in page with Admin, Faculty and Student roles"
  }
];
const dialog=document.querySelector('#project-dialog');
function card(p,i){
 const a=document.createElement('article');a.className='project-card reveal';a.style.setProperty('--tint',p.tint);a.style.setProperty('--accent',p.accent);
 const art=p.image?`<img class="project-preview" src="${p.image}" alt="${p.alt}" loading="lazy" width="1440" height="1000">`:`<div class="marketplace-preview" aria-hidden="true"><span class="marketplace-kicker">PLAY. TRADE. LEVEL UP.</span><strong>M4BE<span>↗</span></strong><span class="marketplace-caption">Gaming marketplace</span><div class="marketplace-orbit"></div></div>`;
 a.innerHTML=`<div class="project-art">${art}</div><div class="project-body"><p class="label project-meta">0${i+1} — ${p.type}</p><h3>${p.title}</h3><p>${p.short}</p><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-actions"><a class="project-live" href="${p.live}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${p.title}">Visit website ↗</a><button class="details" aria-label="Read about ${p.title}">About the build</button></div></div>`;
 a.querySelector('button').addEventListener('click',()=>{dialog.querySelector('h2').textContent=p.title;dialog.querySelector('.dialog-tag').textContent=`${p.type} · Built end to end`;dialog.querySelector('.dialog-desc').textContent=p.detail;dialog.querySelector('.tags').innerHTML=p.tech.map(t=>`<span>${t}</span>`).join('');dialog.querySelector('.dialog-live').href=p.live;dialog.showModal()});return a;
}
projects.forEach((p,i)=>document.querySelector('#featured-projects').append(card(p,i)));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const header=document.querySelector('header'),menu=document.querySelector('.menu');menu.addEventListener('click',()=>{const open=header.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close −':'Menu +'});document.querySelectorAll('header a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu +'}));
const reduced=matchMedia('(prefers-reduced-motion: reduce)'),hero=document.querySelector('.hero-scroll'),copy=document.querySelector('.hero-copy'),about=document.querySelector('.about-copy'),social=document.querySelector('.hero-social'),counter=document.querySelector('.frame-counter'),timeline=document.querySelector('.timeline'),line=document.querySelector('.timeline-fill');
const clamp=(n,a=0,b=1)=>Math.min(b,Math.max(a,n));let target=0,current=0,frame=null,sequenceDirection=1;
// The canvas displays actual frames extracted from Umar's supplied video.
// Keep a small decoded-image cache; native browser HTTP cache stores compressed files.
const canvas=document.querySelector('.hero-canvas'),context=canvas.getContext('2d'),poster=document.querySelector('.sequence-poster');
const images=new Map(),failed=new Set();let wanted=0,lastDrawn=-1,inFlight=0,sequenceDisposed=false;
function sizeCanvas(){const box=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(box.width*dpr);canvas.height=Math.round(box.height*dpr);lastDrawn=-1;drawSequence();}
function drawSequence(){
 if(!context)return;const index=wanted,image=images.get(index);if(!image?.complete||!image.naturalWidth)return;
 if(index===lastDrawn)return;
 const mobile=canvas.clientWidth<=600,dpr=canvas.width/canvas.clientWidth;
 const top=(mobile?86:12)*dpr,bottom=(mobile?canvas.height*.43:12*dpr);
 const availableHeight=canvas.height-top-bottom;
 const scale=Math.min(availableHeight/image.naturalHeight,canvas.width/(image.naturalWidth*(mobile?.64:.7)));
 const w=image.naturalWidth*scale,h=image.naturalHeight*scale,x=canvas.width*(mobile?.5:.65)-w*.56,y=top;
 context.clearRect(0,0,canvas.width,canvas.height);
 // Full-bleed atmosphere fills the viewport while the sharp action stays entirely visible.
 const bgScale=Math.max(canvas.width/image.naturalWidth,canvas.height/image.naturalHeight),bw=image.naturalWidth*bgScale,bh=image.naturalHeight*bgScale;
 context.save();context.filter=`blur(${22*dpr}px) brightness(.42)`;context.drawImage(image,(canvas.width-bw)/2,(canvas.height-bh)/2,bw,bh);context.restore();
 context.save();context.beginPath();context.rect(0,y,canvas.width,h);context.clip();
 context.drawImage(image,x,y,w,h);context.restore();
 poster.style.opacity='0';lastDrawn=index;
 canvas.dataset.frame=String(index+1);canvas.dataset.imageBounds=JSON.stringify({x,y,width:w,height:h,canvasHeight:canvas.height});
 counter.textContent=`${String(index+1).padStart(3,'0')} / 150`;
}
function pruneSequence(){if(images.size<=18)return;const far=[...images.keys()].filter(i=>i!==wanted&&i!==lastDrawn&&images.get(i).complete).sort((a,b)=>Math.abs(b-wanted)-Math.abs(a-wanted));while(images.size>18&&far.length)images.delete(far.shift());}
function loadSequence(){if(sequenceDisposed)return;const direction=sequenceDirection;const order=[wanted];for(let n=1;n<=8;n++){order.push(wanted+n*direction);if(n<=3)order.push(wanted-n*direction);}for(const index of order){if(inFlight>=4)break;if(index<0||index>=150||images.has(index)||failed.has(index))continue;const image=new Image();image.decoding='async';images.set(index,image);inFlight++;const finish=ok=>{inFlight--;if(!ok){failed.add(index);images.delete(index);}drawSequence();pruneSequence();loadSequence();};image.onload=()=>finish(true);image.onerror=()=>finish(false);image.src=`frames/f${String(index+1).padStart(3,'0')}.webp`;}pruneSequence();}
function updateSequence(progress){const next=Math.round(progress*149);if(next!==wanted)sequenceDirection=next>wanted?1:-1;wanted=next;loadSequence();drawSequence();}
// Match the current scroll position immediately; never queue playback or hold the page.
function render(){
 current=reduced.matches?0:target;
 updateSequence(current);
 const p=current,fade=clamp((p-.16)/.2),introAlpha=1-fade,aboutAlpha=clamp((p-.4)/.2);
 copy.style.opacity=introAlpha;copy.style.transform=`translateY(${-32*fade}px)`;copy.style.visibility=introAlpha<.01?'hidden':'visible';
 about.style.opacity=aboutAlpha;about.style.transform=`translateY(${24*(1-aboutAlpha)}px)`;about.style.pointerEvents=aboutAlpha>.8?'auto':'none';about.style.visibility=aboutAlpha<.01?'hidden':'visible';
 social.style.opacity=innerWidth<601?1-clamp((p-.15)/.16):1;social.style.visibility=innerWidth<601&&p>.32?'hidden':'visible';
 frame=null;
}

new ResizeObserver(sizeCanvas).observe(canvas);sizeCanvas();
addEventListener('pageshow',()=>{sizeCanvas();updateSequence(reduced.matches?0:current);});
function scroll(){
 const y=scrollY,h=Math.max(1,hero.offsetHeight-innerHeight);
 target=clamp(y/h);header.classList.toggle('scrolled',y>h);
 document.querySelector('.progress').style.width=`${100*y/Math.max(1,document.documentElement.scrollHeight-innerHeight)}%`;
 const rect=timeline.getBoundingClientRect();line.style.transform=`scaleY(${clamp((innerHeight*.7-rect.top)/rect.height)})`;
 if(!frame)frame=requestAnimationFrame(render);
}
addEventListener('scroll',scroll,{passive:true});addEventListener('resize',scroll);reduced.addEventListener('change',scroll);scroll();document.querySelector('#year').textContent=new Date().getFullYear();
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('header nav a').forEach(a=>a.classList.toggle('active',a.hash===`#${e.target.id}`))}}),{rootMargin:'-20% 0px -45% 0px'});document.querySelectorAll('section[id]:not(#top)').forEach(s=>sectionObserver.observe(s));
