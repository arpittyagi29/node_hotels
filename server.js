// const notes=require('./notes.txt')
// const { error } = require('console');
// fs.readFile('./greeting.txt','utf8',(err,data)=>{
//     if(err){
//     console.log(err)
//     return;
//     }
//     else
//     console.log(data)
// })

// function performOperation (a,b,perform){
//     return perform(a,b);
// }
// function add(a,b){
// return a+b;
// }
// function sub(a,b){
//     return a-b;
//     }

// console.log(performOperation(10,3,sub));
// console.log("file processed")
// var age= notes.age;
// var add=notes.addnumber(1,2)
// console.log(age+ "  "+ add)



// var arr=["arpit","arpit","arpite","arpitw","arpite",1,2,1,12,2,"1"]
// var filter=_.uniq(arr)
// console.log(filter)


// const os = require('os');

// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());

// console.log("Platform:", os.platform());
// console.log("Number of CPU Cores:", os.cpus().length);
// var arr=[1,2,3,2,3,4,6,8];
// var even=function(arr){
//     let e=_.filter(arr,num=>num%2==0)
//     return _.sumBy(e)
// }
// console.log(even(arr))


// var person='{"name":"Arpit","last":"Tyagi","Age":"24"}'

// const obj=JSON.parse(person)
// console.log(typeof obj)
// const obj1=JSON.stringify(obj)
// console.log(typeof obj1)

// Old way to use get

// const data=req.body;

    // const newPerson= new Person(data);
    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //         console.log("Error while saving Person:", error)
    //         res.status(500).json({error:'Internal server error'})
    //     }
    //     else
    //     console.log("Data save successfully");
    //     res.status(200).json(savedPerson)
    // })



var _ = require('lodash');
const fs=require('fs');
const db=require('./db')

const bodyParser = require('body-parser')



const express = require('express')
const app = express()

app.use(express.json())
asd
const personRoutes=require('./Route/personRoutes')
app.use('/person',personRoutes)


const menuRoutes=require('./Route/menuRoutes')
app.use('/menu',menuRoutes)


app.get('/', function (req, res) {
   res.send('welcome to hotel')
})

app.get('/exam', function (req, res) {
    res.send('Hello World ready for exam ')
})


app.listen(3000,()=>{
    console.log("Server is listen on 3000")
})

