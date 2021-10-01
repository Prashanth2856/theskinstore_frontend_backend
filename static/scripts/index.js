/*-------SLIDESHOW START------*/

function slideShow() {
  const arr = [
    "https://cdn.shopify.com/s/files/1/0415/0548/9058/files/desktop-banner-blue_16-06-21_1800x.png?v=1623847903",
    "https://cdn.shopify.com/s/files/1/0415/0548/9058/files/SmoothSkin_Bare_banner_1800x.jpg?v=1612962118",
  ];
  let div = document.getElementById("slideshow");
  let img = document.createElement("img");
  img.setAttribute("class", "slideimg");
  let i = 0;
  img.src = arr[0];
  div.append(img);
  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    img.src = arr[i];
    i++;
  }, 3000);
}
slideShow();

/*------- SLIDE SHOW END--------*/

/*-----PRODUCT CATEGORIES START-----*/

var productSpan = document.getElementsByClassName("navButton");
var productsDiv = document.getElementsByClassName("product_img_div");

var l = 0;
productSpan[1].onclick = () => {
  l++;
  for (var i of productsDiv) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-290px";
    }
    if (l == 2) {
      i.style.left = "-500px";
    }

    if (l > 2) {
      l = 2;
    }
  }
};

productSpan[0].onclick = () => {
  l--;
  for (var i of productsDiv) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-290px";
    }
    if (l == 2) {
      i.style.left = "-530px";
    }

    if (l < 0) {
      l = 0;
    }
  }
};

/*-----PRODUCT CATEGORIES END-----*/

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


