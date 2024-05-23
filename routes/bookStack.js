const express = require('express')
const router = express.Router()

// Display the all the books details
router.get('/', (req,res) =>{
    console.log("Hello World")
})

// Getting one book by id
// router.get('/:id', (req,res) =>{

// }

// Creating a book
// router.post('/', (req,res) =>{

// }

// Updating a book
// router.patch('/', (req,res) =>{

// }
// Put updates all info where patch updates only 1 parameter
// Deleting a book

// router.delete('/', (req,res) =>{

// }

module.exports = router;