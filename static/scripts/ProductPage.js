// function home() {
//   window.location.href = "../index/index.html";
// }
// function cartPage() {
//   window.location.href = "../cart/cart.html";
// }

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
// // ALL PRODUCTS
// const product = [
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/sesderma_c-vit_radiance_facial_glowing_fluid_main_200718150010_400x.jpg?v=1603717405",
//     name: "Sesderma C-Vit Radiance Facial Glowing Fluid 50ml",
//     price: 3000,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/dermaceutic_light_ceutic_skin_toning_night_cream_main_240718135512_400x.jpg?v=1603712736",
//     name: "Dermaceutic Light Ceutic Skin Toning Night Cream,40ml",
//     price: 2650,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/golite_lightening_cream_main_030120180748_400x.jpg?v=1603716958",
//     name: "Golite Natural Skin Lightening Cream With Sunscreen 30g",
//     price: 829,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/biluma_cream_depigmenting_-_skin_lightening_cream_main_200718144238_400x.jpg?v=1603713292",
//     name: "Biluma Cream Depigmenting - Skin Lightening Cream,15g",
//     price: 523,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/truderma_absolute_radiance_serum_30ml_main_200718150144_400x.jpg?v=1603716047",
//     name: "Truderma Absolute Radiance Serum 30 ml",
//     price: 439,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/umd00007_400x.jpg?v=1609929764",
//     name: "VIT VIT C+e Ultra Whitening Serum 30",
//     price: 2550,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/bb_300x.jpg?v=1631018116",
//     name: "Noreva Exfoliac BB Cream",
//     price: 1750,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/MASK_400x.jpg?v=1608209917",
//     name: "Vit Vit C+e Ultra whitening Peeling Mask 50g",
//     price: 1500,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/SJC_190x.jpg?v=1610715515",
//     name: "Korejska Kozmetika Acrete Blue Sea Whitening Water Drops Cream",
//     price: 1499,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/depiwhite_masque_whitening_peel-off_mask_main_060918132234_400x.jpg?v=1603718235",
//     name: "Depiwhite Masque Whitening peel-off mask,40ML",
//     price: 1072,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/umd_400x.jpg?v=1606388647",
//     name: "Vit Vit C+E Ultra Whitening Cream With SPF15 50ml",
//     price: 4000,
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0415/0548/9058/products/avene_bright_intense_brightening_essence_30ml_main_220319115554_200x.jpg?v=1603744422",
//     name: "Avene Bright Intense Brightening Spray Essence 30ml",
//     price: 2380,
//   },
// ];
// if (localStorage.getItem("products") == null) {
//   localStorage.setItem("products", JSON.stringify(product));
// }

// function showProducts(p) {
//   let products = p;
//   let products_div = document.getElementById("products");
//   products_div.innerHTML = null;

//   products.forEach(function (el) {
//     let div = document.createElement("div");
//     div.setAttribute("class", "productdiv");
//     let img = document.createElement("img");
//     img.setAttribute("class", "productimg");
//     img.src = el.img;

//     let p_name = document.createElement("p");
//     p_name.setAttribute("class", "productname");
//     p_name.innerHTML = el.name;

//     let p_price = document.createElement("p");
//     p_price.setAttribute("class", "rs");
//     p_price.innerHTML = `RS. ${el.price}`;

//     let button = document.createElement("button");
//     button.setAttribute("class", "addtocart");
//     button.textContent = "Add to Cart";
//     button.addEventListener("click", function () {
//       addToCart(el);
//     });
//     button.style.display = "block";

//     div.append(img, p_name, p_price, button);
//     products_div.append(div);
//   });
// }
// showProducts(JSON.parse(localStorage.getItem("products")));
// // SORT
// function sortLH() {
//   let products = JSON.parse(localStorage.getItem("products"));
//   products = products.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   showProducts(products);
// }

// function sortHL() {
//   let products = JSON.parse(localStorage.getItem("products"));
//   products = products.sort(function (a, b) {
//     return b.price - a.price;
//   });
//   showProducts(products);
// }

// function addToCart(obj) {
//   let arr;
//   arr = localStorage.getItem("prodCart");
//   if (arr == null) {
//     arr = [];
//   } else {
//     arr = JSON.parse(localStorage.getItem("prodCart"));
//   }
//   arr.push(obj);
//   alert("Product added to cart successfully");
//   localStorage.setItem("prodCart", JSON.stringify(arr));
// }

// // function showCart() {
// //   window.location.href = "../cart/cart.html";
// // }
