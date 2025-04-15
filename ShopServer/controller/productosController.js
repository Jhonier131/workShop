const { response } = require("./helpers/dataResponse");
const { productsW } = require('../database/models/productsWomens.schema.js');
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

const aplyFilters = async (req, res) => {
    try {
        const { order, sizes, categories } = req.body;
        let products;

        if (categories && categories.length) {
            products = await productsW.find({category: {$in: categories}});
            if (sizes && sizes.length) 
                products = products.filter(
                    product => product.size.some(
                        size => sizes.includes(size)));
        }
        else if(sizes && sizes.length) products = await productsW.find({size: {$in: sizes}});
        else products = await productsW.find();

        if (Number(order)) products = products.sort((a, b) => b.price - a.price);
        else products = products.sort((a, b) => a.price - b.price);
        console.log('Filter by: ', sizes, ' Order by: ', order ? 'Menor precio' : 'Mayor precio', ' Category: ', categories);

        response(res, { payload: products})
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
    aplyFilters,
    getFilters
}