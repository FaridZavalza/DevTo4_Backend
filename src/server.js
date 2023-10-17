const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/", (req,res) => {
    res.status(200).send({msg: "Welcome to challenge 4"})
})
module.exports = app 