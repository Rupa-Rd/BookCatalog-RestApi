const express = require('express')
const router = express.Router()

const bookCatalog = require('../model/bookCatalog')

// Display the all the books details
router.get('/', async (req,res) =>{
    try{

        const bookDetails = await bookCatalog.find()
        res.json(bookDetails)
    }catch(err){
        
        res.status(500).json({message: err.message})
        
    }
})

// Getting one book by id
router.get('/:id', async (req,res) =>{
    const books = new bookCatalog({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        addedDate: req.body.addedDate
    })
        
    try{
        const newBookDetails = await books.save()
        res.status(201).json(newBookDetails)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

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