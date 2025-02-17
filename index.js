const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/products.model.js");
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello From node API server");
});
//routes
app.use("/api/products", productRoute);

//listener
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

/*----Database Connection*/
const connectionString =
  "mongodb+srv://admin:udwjEG6r8NLySWmp@backenddb.rs7z2.mongodb.net/?retryWrites=true&w=majority&appName=backendDB";

mongoose
  .connect(connectionString, {})
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
