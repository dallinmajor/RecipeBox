const router = require('express').Router();
const CategoryControllers = require('../../controllers/categoryController');

// ROUTE /api/category...
router.route('/:userId')
    .post(CategoryControllers.create)

router.route('/all/:userId')
    .get(CategoryControllers.findAll)

router.route('/:id')
    .get(CategoryControllers.findById)
    .put(CategoryControllers.update);

router.route('/delete/:userId/:id')
    .delete(CategoryControllers.remove);

module.exports = router;
