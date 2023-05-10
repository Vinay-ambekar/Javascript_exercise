/* right angle triangle
var base=prompt("please enter the base value")
var height=prompt("please enter the height value")
var area=(base*height)/2
console.log(`Base:${base} height:${height} area:${area}`) */

//To fined area of regular triangle,a,b,c thre side of traingle
const a= 10;
const b=5;
const c=10
const s=(a+b+c)/2
const temp=s*(s-a)*(s-b)*(s-c)
const area1=Math.sqrt(temp)

console.log(s)
console.log(temp)
console.log(`area of triangle ${area1}`)