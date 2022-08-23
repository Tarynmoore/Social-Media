
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
    },
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
    },
    {
        username: {
            type: String,
            required: true,
        },
    },
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => {
                return new Date(timestamp).toLocaleString('en-US', {
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric', 
                    weekday: 'short', 
                    hour: 'numeric', 
                    minute: 'numeric', })
            }
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    },
);

module.exports = reactionSchema;