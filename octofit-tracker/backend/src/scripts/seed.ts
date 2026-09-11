import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        username: 'alex.runner',
        email: 'alex.runner@example.com',
        profile: 'Distance runner training for a spring half marathon.',
        points: 420,
      },
      {
        username: 'jamie.lifts',
        email: 'jamie.lifts@example.com',
        profile: 'Strength enthusiast focused on consistent compound lifts.',
        points: 365,
      },
      {
        username: 'casey.yoga',
        email: 'casey.yoga@example.com',
        profile: 'Yoga instructor building a balanced weekly practice.',
        points: 310,
      },
    ]);

    await Team.insertMany([
      {
        name: 'Morning Momentum',
        description: 'Early risers keeping each other accountable.',
        members: [users[0]._id, users[2]._id],
      },
      {
        name: 'Strength Circuit',
        description: 'Progressive strength training with friendly competition.',
        members: [users[1]._id, users[0]._id],
      },
    ]);

    await Activity.insertMany([
      {
        user: users[0]._id,
        type: 'Running',
        durationMinutes: 42,
        points: 120,
        completedAt: new Date('2026-09-08T07:30:00Z'),
      },
      {
        user: users[1]._id,
        type: 'Strength training',
        durationMinutes: 55,
        points: 110,
        completedAt: new Date('2026-09-09T17:45:00Z'),
      },
      {
        user: users[2]._id,
        type: 'Yoga',
        durationMinutes: 30,
        points: 85,
        completedAt: new Date('2026-09-10T06:45:00Z'),
      },
    ]);

    await Leaderboard.insertMany([
      { user: users[0]._id, points: 420, rank: 1 },
      { user: users[1]._id, points: 365, rank: 2 },
      { user: users[2]._id, points: 310, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        title: 'Tempo Run Builder',
        description: 'Warm up, run three controlled tempo intervals, then cool down.',
        difficulty: 'Intermediate',
        durationMinutes: 35,
      },
      {
        title: 'Full-Body Foundation',
        description: 'A balanced circuit of squats, presses, rows, and core work.',
        difficulty: 'Beginner',
        durationMinutes: 30,
      },
      {
        title: 'Reset and Restore',
        description: 'Gentle mobility and breathing work for post-training recovery.',
        difficulty: 'Easy',
        durationMinutes: 20,
      },
    ]);

    console.log('Seeded users, teams, activities, leaderboard, and workouts');

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
