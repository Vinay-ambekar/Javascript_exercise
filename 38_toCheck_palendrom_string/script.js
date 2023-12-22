/* to check whether the given string is palendromic are not */
function string(str){
    var reversed=str.split("").reverse().join("");
    if(reversed===str){
        return true;
    }else{
        return false;
    }
}
console.log(string("vinay"),string("lool"))