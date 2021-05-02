import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import reviewRoutes from './routes/reviews.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json({ limit:"30mb", extended: true}));
app.use(express.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());

app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb+srv://quicksaveme:quicksaveme123@cluster0.l4xql.mongodb.net/myFirstDatabase';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server is running on port: ' + PORT)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);