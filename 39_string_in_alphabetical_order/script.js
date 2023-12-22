/* write  a javaScript function that returns a passed string with
letters in alphabetical order*/
function string(str){
    return str.split("").sort().join("")
}
console.log(string("helloworld"),string("654654bcda"))
