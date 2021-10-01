
// HOVER START
var men = document.querySelector(".men");

var menModal = document.querySelector(".men-modal");

men.onmouseover = function () {
  menModal.style.display = "block";
};

menModal.onmouseover = function () {
  menModal.style.display = "block";
};

menModal.onmouseout = function () {
  menModal.style.display = "none";
};

men.onmouseout = function () {
  menModal.style.display = "block";
};
// HOVER END



let sub=document.getElementsByClassName("sub")

let subtotal=document.getElementsByClassName("subtotal")

let countForDis = 0;
let applyCoupon = 0;
function applyCouponFun() {
  if (couponInput.value == "SKIN30" && countForDis == 0) {
    countForDis++;
    alert("Coupon Applied Successfully");
    applyCoupon = Math.ceil((sub.innerHTML / 1) * (30 / 100));
  
    let totalPrice = subtotal.innerHTML / 1 - applyCoupon;
    subtotal.innerHTML = totalPrice;
   
  } else if (couponInput.value == "SKIN30") {
    alert("Coupon already used");
  } else {
    alert("Please enter a valid Coupon code");
    couponInput.value = null;
  }
}

let idForCheckLogin = document.querySelector(".idForCheckLogin");


function checkout() {
  if (+sub.innerHTML == 0) {
    alert("Please add some item to Cart");
  } else if (idForCheckLogin.innerHTML == "Please Login") {
    window.location.href = "/login";
  } else {
    let priceCollection = {
      TotalMRP: sub.innerHTML,
     
      OrderTotal: subtotal.innerHTML,
    
      count: productCount1.innerHTML,
    };
    let body = JSON.stringify(priceCollection);
    fetch("/cart/priceCollection", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(
        setTimeout(() => {
          window.location.href = "/address";
        }, 1000)
      )
      .catch((err) => console.log(err));
  }
}
// let t_price = document.getElementById("t_price1");
// let s_price = document.getElementById("s_price1");
// let sub_price = document.getElementById("sub_price1");
// let o_total_price = document.getElementById("o_total_price1");
// let save_price = document.getElementById("save_price1");
// let coupon = document.getElementById("c");
// let couponInput = document.getElementById("couponInput");
// let productCount1 = document.getElementById("myCart1112");

// let countForDis = 0;
// let applyCoupon = 0;
// function applyCouponFun() {
//   if (couponInput.value == "PURPLLE30" && countForDis == 0) {
//     countForDis++;
//     alert("Coupon Applied Successfully");
//     applyCoupon = Math.ceil((sub_price.innerHTML / 1) * (30 / 100));
//     c.innerHTML = `-₹${applyCoupon}`;
//     let totalPrice = o_total_price.innerHTML / 1 - applyCoupon;
//     o_total_price.innerHTML = totalPrice;
//     let savePrice = save_price.innerHTML / 1 + applyCoupon;
//     save_price.innerHTML = savePrice;
//   } else if (couponInput.value == "PURPLLE30") {
//     alert("Coupon already used");
//   } else {
//     alert("Please enter a valid Coupon code");
//     couponInput.value = null;
//   }
// }

// let idForCheckLogin = document.querySelector(".idForCheckLogin");

// function checkout() {
//   if (+sub_price.innerHTML == 0) {
//     alert("Please add some item to Cart first");
//   } else if (idForCheckLogin.innerHTML == "Please Login") {
//     window.location.href = "/login";
//   } else {
//     let priceCollection = {
//       TotalMRP: t_price.innerHTML,
//       SavingsMRP: s_price.innerHTML,
//       Subtotal: sub_price.innerHTML,
//       OrderTotal: o_total_price.innerHTML,
//       YouSave: save_price.innerHTML,
//       count: productCount1.innerHTML,
//     };
//     let body = JSON.stringify(priceCollection);
//     fetch("/cart/priceCollection", {
//       method: "POST",
//       body: body,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .then(
//         setTimeout(() => {
//           window.location.href = "/address";
//         }, 1000)
//       )
//       .catch((err) => console.log(err));
//   }
// }
