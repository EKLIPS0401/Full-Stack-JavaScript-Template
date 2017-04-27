import * as mongoose from 'mongoose';

// sample Mongoose Model

export interface User extends mongoose.Document {
  name: string;
}

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  }
});

export default mongoose.model<User>('User', userSchema);
