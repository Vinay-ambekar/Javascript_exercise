 check =(p,q,r)=>{
    if(p>=q && p>=r){
        return p;
    }else if(q>=p && q>=r){
         return q;
    }else{
        return r;
    }
   
 }
var a=prompt('enter the number')
var b=prompt('enter the number')
var c=prompt('enter the number')
var x= Math.max(a,b,c)
console.log(`largest number is => ${x}`)
let y=check(a,b,c)
console.log(`largest number is ${y}`)