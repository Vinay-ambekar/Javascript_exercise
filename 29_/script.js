/*  given a string, reves each word in the string*/
var str="aras ahaj es ahhca naatsudnih armamah"
var sdr=str.split(" ")
.map(function(word){
    return word.split("").reverse().join("")
})
console.log(sdr.toString())

var firstname= "yaniv  ujnas";
var newname=firstname.split(" ")
.map(function(word){
    return word.split("").reverse().join("")
}) 
console.log(newname.toString())