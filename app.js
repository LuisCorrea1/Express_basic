//Import express module
const express = require('express')
//Express App
const app = express()
//Define a port for the app
const port = 3000

//Inital path, url localhost:3000
app.get('/',(req,res) => {
    res.send("Hello Explorers!")
})

//url localhost:3000/launchx
app.get('/launchx',(req,res) => {
    res.send("Welcome to LaunchX!")
})

//Initialize app
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})