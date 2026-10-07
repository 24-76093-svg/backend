import * as bookModels from '../models/bookModels.js';

export const fetchALLBooks = async () => {
const books = await bookModels.fetch();
return books; 

 }; 