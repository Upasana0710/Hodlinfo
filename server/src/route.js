import express from 'express'
import {getFromApi,getPostedData} from './controller.js';

const router = express.Router();

router.get('/',getFromApi);
router.get('/check',getPostedData);

export default router;
