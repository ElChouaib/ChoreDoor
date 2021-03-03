//imports 

const express = require('express')
const app = express()
const port = 3000






// Listen on port 3000
app.listen(port, ()=> console.info('Listening on port '+port))