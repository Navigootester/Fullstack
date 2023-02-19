const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const database = require('./config/database');

//Database

const db = require('./config/database')

  db.authenticate()
  .then(() => console.log('DB connected'))
  .catch(err => console.log('Error' + err))


const app = express()

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => res.send('INDEX'))


app.listen(PORT, console.log(`Server started on port ${PORT}`))
