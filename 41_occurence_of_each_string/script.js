/* writhe a javascript function to get the number of occurrences
of each letter in specified string */
function occ(str){
    var occurences={ };
   str.split("").forEach(function(elem){
        if (occurences.hasOwnProperty(elem)===false){
            occurences[elem]=1;
        }else{
            occurences[elem]++;
        }
    })
    return occurences;
}
console.log(occ("apple sdfs aaabbbccddd"))