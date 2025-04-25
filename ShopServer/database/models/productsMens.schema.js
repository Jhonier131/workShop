const { Schema, model } = require("mongoose");

const productsMens = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        offSale: {
            type: Number
        },
        size: {
            type: Array,
            require: false
        },
        category: Number
    }
);

const productsM = model("productsMens", productsMens);
module.exports = {
    productsM
}