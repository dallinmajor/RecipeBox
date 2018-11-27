const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    recipe: {
        type: String,
        require: true,
    },
    category: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;