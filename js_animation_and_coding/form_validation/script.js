let inputs=document.querySelectorAll('input')//all input fields
let spans=document.querySelectorAll('span')// all span fiels
/* message for empyt field and pattrens */
let validation=[
    {msg1:'User Name is required'}, 
    {msg1:'Email is required',  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
    {msg1:'Password is required',pattern:/^[a-zA-Z0-9!@#$%]{5,10}$/},
    {msg1:'Confirm Password is required'} 
]
/* clik event listener for submit button */
document.querySelector('button').addEventListener('click',function(event){
event.preventDefault()
let inp2Val=inputs[2].value.trim();
 inputs.forEach(function(input,index){/* Iterating the input elements with index */
    let value = input.value.trim();
    if (value === '') {//if the input field is empty
        setInvalid(input, index, validation[index].msg1);
    } else if (index === 0) {
        if (value.length < 5) {
            setInvalid(input, index, 'User Name must be at least greater than 5 characters');
        } else if (value.length > 10) {
            setInvalid(input, index, 'User Name must be less than 10 characters');
        } else if (!/^[^0-9]+$/.test(value)) {
            setInvalid(input, index, 'Please do not enter numbers');
        } else {
            setValid(input,index);
        }
    } else if ( index === 1){
        if (!validation[index].pattern.test(value)){
            setInvalid(input, index,'This is not a valid email address');
        }else {
            setValid(input,index);
        }
    } else if( index === 2){
        if (value.length < 5) {
            setInvalid(input, index, 'Password must be at least greater than 5 characters');
        } else if (value.length > 10) {
            setInvalid(input, index, 'password must be less than 10 characters');
        } else if (!validation[index].pattern.test(value)) {
            setInvalid(input, index, 'Please enter proper password');
        } else {
            setValid(input,index);
        }
    } else if(index === 3){
        if( inp2Val === value ){
            setValid(input,index);
        }else{
            setInvalid(input, index, 'Confirm Password is wrong')
        }
    }  
})
function setInvalid(input, index, message) {
    input.style.borderColor = 'red';
    spans[index].textContent = message;
}
function setValid(input, index) {
    input.style.borderColor = '#06c46c';
    spans[index].textContent = '';
}
}) 