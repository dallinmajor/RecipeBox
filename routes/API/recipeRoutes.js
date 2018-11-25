const router = require('express').Router();
const RecipeControllers = require('../../controllers/recipeController');

// ROUTE /api/recipe...

router.route('/:categoryId')
    .post(RecipeControllers.create)
    .get(RecipeControllers.findAll)



module.exports = router;