import express from 'express';

import userRoutes from './modules/users/user.route';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chat App - MERN');
});

app.use('/api/users', userRoutes);

export default app;
