const express = require('express')
const app = express()
const port = process.env.PORT || 4000

let nedbAdapter = require('./lib/data')

app.use(require('body-parser').json())

app.use('/', require('./routes'))

nedbAdapter.init()
  .then(() => app.listen(port, () => console.log(`Local data server listening at http://localhost:${port}`)))
  .catch(error => console.log('Error trying to initialize local-data-server: ', error))
