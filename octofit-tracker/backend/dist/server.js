import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import db from './config/database.js';
const app = express();
const port = Number(process.env.PORT ?? 8000);
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-backend',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    });
});
app.get('/api', (_req, res) => {
    res.json({ message: 'OctoFit Tracker API is running.' });
});
app.listen(port, () => {
    console.log(`OctoFit Tracker API running on http://localhost:${port}`);
});
void db;
