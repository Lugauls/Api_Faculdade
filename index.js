const express = require('express')
const app = express();
require('dotenv').config()
const routes = require('./routes/routes')

app.use (express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/', routes)

app.listen(process.env.PORT_NODE, () => {console.log (`App rodando na porta ${process.env.PORT_NODE}`)})  
