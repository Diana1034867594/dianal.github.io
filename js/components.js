(function(){
 const body=document.body; const base=body.dataset.base||''; const current=body.dataset.current||'';
 const h=p=>base+p;
 const header=`<header class="site-header"><div class="page-shell header-inner">
 <a class="site-title" href="${h('index.html')}">Xinyu's Site</a>
 <button class="nav-toggle" type="button" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span></span><span></span><span></span></button>
 <nav class="site-nav">
 <a class="${current==='home'?'active':''}" href="${h('index.html')}">Home</a>
 <a class="${current==='about'?'active':''}" href="${h('about.html')}">About Me</a>
 <div class="nav-item"><a class="${current==='projects'?'active':''}" href="${h('projects.html')}">Projects</a><button class="submenu-toggle" type="button" aria-expanded="false">⌄</button><div class="submenu">
 <a href="${h('projects.html#game-localization')}">Game Localization</a><a href="${h('projects.html#translation-technology')}">Translation Technology</a><a href="${h('projects.html#media-localization')}">Media Localization</a><a href="${h('projects.html#translation-projects')}">Translation Projects</a></div></div>
 <a class="${current==='posts'?'active':''}" href="${h('posts.html')}">Posts</a>
 <a class="${current==='resume'?'active':''}" href="${h('resume.html')}">Resume</a>
 <a class="${current==='contact'?'active':''}" href="${h('contact.html')}">Contact Me</a>
 </nav></div></header>`;
 const footer=`<footer class="site-footer"><div class="page-shell footer-grid"><div><h2>Xinyu’s Site</h2><blockquote>“Translation is not a matter of words only; it is a matter of making intelligible a whole culture.”<cite>— Anthony Burgess</cite></blockquote></div><div class="footer-contact"><h3>Contact</h3><a href="mailto:d1034867594@gmail.com">d1034867594@gmail.com</a><a href="https://www.linkedin.com/in/xinyu-liao" target="_blank" rel="noopener noreferrer">linkedin.com/in/xinyu-liao</a></div></div></footer>`;
 const hm=document.querySelector('[data-site-header]'); const fm=document.querySelector('[data-site-footer]'); if(hm)hm.innerHTML=header;if(fm)fm.innerHTML=footer;
})();