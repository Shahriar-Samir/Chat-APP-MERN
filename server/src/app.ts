import express from 'express';

import router from './routes/routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chat App - MERN');
});

app.use('/api', router);

export default app;
