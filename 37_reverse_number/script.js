/* reerse the number */
function reerse(num){
   return Number(num.toString().split("").reverse().join(""))
}
console.log(reerse(123546))
/* by using logic */

function revs(numb){
    var rev=0;

    while(numb>0){
        var rem=numb%10
        rev=rev*10+rem
        numb=Math.floor(numb/10)
    }
    return rev
}
console.log(revs(123546))