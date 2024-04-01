var prompt = require('prompt-sync')();
const name=prompt("Enter name ");
var arr=["Arpit","Arpit1","Arpit2","Arpit3","Arpit4"]
if(arr.includes(name))
    console.log(`welcome ${name}`)
    else
    console.log("your name not in list"); 

