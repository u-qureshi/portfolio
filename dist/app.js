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
const toolkitDetails=[
 'The building blocks behind every application.',
 'Interfaces that feel clear, responsive and considered.',
 'The services and logic that connect everything.',
 'Structured data and experiences that stay connected.',
 'Less repetitive work. More room for useful ideas.',
 'From a local environment to a delivered product.'
];
const toolkitPaths=[
 '<path d="m8 5-6 7 6 7m8-14 6 7-6 7M14 3l-4 18"/>',
 '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
 '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5"/>',
 '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v7c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12v7c0 1.66 4.03 3 9 3s9-1.34 9-3v-7"/>',
 '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4"/>',
 '<path d="M7 18H5a4 4 0 0 1-.6-7.96A7 7 0 0 1 18 8a5 5 0 0 1 1 9.9M12 13v9m-4-5 4-4 4 4"/>'
];
skills.forEach(([group,items],index)=>{
 const row=document.createElement('article');row.className='skill-row reveal';
 const top=document.createElement('div');top.className='skill-card-top';
 top.innerHTML=`<span class="skill-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${toolkitPaths[index]}</svg></span><span class="label">${String(index+1).padStart(2,'0')} / THE TOOLKIT</span>`;
 const title=document.createElement('h3');title.textContent=group;
 const list=document.createElement('div');list.className='skill-items';
 const detail=document.createElement('p');detail.className='skill-card-detail';detail.id=`skill-detail-${index}`;detail.textContent=toolkitDetails[index];
 items.forEach(([name,desc])=>{
  const button=document.createElement('button');button.className='skill';button.textContent=name;button.setAttribute('aria-describedby',detail.id);
  const explain=()=>{detail.textContent=desc;hint.textContent=desc};
  button.addEventListener('mouseenter',explain);button.addEventListener('focus',explain);button.addEventListener('click',explain);list.append(button);
 });
 const reset=()=>{detail.textContent=toolkitDetails[index]};
 row.addEventListener('mouseleave',()=>{if(!row.contains(document.activeElement))reset()});
 row.addEventListener('focusout',event=>{if(!row.contains(event.relatedTarget))reset()});
 row.append(top,title,list,detail);document.querySelector('#skill-rows').append(row);
});
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
const canvas=document.querySelector('.hero-canvas'),context=canvas.getContext('2d',{alpha:true,desynchronized:true}),poster=document.querySelector('.sequence-poster');
const mobileDevice=matchMedia('(max-width:600px)').matches;
const decoded=new Map(),coarse=new Map(),pending=new Map(),encoded=new Map(),failed=new Set();
const coarseIndices=[0,15,30,45,60,75,90,105,120,135,149];
const cacheLimit=mobileDevice?10:16;
let wanted=0,lastDrawn=-1,geometry=null,metrics=null,warmStarted=false,active=true,drawDirty=true;
const progressBar=document.querySelector('.progress');
function requestRender(){if(!frame&&active)frame=requestAnimationFrame(render);}
function frameURL(index){return `frames/f${String(index+1).padStart(3,'0')}.webp`;}
function getBlob(index,priority='low'){
 if(encoded.has(index))return encoded.get(index);
 const task=fetch(frameURL(index),{cache:'force-cache',priority}).then(response=>{if(!response.ok)throw new Error('Frame unavailable');return response.blob()});
 encoded.set(index,task);task.catch(()=>encoded.delete(index));return task;
}
async function decodeFrame(blob,width){
 if('createImageBitmap' in window){try{return await createImageBitmap(blob,{resizeWidth:width,resizeHeight:Math.round(width*9/16),resizeQuality:'high'})}catch{}}
 const url=URL.createObjectURL(blob),img=new Image();img.decoding='async';img.src=url;
 try{await img.decode();return img}finally{URL.revokeObjectURL(url)}
}
function dispose(image){if(image&&typeof image.close==='function')image.close();}
function pruneFrames(){
 if(decoded.size<=cacheLimit)return;
 const far=[...decoded.keys()].filter(i=>i!==wanted&&i!==lastDrawn).sort((a,b)=>Math.abs(b-wanted)-Math.abs(a-wanted));
 while(decoded.size>cacheLimit&&far.length){const index=far.shift();dispose(decoded.get(index));decoded.delete(index)}
}
function loadFrame(index){
 if(index<0||index>149||decoded.has(index)||pending.has(index)||failed.has(index))return;
 if(pending.size>=4)return;
 const promise=getBlob(index,index===wanted?'high':'low').then(blob=>decodeFrame(blob,mobileDevice?960:1280)).then(image=>{
  decoded.set(index,image);if(index===wanted)drawDirty=true;pruneFrames();requestRender();
 }).catch(()=>{failed.add(index)}).finally(()=>{pending.delete(index);loadNearby()});
 pending.set(index,promise);
}
function loadNearby(){
 if(!active)return;loadFrame(wanted);
 if(reduced.matches)return;
 for(let n=1;n<=5;n++){loadFrame(wanted+n*sequenceDirection);if(n<=2)loadFrame(wanted-n*sequenceDirection)}
}
function startWarmup(){
 if(warmStarted||reduced.matches||navigator.connection?.saveData)return;
 warmStarted=true;
 const run=async()=>{
  // Compact decoded previews cover the whole sequence for immediate large scroll jumps.
  for(const index of coarseIndices){
   if(!active)break;
   try{const image=await decodeFrame(await getBlob(index),mobileDevice?480:640);coarse.set(index,image);requestRender()}catch{}
  }
  // Warm compressed files with two low-priority requests, without retaining all decoded frames.
  if(navigator.connection?.effectiveType?.includes('2g'))return;
  let next=0;const worker=async()=>{while(next<150&&active){const index=next++;try{await getBlob(index)}catch{}}};
  await Promise.all([worker(),worker()]);
 };
 if('requestIdleCallback' in window)requestIdleCallback(run,{timeout:1800});else setTimeout(run,500);
}
function updateMetrics(){
 const y=scrollY,rect=timeline.getBoundingClientRect();
 metrics={heroRange:Math.max(1,hero.offsetHeight-innerHeight),pageRange:Math.max(1,document.documentElement.scrollHeight-innerHeight),timelineTop:rect.top+y,timelineHeight:rect.height,viewportHeight:innerHeight,mobile:innerWidth<601};
 requestRender();
}
function sizeCanvas(){
 const box=canvas.getBoundingClientRect();if(!box.width||!box.height)return;
 const dpr=Math.min(devicePixelRatio||1,1.5,1920/box.width),width=Math.round(box.width*dpr),height=Math.round(box.height*dpr);
 if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;lastDrawn=-1;drawDirty=true}
 const mobile=box.width<=600,top=(mobile?86:12)*dpr,bottom=mobile?height*.43:12*dpr;
 const scale=Math.min((height-top-bottom)/720,width/(1280*(mobile?.64:.7))),w=1280*scale,h=720*scale;
 geometry={x:width*(mobile?.5:.65)-w*.56,y:top,width:w,height:h};
 updateMetrics();requestRender();
}
function drawSequence(){
 if(!context||!geometry)return;
 let index=wanted,image=decoded.get(index)||coarse.get(index);
 if(!image){
  const ready=[...decoded.keys(),...coarse.keys()];if(!ready.length)return;
  index=ready.reduce((nearest,candidate)=>Math.abs(candidate-wanted)<Math.abs(nearest-wanted)?candidate:nearest,ready[0]);
  image=decoded.get(index)||coarse.get(index);
 }
 const full=decoded.get(index)===image;
 if(index===lastDrawn&&!drawDirty&&canvas.dataset.quality===(full?'full':'preview'))return;
 const g=geometry;context.clearRect(0,0,canvas.width,canvas.height);context.drawImage(image,g.x,g.y,g.width,g.height);
 poster.style.opacity='0';lastDrawn=index;drawDirty=false;
 canvas.dataset.frame=String(index+1);canvas.dataset.quality=full?'full':'preview';
 canvas.dataset.imageBounds=JSON.stringify({...g,canvasHeight:canvas.height});counter.textContent=`${String(index+1).padStart(3,'0')} / 150`;
 if(!warmStarted)startWarmup();
}
let lastCopyProgress=-1,lastScrolled=null,lastPageProgress=-1,lastTimelineProgress=-1;
function render(){
 frame=null;if(!metrics)updateMetrics();
 const y=scrollY;target=clamp(y/metrics.heroRange);current=reduced.matches?0:target;
 const next=Math.round(current*149);if(next!==wanted){sequenceDirection=next>wanted?1:-1;wanted=next;drawDirty=true}
 loadNearby();drawSequence();
 const scrolled=y>metrics.heroRange;if(scrolled!==lastScrolled){header.classList.toggle('scrolled',scrolled);lastScrolled=scrolled}
 const pageProgress=clamp(y/metrics.pageRange);if(pageProgress!==lastPageProgress){progressBar.style.transform=`scaleX(${pageProgress})`;lastPageProgress=pageProgress}
 const tlProgress=clamp((metrics.viewportHeight*.7-metrics.timelineTop+y)/Math.max(1,metrics.timelineHeight));if(tlProgress!==lastTimelineProgress){line.style.transform=`scaleY(${tlProgress})`;lastTimelineProgress=tlProgress}
 if(current===lastCopyProgress)return;lastCopyProgress=current;
 const fade=clamp((current-.16)/.2),introAlpha=1-fade,aboutAlpha=clamp((current-.4)/.2);
 copy.style.opacity=introAlpha;copy.style.transform=`translate3d(0,${-32*fade}px,0)`;copy.style.visibility=introAlpha<.01?'hidden':'visible';
 about.style.opacity=aboutAlpha;about.style.transform=`translate3d(0,${24*(1-aboutAlpha)}px,0)`;about.style.pointerEvents=aboutAlpha>.8?'auto':'none';about.style.visibility=aboutAlpha<.01?'hidden':'visible';
 social.style.opacity=metrics.mobile?1-clamp((current-.15)/.16):1;social.style.visibility=metrics.mobile&&current>.32?'hidden':'visible';
}
const canvasObserver=new ResizeObserver(sizeCanvas);canvasObserver.observe(canvas);
const pageObserver=new ResizeObserver(updateMetrics);pageObserver.observe(document.body);
addEventListener('scroll',requestRender,{passive:true});addEventListener('resize',sizeCanvas,{passive:true});
reduced.addEventListener('change',()=>{lastCopyProgress=-1;requestRender()});
addEventListener('pagehide',()=>{active=false;if(frame){cancelAnimationFrame(frame);frame=null}});
addEventListener('pageshow',()=>{active=true;sizeCanvas();loadNearby();requestRender()});
sizeCanvas();loadNearby();requestRender();document.querySelector('#year').textContent=new Date().getFullYear();
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('header nav a').forEach(a=>a.classList.toggle('active',a.hash===`#${e.target.id}`))}}),{rootMargin:'-20% 0px -45% 0px'});document.querySelectorAll('section[id]:not(#top)').forEach(s=>sectionObserver.observe(s));
