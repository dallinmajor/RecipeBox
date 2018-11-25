const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;