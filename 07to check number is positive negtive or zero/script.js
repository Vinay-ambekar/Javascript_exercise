function check(){
    var data =document.getElementById("data").value
    var res=Math.sign(data)

     if(res>0){
        res = `${data} is positive number`
    }else if(res<0){
        res=`${data} is neagitve number`
    }else  {
        res="number is zero"

    }
    console.log(res)
    
    document.getElementById("res").innerText=res
}