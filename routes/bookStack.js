const express = require('express')
const router = express.Router()

const bookCatalog = require('../model/bookCatalog',serverSelectionTimeoutMS=20000)

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
router.get('/:id', getBookDetailes, (req,res) =>{
    res.json(res.book.title)
})

// Creating a book
router.post('/', async (req,res) =>{
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

// Updating a book
router.patch('/:id', getBookDetailes,async (req,res) =>{
    if(req.body.title != null){
        res.book.title = req.body.title
    }
        
    try{
        const updatedDetail = await res.book.save()
        res.json(updatedDetail)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// Deleting a book

router.delete('/:id', getBookDetailes,async (req,res) =>{
    try{
        await res.book.deleteOne()
        res.json({message: "Deleted successfully!"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
        
})

async function getBookDetailes(req, res, next) {

    let book;
    
    try{
    book = await bookCatalog.findById(req.params.id)
    if (book == null){
    return res.status(404).json({message: 'Cannot find Book Details'})
    }
    }catch(err){
    return res.status(500).json({message: err.message})
    }
    
    res.book = book
    next()
    
}
    

module.exports = router;