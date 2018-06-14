import expressGraphQL from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'GraphQL YAY!!'
};

const GRAPHQL_MIDDLEWARE = expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true
})

export default GRAPHQL_MIDDLEWARE;
