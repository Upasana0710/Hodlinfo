import express from 'express'
import { PrismaClient } from '@prisma/client';
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv';
import pkg from 'pg';
import route from './route.js';
const {Client} = pkg;

const app = express();
const prisma = new PrismaClient();


const PORT = process.env.PORT || 3300;

app.use(compression());
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/',route);

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "test123",
    database: "postgres"
})

client.connect()

app.listen(PORT, ()=> {
    console.log(`Hodlinfo server is running on port ${PORT}`);
})

export default prisma;