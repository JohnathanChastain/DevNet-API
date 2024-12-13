import { Schema, model } from 'mongoose';

const reactionSchema = new Schema({
  reactionBody: {
	type: String,
	required: true,
	maxlength: 280
  },
  username: {
	type: String,
	required: true
  },
  createdAt: {
	type: Date,
	default: Date.now,
	get: (timestamp: Date) => timestamp.toISOString()
  }
}, {
  toJSON: {
	getters: true
  }
});

const thoughtSchema = new Schema({
  thoughtText: {
	type: String,
	required: true,
	minlength: 1,
	maxlength: 280
  },
  createdAt: {
	type: Date,
	default: Date.now,
	get: (timestamp: Date) => timestamp.toISOString()
  },
  username: {
	type: String,
	required: true
  },
  reactions: [reactionSchema]
}, {
  toJSON: {
	getters: true
  }
});

const Thought = model('Thought', thoughtSchema);

export default Thought;