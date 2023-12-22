/* writ a javascript function that accepts a string
as a parameter and converts the first letter of each 
word of the string in upper  casse */
function string(str){
 return   str.split(" ").map(function (word){
       return word.charAt(0).toUpperCase()+word.substring(1)
    }).join(" ");
}
console.log(string("hello world how are you hi"),string("how are you doing"))