import { readFileSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const dist=resolve(root,'dist');
let html=readFileSync(resolve(dist,'index.html'),'utf8');
for(const [source,kind] of [['style.css','style'],['app.js','app']]){
 const content=readFileSync(resolve(dist,source));
 const hash=createHash('sha256').update(content).digest('hex').slice(0,12);
 const ext=source.split('.').at(-1),name=`${kind}.${hash}.${ext}`;
 for(const old of readdirSync(resolve(dist,'assets'))){
  if(new RegExp(`^${kind}\\.[a-f0-9]{12}\\.${ext}$`).test(old)&&old!==name)unlinkSync(resolve(dist,'assets',old));
 }
 writeFileSync(resolve(dist,'assets',name),content);
 const expression=kind==='style'?/href="(?:style\.css|assets\/style\.[a-f0-9]{12}\.css)(?:\?[^" ]*)?"/:/src="(?:app\.js|assets\/app\.[a-f0-9]{12}\.js)(?:\?[^" ]*)?"/;
 html=html.replace(expression,`${kind==='style'?'href':'src'}="assets/${name}"`);
}
writeFileSync(resolve(dist,'index.html'),html);
console.log('Versioned CSS and JavaScript for consistent browser cache updates.');
