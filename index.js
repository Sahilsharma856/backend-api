const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/blog', blogRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
