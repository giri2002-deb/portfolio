const styleswiTo=document.querySelector(".style-switcher-toggler");
styleswiTo.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alte=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alte.forEach((style)=> {
      if(color==style.getAttribute("title")){

style.removeAttribute("disabled");
      }  
      else{
        style.setAttribute("disabled","true");
      }
    })
  }
 /**typing */
 var typed=new Typed(".typing",{
  strings:[" ","Freelance","Web Devloper","Java Developer","Backend Devloper"],
  typeSpeed:100,BackSpeed:60,
  loop:true
})

 /**typing */
 var typed=new Typed(".about .about-text h3 .typing",{
  strings:[" ","Freelance","Web Devloper","Backend Devloper"],
  typeSpeed:100,BackSpeed:60,
  loop:true
})
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
if(document.body.classList.contains("dark")){
dayNight.querySelector("i").classList.add("fa-sun");
}
else{
dayNight.querySelector("i").classList.add("fa-moon");
}
})
const nav=document.querySelector(".nav"),navList=nav.querySelectorAll("li"),totalNavList=navList.length,
allsection=document.querySelectorAll(".section"),totalsection=allsection.length;



for(let i=0;i<totalNavList;i++){
const a= navList[i].querySelector("a");

a.addEventListener("click",function(){
removeBacksection();
for(let j=0;j<totalNavList;j++){
 if(navList[j].querySelector("a").classList.contains("active")){
    
allsection[j].classList.add("back-section");
 }
 navList[j].querySelector("a").classList.remove("active");
}
this.classList.add("active");
show(this);
if(window.innerWidth<1200){
 asideSectionTogglerBtn();
}


}
)
}
function show(element){
 for(let i=0;i<totalsection;i++){
     allsection[i].classList.remove("active");
 }
 const target=element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active");
}
function removeBacksection(){
for(let i=0;i<totalsection;i++){
 allsection[i].classList.remove("back-section");
}
}
function updateNav(element){
for(let i=0;i<totalNavList;i++){
 navList[i].querySelector("a").classList.remove("active");
 const target=element.getAttribute("href").split("#")[1];
 if(target==navList[i].querySelector("a").getAttribute("href").split("#")[1]){
     navList[i].querySelector("a").classList.add("active");   
 }
}
}
document.querySelector(".hire-me").addEventListener("click",function(){
 const sectioinde=this.getAttribute("data-section-index");
 removeBacksection();
 show(this);
 updateNav(this);
})
const navToggler=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navToggler.addEventListener("click",()=>{
 asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
 aside.classList.toggle("open");
 navToggler.classList.toggle("open");
 for(let i=0;i<totalsection;i++){
     allsection[i].classList.toggle("open");
 }
}





