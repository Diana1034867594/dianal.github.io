const navToggle=document.querySelector(".nav-toggle");
const siteNav=document.querySelector(".site-nav");
if(navToggle&&siteNav){
  navToggle.addEventListener("click",()=>{
    const isOpen=siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded",String(isOpen));
  });
}
const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  },{threshold:.14});
  revealItems.forEach(item=>observer.observe(item));
}else{
  revealItems.forEach(item=>item.classList.add("is-visible"));
}
