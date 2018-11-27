const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.User
            .find({})
            .then(users => res.json(users))
            .catch(err => res.status(402).json(err));
    },
    findById: (req, res) => {
        db.User
            .findById(req.params.id)
            .populate({
                path: 'categories',
                populate: {
                    path: 'recipes',
                    model: 'Recipe'
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    create: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    update: (req, res) => {
        db.User
            .findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(402).json(err));

    },
    remove: (req, res) => {
        console.log(`deleting ${req.params.id}`)
        db.User
            .findByIdAndDelete(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(res.send('Deleted!'))
            .catch(err => res.status(402).json(err));
    }
}