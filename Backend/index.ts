import express from 'express';
import dotenv from 'dotenv';
import auth from './routes/userRoutes/auth'
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/auth',auth)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});