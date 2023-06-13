/* var number=prompt("please enter a number")
var fact=1;
if(number==0){
    console.log(`the factorial of ${number} is 1` )
}else if (number< 0){
    console.log(`the factorial of negative number is not possible`)
}else{
    for( var i=1;i<=number;i++){
        fact=fact*i 
      //  console.log(fact)
    }
    console.log(`the factorial of ${number} is ${fact}`)
} */
/* using recursion
the process in which a function calls itself directly or indorectly is called recursion and the corresponding function 
is called as recursive fucntion.
*/
var number=prompt("please enter a number")
var fact=1;
function factr(n){
    if(n>number){
        return;
    }
    var tmp=fact
    fact=fact*n;
  // console.log(tmp +' x '+ n +' = '+fact)
    n++;
    factr(n) 
}
factr(1)
console.log(`the factorial of ${number} is ${fact}`)