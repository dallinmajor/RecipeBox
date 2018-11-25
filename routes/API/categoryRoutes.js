const router = require('express').Router();
const CategoryControllers = require('../../controllers/categoryController');

// ROUTE /api/category...

router.route('/:id')
    .get(CategoryControllers.findById)
    .update(CategoryControllers.update)

router.route('/userId')
    .post(CategoryControllers.create)
    .get(CategoryControllers.findAll)

module.exports = router;
