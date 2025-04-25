const { response } = require("./helpers/dataResponse");
const { productsW } = require('../database/models/productsWomens.schema.js');
const { productsM } = require('../database/models/productsMens.schema.js');
const { categoriesF } = require('../database/models/categoryFilters.js');


const getAllProducts = async (req, res) => {
    try {
        console.log('getAllProducts');
        const products = await productsW.find();
        response(res, { payload: products})
    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

const getAllProductsMen = async (req, res) => {
    try {
        console.log('getAllProductsMen');
        const products = await productsM.find();
        response(res, { payload: products})
    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

const aplyFilters = async (req, res) => {
    try {
        const { order, sizes, categories, mode } = req.body;
        const ProductModel = mode === 'men' ? productsM : productsW;
        let products;

        if (categories && categories.length) {
            products = await ProductModel.find({ category: { $in: categories } });
            if (sizes && sizes.length) products = products.filter(product => product.size.some(size => sizes.includes(size)));
        }
        else if (sizes && sizes.length) products = await ProductModel.find({ size: { $in: sizes } });
        else products = await ProductModel.find();

        if (Number(order)) products = products.sort((a, b) => b.price - a.price); // Mayor a menor
        else products = products.sort((a, b) => a.price - b.price); // Menor a mayor

        console.log('Filter by:', sizes, 'Order by:', Number(order) ? 'Mayor precio' : 'Menor precio', 'Category:', categories, 'Mode:', mode);

        response(res, { payload: products });
    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

const getFilters = async (req, res) => {
    try {
        const filters = await categoriesF.find();
        response(res, { payload: filters})
    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

module.exports = {
    getAllProducts,
    getAllProductsMen,
    aplyFilters,
    getFilters
}