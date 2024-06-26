const { response } = require("./helpers/dataResponse");
const { productsW } = require('../database/models/productsWomens.schema.js');


const getAllProducts = async (req, res) => {
    try {
        console.log('>>>>>>>>>>');
        const products = await productsW.find();
        response(res, { payload: products})
    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

module.exports = {
    getAllProducts
}