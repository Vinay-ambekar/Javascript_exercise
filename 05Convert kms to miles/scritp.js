function convert(){
    var kms =document.getElementById('data').value;
   
    const factor=0.621371;
    var miles=kms*factor
    console.log(miles)
   /*  document.getElementById('result').innerText=miles  */
   document.getElementById('result').innerText=`${miles} miles` 
}