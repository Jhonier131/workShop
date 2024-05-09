const { connect, set } = require('mongoose');

const DB_URI = `mongodb+srv://jhonier:13052002@restaurant.hluhpeu.mongodb.net/shop?retryWrites=true&w=majority&appName=shop`;

const dbInit = async () => {
    set("strictQuery", false);
    await connect(`${DB_URI}`);
    console.log("Init DB");
};

module.exports = {
    dbInit
}