const router = require('express').Router();
const RecipeControllers = require('../../controllers/recipeController');

// ROUTE /api/recipe...

router.route('/categoryId/:userId')
    .post(RecipeControllers.create)



module.exports = router;