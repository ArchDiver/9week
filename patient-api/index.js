const express = require('express');

// Body Parser import
const bodyparser = require('body-parser');

const app = express();

require('dotenv').config()

// Express Middleware
app.use(bodyparser.urlencoded({ extended: false})) // Adding support for Form Vals
app.use(bodyparser.json({ extended: false})) // adding support for JSON vals
app.use(bodyparser.raw({ extended: false})) // adding support for raw text vals

//Import for all API routes: TODO
const patientsRoute = require('./routes/patients')

//Using route imports as Middleware: TODO
app.use('/', patientsRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is up at port ${port}`))