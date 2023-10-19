const express = require("express")
const apiRoutes = require("./routes/indexR")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(apiRoutes)
app.get("/", (req,res) => {
    res.status(200).send({msg: "Welcome to challenge 4"})
})
module.exports = app 