const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const Signup = require("../models/model.signup");
const Login = require("../models/model.login");
router.get("/", async (req, res) => {
  try {
    // const productDetail = await Price.find().lean().exec();
    // let priceDetail = productDetail[0];
    return res
      .status(200)
      .render("login/login.ejs", { message: req.flash("message") });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/logout", async (req, res) => {
  try {
    const currentUser = await Login.find().lean().exec();
    const userProduct = await Signup.findById(currentUser[0]._id);
    let sum1 = 0;

    await Login.deleteMany();
    let checkLogin1 = "Please Login";
    res.status(200).render("index", { checkLogin1, sum1 });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/post", urlencodedParser, async (req, res) => {
  try {
    let user = req.body;
    let doc;
    let f = false;
    const check = await Signup.find().lean().exec();
    check.forEach((el) => {
      if (user.Email == el.Email && user.Password == el.Password) {
        f = true;
        doc = el;
      }
    });
    if (f) {
      await Login.create(doc);
      res.redirect("/");
    } else {
      req.flash("message", "Invalid credentials");
      res.redirect("/login");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
