// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

// Register an ifEquals helper for index to use
const Handlebars = require("handlebars")
Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
})

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const rubbish = generateRubbish(options)
  res.render('index', { rubbish: rubbish, options: options })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on localhost:${port}.`)
})