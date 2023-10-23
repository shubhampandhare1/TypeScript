import express from 'express';

import todosRoute from './routes/todos';

import bodyParser from 'body-parser';

import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(todosRoute)

app.listen({ port: 3000 })