const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    category: {
        type: String,
        require: true
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }
    ],
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

CategoriesSchema.pre('remove', function(next) {
    Recipe.remove({category: this._id}).exec();
    next();
})

const Category = mongoose.model('Category', CategoriesSchema);

module.exports = Category;