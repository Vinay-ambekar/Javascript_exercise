let btn=document.querySelector('button')
let frnd=document.querySelector('figcaption')
let check=true;
function button(){
   if(check==true){
    /* button */
    btn.innerHTML='Remove friend'
    btn.style.backgroundColor='red'
    /* text */
    frnd.innerHTML='Frind'
    frnd.style.color='green'
    check=false
   }else{
    /* button */
    btn.innerHTML='Add friend'
    btn.style.backgroundColor='rgb(121, 219, 30)'
    /* text */
    frnd.innerHTML='Stranger'
    frnd.style.color='red'
    check=true
   }
}

