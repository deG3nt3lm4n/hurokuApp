const dotenv = require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

// middleware
app.use(cors())
app.use(express.json())

app.use('/api/', (_,res) => {
  res.json({data: 'api is counted for'})
})

app.listen(port, () => {
  console.log(`server is listen on ${port}`)
})


console.log(process.env.PORT)