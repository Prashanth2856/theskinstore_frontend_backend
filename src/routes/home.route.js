const express = require("express");
const Login = require("../models/model.login");
const Signup = require("../models/model.signup");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const checkLogin = await Login.find().lean().exec();
    // console.log(checkLogin.length);
    const checkLogin1 = checkLogin[0];
    if (checkLogin.length != 0) {
      const currentUser = await Login.find().lean().exec();
      const userProduct = await Signup.findById(currentUser[0]._id);
      let sum1 = 0;
      userProduct.holding_product_cnt.forEach((el) => {
        sum1 += +el;
      });
      res.status(200).render("index", { checkLogin1, sum1 });
    } else {
      let sum1 = 0;
      let checkLogin1 = "Please Login";
      res.status(200).render("index", { checkLogin1, sum1 });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
