const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const Signup = require("../models/model.signup");

router.get("/", async (req, res) => {
  try {
    // console.log(req.body)
    return res
      .status(200)
      .render("signup/signup.ejs", { message: req.flash("message") });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/post", urlencodedParser, async (req, res) => {
  try {
    const user = req.body;
    let f = false;
    const check = await Signup.find().lean().exec();
    check.forEach((el) => {
      if (user.Email == el.Email) {
        f = true;
      }
    });
    if (f) {
      req.flash("message", "User already exist");
      return res.redirect("/signup");
    } else {
      await Signup.create(req.body);
      return res.status(200).redirect("/login");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
