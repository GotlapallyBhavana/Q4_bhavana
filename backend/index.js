const express=require('express');//import the express module
const mongoose=require('mongoose');
const cors=require('cors');
const Todo=require('./model/Todo');
//const product=require('./model/product');
const app=express();
app.use(express.json());//add this line at top after app=express()
app.use(cors()); 
mongoose.connect("mongodb://localhost:27017/TodoDB",
    {useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{console.log("connect established")}
).catch(err=>console.log("Error occured",err));
app.post("/dbaddtodo",(req,res)=>{
    const newTask=new Todo({taskname:req.body.taskname});
    newTask.save();// this is like insert into table
    res.send(newTask);
});

app.get("/dbfetchtodo",async (req,res)=>{
    const tasks=await Todo.find()
    res.join(tasks);
});
app.post("/dbaddtodo",(req,res)=>{
    const newTask=new Todo({taskname:req.body.taskname});
    newTask.save();// this is like insert into table
    res.send(newTask);
    
});
app.put("/dbupdatetodo",(req,res)=>{
    res.send("db update method");
});
app.listen(5000,function(){
    console.log("port listening on 5000");
});//to run this