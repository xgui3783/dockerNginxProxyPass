const express = require('express')
const app = express()

app.get('*', (req, res) => {
  console.log(req.originalUrl)
  res.status(200).send('OK')
})

app.listen(80, () => console.log('node server listening'))