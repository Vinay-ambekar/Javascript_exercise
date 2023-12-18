/*  how to check if an object is an array or not*/
function checkArray(elem){
console.log(Array.isArray(elem))
}
checkArray([])
checkArray({})

function checkarray(e){
    return Array.isArray(e)
}
console.log(checkarray([]),checkarray({}))