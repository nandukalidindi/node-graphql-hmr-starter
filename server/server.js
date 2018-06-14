import express from 'express';

import { GRAPHQL_MIDDLEWARE, HELMET } from '../middlewares';

const app = express();

app.use(HELMET);

app.use('/graphql', GRAPHQL_MIDDLEWARE)

export default app;
