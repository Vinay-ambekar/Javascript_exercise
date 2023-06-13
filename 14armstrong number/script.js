var number=prompt('enter the number')
var temp=number;
var noofdigits=number.toString().length
var sum=0;
while(temp>0){
var digit=temp%10;
sum+=digit**noofdigits
temp=parseInt(temp/10)
}
if(sum==number){
    console.log(`${number} is an armstrong number`)
}else{
    console.log(`${number} is not a amstrong nuber`)
}
