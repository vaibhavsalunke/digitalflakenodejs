const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
});
module.exports = mongoose.model("categories", categoriesSchema);
