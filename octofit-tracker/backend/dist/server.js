import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import db from './config/database.js';
import { activities as fallbackActivities, leaderboard as fallbackLeaderboard, teams as fallbackTeams, users as fallbackUsers, workouts as fallbackWorkouts } from './data/mockData.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';
const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${port}`;
app.use(cors());
app.use(express.json());
const readCollection = async (query, fallback) => {
    try {
        const data = await query();
        return Array.isArray(data) && data.length > 0 ? data : fallback;
    }
    catch {
        return fallback;
    }
};
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-backend',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        url: baseUrl,
    });
});
app.get('/api', (_req, res) => {
    res.json({
        message: 'OctoFit Tracker API is running.',
        baseUrl,
        routes: ['/api/users', '/api/teams', '/api/activities', '/api/leaderboard', '/api/workouts'],
    });
});
app.get('/api/users', async (_req, res) => {
    const users = await readCollection(() => User.find({}).lean(), fallbackUsers);
    res.json(users);
});
app.get('/api/teams', async (_req, res) => {
    const teams = await readCollection(() => Team.find({}).lean(), fallbackTeams);
    res.json(teams);
});
app.get('/api/activities', async (_req, res) => {
    const activities = await readCollection(() => Activity.find({}).lean(), fallbackActivities);
    res.json(activities);
});
app.get('/api/leaderboard', async (_req, res) => {
    const leaderboard = await readCollection(() => LeaderboardEntry.find({}).sort({ rank: 1 }).lean(), fallbackLeaderboard);
    res.json(leaderboard);
});
app.get('/api/workouts', async (_req, res) => {
    const workouts = await readCollection(() => Workout.find({}).lean(), fallbackWorkouts);
    res.json(workouts);
});
app.listen(port, () => {
    console.log(`OctoFit Tracker API running on ${baseUrl}`);
});
void db;
