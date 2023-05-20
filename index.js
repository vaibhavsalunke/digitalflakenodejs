const express = require("express");
const cors = require("cors");
require("./db/Config");
const Category = require("./db/Category");
const product = require("./db/Product");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/add-category", async (req, resp) => {
  let CategoryData = new Category(req.body);
  let result = await CategoryData.save();
  console.log("result");
  resp.send(result);
});

app.get("/category", async (req, resp) => {
  let CategoryData = await Category.find();
  if (CategoryData.length > 0) {
    resp.send(CategoryData);
  } else {
    resp.send({ result: "No Products Found " });
  }
});

app.post("/add-product", async (req, resp) => {
  let productData = new product(req.body);
  let result = await productData.save();
  console.log(result);
});

app.get("/product", async (req, resp) => {
  let productData = await product.find();
  if (productData.length > 0) {
    resp.send(productData);
  } else {
    resp.send({ result: "No Products Found " });
  }
});

app.listen(5000);
