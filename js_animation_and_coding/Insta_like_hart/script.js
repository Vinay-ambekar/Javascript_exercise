let img=document.querySelector('img')
let i=document.querySelector('i')
i.style.opacity=0;
/* console.log(img,i) */


img.addEventListener('dblclick',function(){
    
   i.style.cssText=`
   transform: translate(-50%, -50%) scale(6);
   opacity:0.8
   `
   setTimeout(function(){
    i.style.cssText=`
   transform: translate(-50%, -50%) scale(6);
   opacity:0
   `
   },3000)
   
    
})

