const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use('/', require('./routes'))

app.listen(port, () => console.log(`Local data server listening at http://localhost:${port}`))
