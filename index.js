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
app.delete("/category/:id", async (req, resp) => {
  const result = await Category.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/category/:id", async (req, resp) => {
  let result = await Category.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found" });
  }
});

app.put("/category/:id", async (req, resp) => {
  let result = await Category.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
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

app.delete("/product/:id", async (req, resp) => {
  const result = await product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/product/:id", async (req, resp) => {
  let result = await product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found" });
  }
});

app.put("/product/:id", async (req, resp) => {
  let result = await product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});

app.listen(8080);
