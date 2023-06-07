import express from 'express'
import {getFromApi,getPostedData, search} from './controller.js';

const router = express.Router();

router.get('/',getFromApi);
router.get('/check',getPostedData);
router.get('/search', search);

export default router;
