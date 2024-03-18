let data=[
    {id:1,name:'sunil',email:'sunil@gmail.com'},
    {id:2,name:'ajay',email:'ajay@gmail.com'}
]
//console.log("data",data.length)
function readAll(){//adding table, conversion of object to json and json to object
    let tabledata=document.querySelector('.data_table')
    let objectdata= data;
   console.log(objectdata)
    let elements='';
    objectdata.map((record, ind) => {
        elements += `<tr scope="row">
        <td key={ind}>${ind + 1}</td>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td> 
        <button onclick={edit(${record.id})}>Edit</button>
        <button onclick={delet(${record.id})}>Delete</button>
        </td>
        </tr>`
    })
    tabledata.innerHTML=elements;
}
function add(){//on click add button display the creat form and disapear add button
document.querySelector('form').style.display='block';
document.querySelector('.name').value = '';
document.querySelector('.email').value = '';
document.querySelector('#add').style.display='none';
}
function creat(){//on clikc creat button the value of name and email going to store in table 
let name=document.querySelector('.name').value
let email=document.querySelector('.email').value
let id=data.length + 1
// let newobj={id:3, name:name,email:email}
let newobj={id:id,name:name,email:email}
console.log("newobj",newobj)
data.push(newobj)

document.querySelector('form').style.display='none';
document.querySelector('#add').style.display='block';
readAll()
}
function edit(id){//on click the edit button we get update form with value of user name and user email 
    document.querySelector('.update_form').style.display='block';
    let obj=data.find(rec=>rec.id===id);
    document.querySelector('.uname').value=obj.name;
    document.querySelector('.uemail').value=obj.email;
    document.querySelector('.id').value=obj.id
}
/* after clicking edit we get update form after update we clik the update form it is going to update  */
function update() {
    let id = parseInt(document.querySelector('.id').value);
    let name = document.querySelector('.uname').value;
    let email = document.querySelector('.uemail').value;
    let objIndex = data.findIndex(rec => rec.id === id);
    data[objIndex] = { id, name, email };
    document.querySelector('.update_form').style.display = 'none';
    readAll();
}
/* delet element */
function delet(id){
    data=data.filter(rec => rec.id !== id)
    readAll()
}
