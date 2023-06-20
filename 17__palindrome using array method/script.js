//using split method : splits a string and returns and array
var string=prompt('please enter a string')
var stringArray=string.split('')
console.log(stringArray)
var stringArrayRev=stringArray.reverse();
console.log(stringArrayRev)
var revstring=stringArrayRev.join('')
console.log(revstring)
if(string===revstring){
    console.log(`${string} is palendrome`)

}else{
    console.log(`${string} is not a palendrome`)
}