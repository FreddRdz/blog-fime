const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./api/middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 6000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/subjects', require('./api/routes/subjectRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
