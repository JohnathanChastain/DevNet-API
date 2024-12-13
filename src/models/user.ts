import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
	type: String,
	unique: true,
	required: true,
	trim: true
  },
  email: {
	type: String,
	required: true,
	unique: true,
	match: [/.+@.+\..+/, 'Must match a valid email address']
  },
  thoughts: [
	{
	  type: Schema.Types.ObjectId,
	  ref: 'Thought'
	}
  ],
  friends: [
	{
	  type: Schema.Types.ObjectId,
	  ref: 'User'
	}
  ]
});

const User = model('User', userSchema);

export default User;

