const express = require('express');
const router = express.Router();


const Product = require('../models/model.product')
const Login = require("../models/model.login");
const Signup = require("../models/model.signup");


router.get('/', async (req, res) => {
    try {
        

        const checkLogin = await Login.find().lean().exec();
        const currentUserId = checkLogin[0]._id;
        const checkLogin1 = checkLogin[0];
        if (checkLogin.length != 0) {
            const userProducts = await Signup.findById(currentUserId).lean().exec();
            // console.log("products:", userProducts.holding_product);
            const allProducts = await Product.find().lean().exec();
            // console.log('allProducts:', allProducts)
            let products = [];
            // console.log(userProducts.holding_product);
            for (let i = 0; i < userProducts.holding_product.length; i++) {
                for (let j = 0; j < allProducts.length; j++) {
                    if (
                        userProducts.holding_product[i] === allProducts[j].name
                    ) {
                        // console.log(userProducts[i], allProducts[j].name);
                        products.push(allProducts[j]);
                    }
                }
            }

            products.forEach((el, i) => {
                [el.count] = userProducts.holding_product_cnt[i];
            });


            return res.status(200).render("basket/basket.ejs", {
                products,
                checkLogin1,
            });
        }
        else {
            const userProducts = await Signup.findById(currentUserId)
                .lean()
                .exec();
            // console.log("products:", userProducts.holding_product);
            const allProducts = await Product.find().lean().exec();
            // console.log('allProducts:', allProducts)
            let products = [];
            // console.log(userProducts.holding_product);
            for (let i = 0; i < userProducts.holding_product.length; i++) {
                for (let j = 0; j < allProducts.length; j++) {
                    if (
                        userProducts.holding_product[i] === allProducts[j].name
                    ) {
                        // console.log(userProducts[i], allProducts[j].name);
                        products.push(allProducts[j]);
                    }
                }
            }

            products.forEach((el, i) => {
                [el.count] = userProducts.holding_product_cnt[i];
            });

            let checkLogin1 = 'Please Login';
            res.status(200).render('basket/basket.ejs', {products, checkLogin1 });
        }


    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.get("/remove/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    const currentUser = await Login.find().lean().exec();
    const userProduct = await Signup.findById(currentUser[0]._id);
    let ff = false;
    let idx;
    const prd = userProduct.holding_product.filter((el, i) => {
      if (product.name === el) {
        idx = i;
        ff = true;
      }
    });
    if (ff) {
      const updateIdInDb1 = await Signup.findById(userProduct._id);
      let array = updateIdInDb1.holding_product_cnt;
      let value = +array[idx];

      if (value > 1) {
        array[idx] = value - 1 + "";
        await Signup.findByIdAndUpdate(userProduct._id, {
          holding_product_cnt: array,
        });
        return res.status(200).redirect("/basket");
      } else {
        const updateIdInDb1 = await Signup.findById(userProduct._id);
        // console.log('updateIdInDb1:', updateIdInDb1)

        let arrayItemRemove = updateIdInDb1.holding_product;
        arrayItemRemove.splice(idx, 1);
        let arrayItemRemoveCnt = updateIdInDb1.holding_product_cnt;
        arrayItemRemoveCnt.splice(idx, 1);

        await Signup.findByIdAndUpdate(userProduct._id, {
          holding_product: arrayItemRemove,
        });
        await Signup.findByIdAndUpdate(userProduct._id, {
          holding_product_cnt: arrayItemRemoveCnt,
        });
        return res.status(200).redirect("/basket");
      }
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;