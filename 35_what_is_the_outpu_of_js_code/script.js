/*  what is the outp of a*/
function sum(){
    return 2+2;
}
function sq(){
    return 4*4
}
let a=(sum(),sq());
console.log(a);//a is 16
/* it evaluate from left to right by usin com ',' 
first it exicut sum() and then sq() it show the last value which is exicute
 */