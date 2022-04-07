const express = require('express')
const path = require('path')


const port = process.env.PORT || 3000
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')


app.use(express.static(publicDirectoryPath))

app.listen(3000, ()=>{
    console.log(`Server is up on port ${port}`)
})