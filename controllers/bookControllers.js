import * as bookService from '../services/bookService';

export const fetchALLBooks = async (req, res) => {
    const books = await bookService.fetchALLBooks();
    res.status(200).json(books); 

 }; 