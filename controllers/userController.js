const { User, Thought } = require('../models');



module.exports = {
    // gets all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // post a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));

    },

    // get user by Id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate('thought')
            .populate('user')
            .select('-__v')

            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'no user with this Id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Update a user with it's id. 
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //   Delete a user with its id. 
    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Post a friend 
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true })
            .then(user => {
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            })
            .catch((err) => res.status(500).json(err));
    },


    // remove a friend 
    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }



}