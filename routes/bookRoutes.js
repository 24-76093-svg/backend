import * as bookcontrollers from '../controllers/bookcontrollers.js';
import express from  'express';

const bookroutes = express.Router();

bookroutes.get('/', bookcontrollers.fetchAllBookd);

export default bookroutes;