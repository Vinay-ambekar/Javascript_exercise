/* function show(){
    {
        var x=9;
        var y=10;
    }
    console.log(x,y)
}
show(); *///output is 9 ,10 because var is global scoped
/* it must show referen error when console x and y out of the block 
with out using let and const */
/* function show(){
    {
        let x=9;
        let y=10;
    }
    console.log(x,y)
}
show() *///reference error let is block scope

function show(){
    (
        function(){
            var x=9;
            var y=10;
        }
    )()
    console.log(x,y)
}
show()//reference error
