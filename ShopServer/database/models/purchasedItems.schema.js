const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const purchasedItemSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users", // nombre del modelo de usuarios
    required: false,
  },
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "products", required: true },
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  state: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const purchasedItemsSC = model("purchasedItems", purchasedItemSchema);
module.exports = { purchasedItemsSC };
