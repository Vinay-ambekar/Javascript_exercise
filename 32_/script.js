/* how woul you check if anumber is an integer 
do not use isinteger()*/
var a=2;
var b=2.5;
console.log(Number.isInteger(a),Number.isInteger(b))//do not use isInteger

var x=12.5;
if(x%1===0){
    console.log("is a integer")
}else{
    console.log("not a integer")
}