const { response } = require("./helpers/dataResponse");
const { productsW } = require('../database/models/productsWomens.schema.js');
const { productsM } = require('../database/models/productsMens.schema.js');
const { allProducts } = require('../database/models/products.schema.js'); 
const { categoriesF } = require('../database/models/categoryFilters.js');

const getAllProducts = async (req, res) => {
  try {
    const genderParam = req.params.gender?.toLowerCase();

    console.log(`getAllProducts: ${genderParam}`);

    if (!['hombre', 'mujer', 'unisex'].includes(genderParam)) {
      return res.status(400).json({ message: "Género inválido. Usa 'hombre', 'mujer' o 'unisex'." });
    }

    const filteredProducts = await allProducts.find({ gender: genderParam });

    response(res, { payload: filteredProducts });

  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json(error.message);
  }
};

const getItem = async (req, res) => {
  try {
    const id = req.params.id;

    // Busca por _id en MongoDB
    const product = await allProducts.findById(id);

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    response(res, { payload: product });
  } catch (error) {
    console.log("Error -> ", error.message);
    return res.status(500).json({ message: error.message });
  }
}

const aplyFilters = async (req, res) => {
  try {
    const { order, sizes, categories } = req.body;
    let products;

    if (categories && categories.length) {
        products = await allProducts.find({ category: { $in: categories } });

        if (sizes && sizes.length) {
            products = products.filter(product =>
                product.size.some(size => sizes.includes(size))
            );
        }
    } else if (sizes && sizes.length) {
        products = await allProducts.find({ size: { $in: sizes } });
    } else {
        products = await allProducts.find();
    }

    if (Number(order)) {
        products = products.sort((a, b) => b.price - a.price); // Mayor a menor
    } else {
        products = products.sort((a, b) => a.price - b.price); // Menor a mayor
    }

    console.log('Filter by:', sizes, 'Order by:', Number(order) ? 'Mayor precio' : 'Menor precio', 'Category:', categories);

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
    getItem,
    aplyFilters,
    getFilters
}