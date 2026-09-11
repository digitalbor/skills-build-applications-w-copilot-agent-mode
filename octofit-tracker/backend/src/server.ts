import express, { type Request, type Response } from 'express';
import { connectDatabase } from './config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from './models.js';

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

  
app.use(express.json());
app.use((_request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api', apiUrl });
});

app.get('/api/users/', getDocuments(User));
app.post('/api/users/', createDocument(User));
app.get('/api/teams/', getDocuments(Team));
app.post('/api/teams/', createDocument(Team));
app.get('/api/activities/', getDocuments(Activity));
app.post('/api/activities/', createDocument(Activity));
app.get('/api/leaderboard/', getDocuments(Leaderboard));
app.post('/api/leaderboard/', createDocument(Leaderboard));
app.get('/api/workouts/', getDocuments(Workout));
app.post('/api/workouts/', createDocument(Workout));

function getDocuments(model: typeof User) {
  return async (_request: Request, response: Response) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      response.status(500).json({ error: 'Unable to load records', details: error instanceof Error ? error.message : error });
    }
  };
}

function createDocument(model: typeof User) {
  return async (request: Request, response: Response) => {
    try {
      const document = await model.create(request.body);
      response.status(201).json(document);
    } catch (error) {
      response.status(400).json({ error: 'Unable to create record', details: error instanceof Error ? error.message : error });
    }
  };
}

if (process.env.NODE_ENV !== 'test') {
  connectDatabase()
    .then(() => {
      app.listen(port, () => {
        console.log(`OctoFit Tracker API listening at ${apiUrl}`);
      });
    })
    .catch((error) => {
      console.error('Error connecting to octofit_db:', error);
      process.exitCode = 1;
    });
}

export { app };