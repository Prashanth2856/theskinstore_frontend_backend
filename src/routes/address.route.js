const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const send = require("send");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const Price = require("../models/model.price");
const Login = require("../models/model.login");

router.get("/", async (req, res) => {
  try {
    const productDetail = await Price.find().lean().exec();
    let priceDetail = productDetail[0];
    const checkLogin = await Login.find().lean().exec();
    const checkLogin1 = checkLogin[0];
    // return res.send(products);
    return res
      .status(200)
      .render("address/addressPage.ejs", { priceDetail, checkLogin1 });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
