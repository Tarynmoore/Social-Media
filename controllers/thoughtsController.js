const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find() 
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: {thoughts: thought._id }},
                { new: true }
            )
        })
        .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Post created, but found no user with that ID' })
          : res.json('Created the post 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
}
