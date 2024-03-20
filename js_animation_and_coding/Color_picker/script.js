let body=document.querySelector('body');
let div=document.querySelectorAll('.container div');
let color=['red', 'green','yellow','orange']
/* console.log(color)
div[0].addEventListener('click',()=>{
    body.style.backgroundColor='red'
})
div[1].addEventListener('click',()=>{
    body.style.backgroundColor='green'
})
div[2].addEventListener('click',()=>{
    body.style.backgroundColor='yellow'
})
div[3].addEventListener('click',()=>{
    body.style.backgroundColor='orange'
}) */
for(let i=0;(i<div.length && i<color.length);i++){
    div[i].addEventListener('click',()=>{
        body.style.backgroundColor=`${color[i]}`
    })
}