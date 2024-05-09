const { response } = require("./helpers/dataResponse");
const { clothesModel } = require('../database/models/clothes.schema');


const getClothes = async (req, res) => {
    try {
        console.log('hpña');
        const allClothes = await clothesModel.find();
        response(res, {payload: allClothes})
    } catch (error) {
        console.log("Error -> ", error.message);
        return res.status(500).json(error.message);
    }
}

module.exports = {
    getClothes
}