import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';
import { activities, leaderboard, teams, users, workouts } from '../data/mockData.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await LeaderboardEntry.deleteMany({});
    await Workout.deleteMany({});

    await User.insertMany(users);
    await Team.insertMany(teams);
    await Activity.insertMany(activities);
    await LeaderboardEntry.insertMany(leaderboard);
    await Workout.insertMany(workouts);

    console.log('Database seeding complete');
    console.log(`Inserted ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${leaderboard.length} leaderboard entries, and ${workouts.length} workouts.`);
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

void seedDatabase();
