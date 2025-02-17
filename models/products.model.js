const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [, "Please enter product name"], // Capitalized "Please"
    },
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
    },
    price: {
      type: Number,
      required: [false, "Please enter product price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
    id:{
      type:Number
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
