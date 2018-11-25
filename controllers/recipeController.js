const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.User
            .findById(req.params.userId, 'recipes')
            .populate('Recipe')
            .then(recipes => res.json(recipes))
            .catch(err => res.status(402).json(err));
    },
    findById: (req, res) => {
        db.Recipe
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    create: (req, res) => {
        db.Recipe
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    update: (req, res) => {
        db.Recipe
            .findByIdAndUpdate(req.params.id, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    remove: (req, res) => {
        db.Recipe
            .findByIdAndRemove(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(
                db.Category
                    .findByIdAndUpdate(req.params.categoryId, {
                        $pull: { recipes: req.params.id }
                    })
                    .then(res.send('Deleted!'))
            )
            .catch(err => res.status(402).json(err))
    }
}