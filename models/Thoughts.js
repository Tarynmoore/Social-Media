const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
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
                    minute: 'numeric',
                })
            }
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],

    },

    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought