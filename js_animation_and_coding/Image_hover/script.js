



let elems = document.querySelectorAll('.elem');

elems.forEach(function(elem) {
    let childNode = elem.childNodes[3];
    
    elem.addEventListener('mouseenter', () => {
        childNode.style.opacity = 1;
    });

    elem.addEventListener('mouseleave', () => {
        childNode.style.opacity = 0;
    });

    elem.addEventListener('mousemove', (event) => {
        let boundingRect = elem.getBoundingClientRect();
        let offsetX = event.clientX - boundingRect.left;
       /*  let offsetY = event.clientY - boundingRect.top; */

        childNode.style.left = offsetX + 'px';
       /*  childNode.style.top = offsetY + 'px'; */
    });
});

/* elem.forEach(function(val){
   

val.addEventListener('mouseenter',()=>{
val.childNodes[3].style.opacity=1
 
})
val.addEventListener('mouseleave',()=>{
    val.childNodes[3].style.opacity=0
})

val.addEventListener('mousemove',(dets)=>{
val.childNodes[3].style.left=dets.x+'px'
val.childNodes[3].style.top=dets.y+'px'
})
    
})
 */


/* elem.addEventListener('mousemove',(dets)=>{
elemimage.style.left=dets.x+'px'
elemimage.style.top=dets.y+'px'
})
elem.addEventListener('mouseenter',()=>{
    elemimage.style.opacity=1
})
elem.addEventListener('mouseleave',()=>{
    elemimage.style.opacity=0
}) */
    