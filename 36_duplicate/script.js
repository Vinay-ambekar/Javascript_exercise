/* make this work 
duplicate ([1,2,3,4,5]) ;[1,2,3,4,5,1,2,3,4,5]*/
var a=[1,2,3]
console.log(a.concat(a))

function duplicate(arr){
    return arr.concat(arr)
}
console.log(duplicate([1,2,3,4,5]))