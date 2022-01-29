const express = require('express')
const mongoose = require('mongoose')
const path = require("path")
const bodyParser = require('body-parser')
const app = express()
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/newdb');
}
const contactSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    somethingabout:String
})
const contact = mongoose.model("contact",contactSchema)
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"))
})
app.get("/contact.html", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"))
})
app.get("/blog.html", (req, res) => {
    res.sendFile(path.join(__dirname, "blog.html"))
})
app.post("/",(req,res)=>{
    const body = req.body;
    const newperson = new contact({
        name:body.name,
        age:body.age,
        email:body.email,
        somethingabout:body.about
    });
    newperson.save();
    res.send(`<h1>Thanks for posting </h1>`)
})
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})