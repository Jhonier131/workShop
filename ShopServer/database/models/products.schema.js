const { Schema, model } = require("mongoose");

const products = new Schema(
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
        category: Number,
        gender: String,
        stock: Object
    }
);

const allProducts = model("products", products);
module.exports = {
    allProducts
}