const express = require("express");
const router = express.Router();

const Product = require("../models/model.product");
const Login = require("../models/model.login");
const Signup = require("../models/model.signup");
// router.post('/', async (req, res) => {
//     try {
//         const products = await Product.create(req.body);
//         res.send(products);
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// })

router.get("/", async (req, res) => {
  try {
    const checkLogin = await Login.find().lean().exec();
    const checkLogin1 = checkLogin[0];
    if (checkLogin.length != 0) {
      const currentUser = await Login.find().lean().exec();
      const userProduct = await Signup.findById(currentUser[0]._id);
      let sum1 = 0;
      userProduct.holding_product_cnt.forEach((el) => {
        sum1 += +el;
      });
      const products = await Product.find().lean().exec();
      res
        .status(200)
        .render("product/ProductPage", { products, checkLogin1, sum1 });
    } else {
      let sum1 = 0;
      const products = await Product.find().lean().exec();
      let checkLogin1 = "Please Login";
      res
        .status(200)
        .render("product/ProductPage", { products, checkLogin1, sum1 });
    }

    // const products = await Product.find().lean().exec();
    // return res.status(200).render('product/ProductPage', {products})
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//Filter by High to Low
router.get("/htl", async (req, res) => {
  try {
    const currentUser = await Login.find().lean().exec();
    const userProduct = await Signup.findById(currentUser[0]._id);
    let sum1 = 0;
    userProduct.holding_product_cnt.forEach((el) => {
      sum1 += +el;
    });

    const checkLogin = await Login.find().lean().exec();
    console.log(checkLogin.length);
    const checkLogin1 = checkLogin[0];
    if (checkLogin.length != 0) {
      const products = await Product.find().sort({ price: -1 }).lean().exec();
      res.render("product/ProductPage", { products, checkLogin1, sum1 });
    } else {
      const products = await Product.find().sort({ price: -1 }).lean().exec();
      let checkLogin1 = "Please Login";
      res.render("product/ProductPage", { products, checkLogin1, sum1 });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//Filter by Low to High
router.get("/lth", async (req, res) => {
  try {
    const currentUser = await Login.find().lean().exec();
    const userProduct = await Signup.findById(currentUser[0]._id);
    let sum1 = 0;
    userProduct.holding_product_cnt.forEach((el) => {
      sum1 += +el;
    });

    const checkLogin = await Login.find().lean().exec();
    console.log(checkLogin.length);
    const checkLogin1 = checkLogin[0];
    if (checkLogin.length != 0) {
      const products = await Product.find().sort({ price: 1 }).lean().exec();
      res
        .status(200)
        .render("product/ProductPage", { products, checkLogin1, sum1 });
    } else {
      const products = await Product.find().sort({ price: 1 }).lean().exec();
      let checkLogin1 = "Please Login";
      res
        .status(200)
        .render("product/ProductPage", { products, checkLogin1, sum1 });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});
module.exports = router;
