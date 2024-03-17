const words='Vinay from Chitradruga';
const ANIMATION_DURATION=4000;
const characters=words.split('').forEach((char,i)=>{
  function createElement(offset){
    const div=document.createElement('div');
    div.innerText=char;
    div.classList.add("character");
div.style.animationDelay=`-${i*(ANIMATION_DURATION/16)-offset}ms`;
    return div;
  }
  document.getElementById('spirale').append(createElement(0));
  document.getElementById('spirale1').append(createElement(-1*(ANIMATION_DURATION/2)))
  document.getElementById('spirale2').append(createElement(-1*(ANIMATION_DURATION/5)))
});