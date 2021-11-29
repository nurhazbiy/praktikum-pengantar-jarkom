const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World 12345')
})

app.listen(3000)