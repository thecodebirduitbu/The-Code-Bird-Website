import express from 'express';
import mongoose from 'mongoose';
const app = express()
const PORT = process.env.PORT || 8000; 

// Middleware to parse incoming JSON data
app.use(express.json());
