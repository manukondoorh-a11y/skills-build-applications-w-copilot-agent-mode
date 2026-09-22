export const users = [
    {
        id: 'user-1',
        name: 'Maya Chen',
        email: 'maya.chen@mergington.edu',
        role: 'student',
        team: 'Blue Falcons',
        points: 1420,
        streak: 5,
    },
    {
        id: 'user-2',
        name: 'Leo Martinez',
        email: 'leo.martinez@mergington.edu',
        role: 'student',
        team: 'Red Hawks',
        points: 1385,
        streak: 4,
    },
    {
        id: 'user-3',
        name: 'Ava Patel',
        email: 'ava.patel@mergington.edu',
        role: 'student',
        team: 'Blue Falcons',
        points: 1510,
        streak: 7,
    },
];
export const teams = [
    {
        id: 'team-1',
        name: 'Blue Falcons',
        captain: 'Ava Patel',
        members: 12,
        score: 4210,
    },
    {
        id: 'team-2',
        name: 'Red Hawks',
        captain: 'Leo Martinez',
        members: 10,
        score: 3985,
    },
    {
        id: 'team-3',
        name: 'Green Giants',
        captain: 'Noah Kim',
        members: 11,
        score: 3745,
    },
];
export const activities = [
    {
        id: 'activity-1',
        userId: 'user-1',
        type: 'running',
        durationMinutes: 35,
        distanceKm: 5.4,
        date: '2026-09-20',
        calories: 330,
    },
    {
        id: 'activity-2',
        userId: 'user-2',
        type: 'strength',
        durationMinutes: 45,
        sets: 4,
        date: '2026-09-18',
        calories: 280,
    },
    {
        id: 'activity-3',
        userId: 'user-3',
        type: 'walking',
        durationMinutes: 50,
        distanceKm: 6.1,
        date: '2026-09-19',
        calories: 245,
    },
];
export const leaderboard = [
    { rank: 1, name: 'Ava Patel', points: 1510, team: 'Blue Falcons' },
    { rank: 2, name: 'Maya Chen', points: 1420, team: 'Blue Falcons' },
    { rank: 3, name: 'Leo Martinez', points: 1385, team: 'Red Hawks' },
];
export const workouts = [
    {
        id: 'workout-1',
        title: 'Cardio Blast',
        focus: 'endurance',
        durationMinutes: 30,
        difficulty: 'moderate',
    },
    {
        id: 'workout-2',
        title: 'Core Strength Circuit',
        focus: 'core',
        durationMinutes: 25,
        difficulty: 'challenging',
    },
    {
        id: 'workout-3',
        title: 'Recovery Walk',
        focus: 'mobility',
        durationMinutes: 20,
        difficulty: 'easy',
    },
];
