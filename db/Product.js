const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  name: String,
  packsize: String,
  category: String,
  mrp: Number,
  status: String,
});
module.exports = mongoose.model("products", productsSchema);
