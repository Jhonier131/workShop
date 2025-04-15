const { Schema, model } = require("mongoose");

const categories = new Schema(
    {
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        }
    }
);

const categoriesF = model("categories", categories);
module.exports = {
    categoriesF
}