const router = require('express').Router();

const {
    getThoughts,
    createThought,
    deleteThought,
    updateThought,
    addReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
.delete(deleteThought)
.put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction)

module.exports = router
