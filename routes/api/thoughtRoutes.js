const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
.delete(deleteThought)
.put(updateThought)
.get(getThoughtById);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router
