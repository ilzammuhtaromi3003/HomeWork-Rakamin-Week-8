const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index.js')

app.use(router);

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})