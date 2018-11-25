const router = require('express').Router();
const UserController = require('../../controllers/userController');

// ROUTE /api/user...

router.route('/')
    .post(UserController.create)

router.route('/all')
    .get(UserController.findAll)

router.route('/:id')
    .get(UserController.findById)
    .put(UserController.update)
    .delete(UserController.remove)

module.exports = router;