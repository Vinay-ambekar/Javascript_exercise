/* looop an array and add all members of it */
let arr=[1,2,3,4,5,6,7,8]
let sum=0;

arr.forEach(function(elem){
     sum=sum+elem;
})
console.log(sum)
/* adding numbers with objects */
let rr=["ljs",121,"ksldj",313,"lkjsdlj"]
let sm=0
rr.forEach(function(el){
    if(typeof el === 'number'){
        sm=sm+el
    }
})
console.log(sm)