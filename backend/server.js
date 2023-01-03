const http=require("http");
const express=require("express")
const mongoose = require("mongoose");
const Phone=require("./models/phone.model")
const cors=require('cors');

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/phonedb")
.then(()=>{
    console.log('Successfully Connected to Database')
}).catch( error =>{
    console.error("Error :",error.message)
})



const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.post("/",async (req,res)=>{ //endpoint
    const newPhone=req.body;
    try {
        const result =await Phone.create(newPhone);
        await result.save()
        res.json(result)
    } catch (error) {
        res.json({error:error.message})
    }
})

app.get('/',async (req,res)=>{
    try {
        const result =await Phone.find();
        res.json(result)
    } catch (error) {
        res.json({error:error.message})
    }
   
})

app.put('/:id',async (req,res)=>{
    const id=req.params.id;
    const newPhone = req.body;
    try {
        const result =await Phone.findByIdAndUpdate(id,newPhone);
        res.json(result)
    } catch (error) {
        res.json({error:error.message})
    }
})

app.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    try {
        const result =await Phone.findByIdAndRemove(id);
        res.json(result)
    } catch (error) {
        res.json({error:error.message})
    }
})

const server = http.createServer(app);

server.listen(3030,()=>{
    console.log("Server Listening on http://localhost:3030")
})