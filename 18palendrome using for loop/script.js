var string=prompt('please enter a stirng')
var len=string.length;
var msg='it is palindrome'
for(var i=0;i<len/2;i++){
    if(string[i] != string[len-1-i]){
       msg='is not a panlendrom'
    }
}
console.log(msg)