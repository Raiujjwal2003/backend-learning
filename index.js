require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/twitter', (req, res)=>{
    res.send('ujjwalcom');
})
app.get('/login',(req, res)=>{
    res.send('<h1> Please login at that route </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})