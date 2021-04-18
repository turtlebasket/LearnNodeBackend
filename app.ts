import dotenv from 'dotenv';
import express, { Request, Response } from 'express'
import mongoose, { Schema, Query } from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';

dotenv.config();
const { PORT, NODE_ENV, MONGO_URI } = process.env;

const app = express();

const db = mongoose.connection;
db.openUri(MONGO_URI as string, {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/hello", (req: Request, res: Response) => {
  res.send("hello");
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: NODE_ENV === 'development' ? true : false
}))

app.listen(PORT, () => {
  console.log(`Graphql server running at port ${PORT}.`)
});
