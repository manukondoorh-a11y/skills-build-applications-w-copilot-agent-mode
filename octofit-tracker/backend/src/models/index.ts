import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
  },
  { collection: 'users' },
);

const teamSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    captain: { type: String, required: true },
    members: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
  },
  { collection: 'teams' },
);

const activitySchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: { type: Number },
    sets: { type: Number },
    date: { type: String, required: true },
    calories: { type: Number, required: true },
  },
  { collection: 'activities' },
);

const leaderboardEntrySchema = new Schema(
  {
    rank: { type: Number, required: true },
    name: { type: String, required: true },
    points: { type: Number, required: true },
    team: { type: String, required: true },
  },
  { collection: 'leaderboard' },
);

const workoutSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    focus: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
  },
  { collection: 'workouts' },
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export const LeaderboardEntry =
  mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
