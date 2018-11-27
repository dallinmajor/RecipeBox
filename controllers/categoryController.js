const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.User
            .findById(req.params.userId, 'categories')
            .populate('Category')
            .then(categories => res.json(categories))
            .catch(err = res.json(err));
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
            .findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(402).json(err));
    },
    remove: (req, res) => {
        db.Category
            .findByIdAndDelete(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(
                db.User
                    .findByIdAndUpdate(req.params.userId, {
                        $pull: { categories: req.params.id }
                    }).then(res.send('Deleted'))
            )
    }
}