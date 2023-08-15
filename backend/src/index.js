const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all projects
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM projects", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one project
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM projects WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the project
app.post('/api/create', (req,res)=> {

const date = req.body.date;
const title = req.body.title;
const text = req.body.text;

db.query("INSERT INTO projects (title, text, date) VALUES (?,?,?)",[title,text,date], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a project
app.post('/api/like/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE project SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a project

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM projects WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
})
