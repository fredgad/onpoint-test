document.addEventListener("DOMContentLoaded",()=>{let e,t,n,l,a,d=document.querySelectorAll(".pagination"),r=document.querySelectorAll(".parallaxed"),s=document.getElementById("upperline"),i=document.querySelectorAll(".anm__sml"),o=document.querySelectorAll(".anm__vsm"),u=document.getElementById("rng__rock"),f=document.querySelectorAll(".anm__big"),c=document.querySelectorAll(".anm__mid"),m=document.getElementById("slider"),v=document.getElementById("header"),y=document.getElementById("next"),p=document.documentElement.scrollHeight,h=header.offsetWidth,g=.175*h,E=!1,D=0,w=0,L=0,_=1500,x=30;function B(e){var t;e?-w>p/3-30&&(w+=p/3,D--):-w<p-p/3-30&&(w-=p/3,D++),v.style.transform=`translateY(${w}px)`,function(e){for(let e=0;e<3;e++)d[e].style.background="#fff";d[e].style.background="#f78b1f"}(D),t=D,y.style.display=0==t?"flex":"none",function(e){for(let t=0;t<r.length;t++)r[t].style.transform=`translateY(${20*-e}rem)`}(D)}function S(e){let t=(g=e.clientX?e.clientX:e.changedTouches[0].clientX)<.175*h?.175*h:g>.825*h?.825*h:g;u.style.transition="0s",s.style.transition="0s",u.style.left=`calc(${t-u.offsetWidth/2}px)`,s.style.width=t-.175*h+"px",t<.366*h?(L=0,m.style.left="0"):t>.634*h?(L=2,m.style.left="-200vw"):(L=1,m.style.left="-100vw")}function I(){0==L?(u.style.left=.175*h-u.offsetWidth/2+"px",s.style.width="0"):1==L?(u.style.left=h/2-u.offsetWidth/2+"px",s.style.width="32.5vw"):(u.style.left=.825*h-u.offsetWidth/2+"px",s.style.width="65vw"),u.style.transition=".65s",s.style.transition=".65s"}window.addEventListener("click",e=>{e.preventDefault&&e.preventDefault()}),window.addEventListener("wheel",e=>{e.preventDefault&&e.preventDefault(),e.deltaY<0&&B(!0),e.deltaY>0&&B()}),y.addEventListener("click",()=>{B()}),u.addEventListener("mousedown",e=>{e.preventDefault&&e.preventDefault(),E=!0}),header.addEventListener("mousemove",e=>{e.preventDefault&&e.preventDefault(),E&&S(e)}),u.addEventListener("mouseup",e=>{e.preventDefault&&e.preventDefault(),E=!1,I()}),header.addEventListener("mouseup",e=>{e.preventDefault&&e.preventDefault(),E=!1,I()}),header.addEventListener("touchstart",n=>{let d=n.changedTouches[0];t=(new Date).getTime(),l=d.pageX,a=d.pageY,e=0,n.preventDefault&&n.preventDefault()}),header.addEventListener("touchmove",e=>{e.preventDefault&&e.preventDefault()}),header.addEventListener("touchend",d=>{!function(d){let r=d.changedTouches[0];e=r.pageY-a,(n=(new Date).getTime()-t)<=_&&Math.abs(r.pageX-l)<=100&&(e>=x?B(!0):e<=-x&&B())}(d),I(),d.preventDefault&&d.preventDefault()}),u.addEventListener("touchmove",e=>{S(e)}),u.addEventListener("touchend",e=>{I()}),document.getElementById("rng__line").addEventListener("click",e=>{S(e),I()}),document.getElementById("rng__line").addEventListener("touchstart",e=>{S(e),I()}),function(){for(let e=0;e<4;e++)f[e].style.animation=`forBig 4s ease infinite ${e}s`,c[e].style.animation=`forMid 4s ease infinite ${e}s`,i[e].style.animation=`forSml 4s ease infinite ${e}s`,o[e].style.animation=`forSml 4s ease infinite ${e}s`}()});