require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.connect(process.env.DATABASE_URL)
app.listen(3000, ()=> console.log("Server started successfully!"))
app.use(express.json())

// Routes
const bookstack = require('./routes/bookStack')
app.use('/bookStack',bookstack)

// Model Schema
// const bookCatalog = require('./model/bookCatalog')




