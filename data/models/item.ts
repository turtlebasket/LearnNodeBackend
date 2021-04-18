import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: String,
})
export const Item = mongoose.model('Item', ItemSchema);
export const ItemTC = composeWithMongoose(Item)

export const ItemQuery = {
  itemById: ItemTC.getResolver('findById'),
  itemCount: ItemTC.getResolver('count'),
}

export const ItemMutation = {
  itemCreateOne: ItemTC.getResolver('createOne'),
  itemUpdateOne: ItemTC.getResolver('updateOne')
}