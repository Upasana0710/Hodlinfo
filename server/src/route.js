import express from 'express'
import {getFromApi,getPostedData, search} from './controller.js';

const router = express.Router();

router.get('/search', search);
router.get('/create',getFromApi);
router.get('/check',getPostedData);

export default router;
