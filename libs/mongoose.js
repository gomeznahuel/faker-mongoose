const { connect } = require("mongoose");
const {productModel} = require("../products.model");
const products = require("../products.json");

const cfg = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const environment = async () => {
  try {
    await connect(process.env.MONGO_URL, cfg);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

const saveProducts = async () => {
  try {
    await productModel.insertMany(products);
    console.log("Products saved!");
  } catch (error) {
    console.log(error);
  }
};

environment().then(() => console.log("Environment ready!"));
saveProducts();