const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    reference: { type: String, required: true },
    transactionId: { type: String },
    state: { type: String }, // APPROVED, REJECTED, PENDING
    responseCode: { type: String },
    responseMessage: { type: String },
    paymentMethod: { type: String },
    paymentMethodId: { type: String },
    franchise: { type: String },
    value: { type: Number },
    currency: { type: String },
    installments: { type: Number },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    idBuys: { type: mongoose.Schema.Types.ObjectId, ref: "purchaseditems" }
  }
);

const transactionSC = mongoose.model("transactions", transactionSchema);
module.exports = { transactionSC };
