const express = require('express')
const { loadConfig } = require('./utils/config/config-utils')

const app = express()
const port = 8080

app.locals.config = loadConfig()
console.log(app.locals)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
