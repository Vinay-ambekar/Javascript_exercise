var arr=[
    {dp:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    story:'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww'},
    {dp:'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww',
    story:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D'},
    {
        dp:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1487613758092-1e1d1587fb15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1484588168347-9d835bb09939?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1484712401471-05c7215830eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1493136289900-28660d718589?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1531500316084-9dc9360c37d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
    },
    {
        dp:'https://images.unsplash.com/photo-1546877625-cb8c71916608?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNjc2OTI5fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1543721482-bc95ff1f1dea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzNjc2OTI5fHxlbnwwfHx8fHw%3D'
    },

]
var storiyan=document.querySelector('.sotoriya')

var clutter=''
arr.forEach(function(elem,index){
   clutter+=`<div class="story">
   <img id='${index}' src="${elem.dp}" alt="#">
</div>`
})
//console.log(clutter)
storiyan.innerHTML=clutter
storiyan.addEventListener('click',function(dets){
   /*  var value=arr[dets.target.id].story */
   document.querySelector('.full-screen').style.display='block'
   document.querySelector('.full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`
   setTimeout(function(){
    document.querySelector('.full-screen').style.display='none'
   },3000)

})