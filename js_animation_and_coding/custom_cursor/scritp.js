let main=document.querySelector('.container')
let crsr=document.querySelector('.corsur')
main.addEventListener('mousemove',(dets)=>{
    crsr.style.cssText=`left:${dets.x}px;
    top:${dets.y}px`
})