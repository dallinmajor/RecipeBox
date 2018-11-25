const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.User
            .findById(req.params.userId, 'categories')
            .populate('categories')
            .then(categories => res.json(categories))
            .catch(err = res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Category
            .findById(req.params.id)
            .populate('Recipe')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err))
    },
    create: (req, res) => {
        db.Category
            .create(req.body)
            .then(category => {
                db.User
                    .findByIdAndUpdate((req.params.userId),
                        { $push: { categories: category._id } })
                    .then(res.json(category));
            })
            .catch(err => res.status(402).json(err))
    },
    update: (req, res) => {
        db.Category
    },
    remove: (req, res) => {
        db.Category
    }
}