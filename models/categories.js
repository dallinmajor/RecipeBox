const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    categorie: {
        type: String,
        require: true
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model('Category', CategoriesSchema);

module.exports = Category;