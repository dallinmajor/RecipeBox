const router = require('express').Router();
const RecipeControllers = require('../../controllers/recipeController');

// ROUTE /api/recipe...

router.route('/all/:userId')
    .get(RecipeControllers.findAll)

router.route('/:id')
    .post(RecipeControllers.create)
    .get(RecipeControllers.findById)
    .put(RecipeControllers.update)

router.route('/delete/:id/:categoryId')
    .delete(RecipeControllers.remove)

    







module.exports = router;