const express = require("express");
const path = require("path")
const hbs  = require("hbs")
const collection = require("./mongo")
const app = express();



app.use(express.json())
app.set("view engine", "hbs")
app.set("views")
app.use(express.urlencoded({extended:false}))
app.get('/', (req,res) => {
    res.render("index")
})

app.get('/signup', (req,res) => {
    res.render("signup")
})

app.post('/signup', async(req,res) => {
    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("home")
})

app.post('/index', async(req,res) => {

    try {
        const check = await collection.findOne({name:req.body.name})

        if(check.password === req.body.password)
        {
            res.render("home")
        }else{
            res.send("Wrong Password")
        }

    } catch {
        res.send("Wrong Details")
    }
    
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running on PORT 3000")
})
