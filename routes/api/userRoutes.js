const router = require('express').Router();
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:userId
router.route('/:userId')
.put(updateUser)
.delete(deleteUser)
.get(getUserById)

// api/users/:userId/friends/friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router
