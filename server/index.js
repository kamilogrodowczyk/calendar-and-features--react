const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');

const companyRouter = require('./routers/company');
const userRouter = require('./routers/user');
const eventRouter = require('./routers/event');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(companyRouter);
app.use(eventRouter);
app.use(userRouter);

app.get('/', (req, res) => {
  res.send('<h2>This is from index.js file</h2>');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
