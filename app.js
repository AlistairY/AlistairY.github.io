(() => {
  'use strict';
  const {ui, areas, projects} = window.SITE_CONTENT;
  const dialog = document.getElementById('detail-dialog');
  const content = document.getElementById('detail-content');
  const list = document.getElementById('project-list');
  let filter = 'all';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  document.querySelectorAll('[data-copy]').forEach(el => {
    const value=ui[el.dataset.copy];
    if(typeof value==='string')el.textContent=value;
  });
  document.querySelectorAll('[data-copy-html]').forEach(el => {el.innerHTML=ui[el.dataset.copyHtml];});
  const linksHTML = p => (p.links||[]).map(link=>`<a class="paper-link" href="${escape(link.url)}" target="_blank" rel="noopener">${escape(link.label)}</a>`).join('');
  function renderProjects(){
    const visible=projects.filter(p=>filter==='all'||p.category===filter);
    list.innerHTML=visible.map(p=>`<article class="project-row"><button class="project-image-button${p.paperFigure?' paper-figure':''}" type="button" data-project="${p.id}" aria-label="${escape(ui.read+': '+p.title)}"><img src="assets/${p.image}" alt="${p.paperFigure?escape('Figure 1 — '+p.title):''}" width="300" height="200" loading="lazy"></button><div><p class="project-meta">${escape(p.meta)}</p><h3><button type="button" class="title-button" data-project="${p.id}">${escape(p.title)}</button></h3><p class="project-description">${escape(p.description)}</p><div class="project-actions"><button type="button" class="text-button" data-project="${p.id}">${escape(ui.read)}</button>${linksHTML(p)}<span class="project-status">${escape(p.status||ui.status)}</span></div></div></article>`).join('');
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
    document.getElementById('filter-status').textContent=`${visible.length} research projects shown`;
  }
  function showProject(id){
    const p=projects.find(p=>p.id===id);
    if(!p)return;
    document.getElementById('dialog-label').textContent=ui.detailLabel;
    const sections=p.sections||[
      {heading:ui.questionHeading,text:p.question},
      {heading:ui.approachHeading,text:p.approach},
      {heading:ui.evidenceHeading,text:p.evidence},
      {heading:ui.boundaryHeading,text:p.boundary}
    ];
    content.innerHTML=`<div class="detail-tag">${escape(p.meta)}</div><h2 id="detail-title">${escape(p.title)}</h2><div class="project-actions">${linksHTML(p)}<span class="project-status">${escape(p.status||ui.status)}</span></div>${sections.map(section=>`<h3>${escape(section.heading)}</h3><p>${escape(section.text)}</p>`).join('')}<figure class="detail-figure"><a href="assets/${p.figure||p.image}" target="_blank" rel="noopener" aria-label="Open full image"><img src="assets/${p.figure||p.image}" alt="${escape(p.caption)}"></a><figcaption>${escape(p.caption)}</figcaption></figure>`;
    dialog.showModal();
    dialog.scrollTop=0;
    document.body.style.overflow='hidden';
  }
  document.getElementById('research-grid').innerHTML=areas.map(a=>`<article class="research-area"><span class="area-label">${escape(a.label)}</span><h3>${escape(a.title)}</h3><p>${escape(a.text)}</p><a href="#projects" data-area="${a.filter}">${escape(ui.showProjects)}</a></article>`).join('');
  document.addEventListener('click',e=>{
    const project=e.target.closest('[data-project]');
    const f=e.target.closest('[data-filter]');
    const area=e.target.closest('[data-area]');
    if(project)showProject(project.dataset.project);
    if(f){filter=f.dataset.filter;renderProjects();}
    if(area){e.preventDefault();filter=area.dataset.area;renderProjects();document.getElementById('projects').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
  });
  document.getElementById('copy-email').addEventListener('click',async()=>{
    const local=['yang','leqian'].join('');
    const domain=['mail','ustc','edu','cn'].join('.');
    try{
      await navigator.clipboard.writeText(local+String.fromCharCode(64)+domain);
      document.getElementById('copy-status').textContent=ui.copiedEmail;
    }catch{
      document.getElementById('copy-status').textContent=ui.copyFallback;
    }
  });
  document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';});
  const sections=[...document.querySelectorAll('main section[id]')];
  const links=[...document.querySelectorAll('nav a[href^="#"]')];
  function updateNav(){let current='about';for(const s of sections)if(s.getBoundingClientRect().top<=155)current=s.id;links.forEach(a=>{const active=a.hash==='#'+current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
  window.addEventListener('scroll',updateNav,{passive:true});
  renderProjects();updateNav();
})();
