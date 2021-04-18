import { SchemaComposer } from 'graphql-compose';

const composer = new SchemaComposer();

import { ItemMutation, ItemQuery } from './models/item';
import { UserMutation, UserQuery } from './models/user';

composer.Query.addFields({
  ...UserQuery,
  ...ItemQuery
})

composer.Mutation.addFields({
  ...UserMutation,
  ...ItemMutation
})

const schema = composer.buildSchema();
// console.log(`COMPOSER\n${composer.toSDL()}`);
export default schema;