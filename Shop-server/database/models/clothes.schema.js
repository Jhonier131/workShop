const { Schema, model } = require("mongoose");

const clothes = new Schema(
    {
        name: {
            type: String
        },
        iamge: {
            type: String
        },
        price: {
            type: String
        },
        description: {
            type: String
        },
    }
);

const clothesModel = model("clothe", clothes);
module.exports = {
    clothesModel
}