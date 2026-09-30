import * as bookModels from '../models/bookModels';

export const fetchALLBooks = async () => {
const books = await bookModels.fetch();
return books; 

 }; 