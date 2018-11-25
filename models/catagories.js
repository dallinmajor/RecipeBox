const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const CatagoriesSchema = new Schema({
    catagorie: {
        type: String,
        require: true
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Catagory = mongoose.model('Catagory', CatagoriesSchema);

module.exports = Catagory;