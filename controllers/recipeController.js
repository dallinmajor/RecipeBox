const db = require('../models');

module.export = {
    findAll: () => {
        db.User
            .findById(req.params.userId, 'recipes')
            .populate('Recipe')
            .then(recipes => res.json(recipes))
            .catch(err => res.status(402).json(err));
    },
    findById: () => {

    },
    create: () => {

    },
    update: () => {

    },
    remove: () => {
        
    }
}