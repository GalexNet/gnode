const express = require('express')
const si = require('systeminformation')
const { loadConfig } = require('./utils/config/config-utils')

const app = express()
const port = 8080

app.locals.config = loadConfig()

app.get('/', (req, res) => {
  si.cpu().then(data => {
    res.json(data)
  })
})

app.listen(port, () => {
  console.log(`\ngnode is listening on port ${port}`)
})
