// function cartPage() {
//   window.location.href = "../cart/cart.html";
// }
// function home() {
//   window.location.href = "../index/index.html";
// }
// function signUp() {
//   let firstname = document.getElementById("firstname").value;
//   let lastname = document.getElementById("lastname").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   if (firstname === "" || lastname === "" || email === "" || password === "") {
//     alert("please fill all required details");
//     return false;
//   }

//   let userDetails = [
//     {
//       userFirstName: firstname,
//       userLastName: lastname,
//       userEMail: email,
//       userPassword: password,
//     },
//   ];

//   let userInformation = localStorage.getItem("mobileDetails");
//   if (userInformation == null) {
//     userInformation = [];
//   } else {
//     userInformation = JSON.parse(localStorage.getItem("mobileDetails"));
//   }
//   userInformation.push(userDetails);
//   localStorage.setItem("mobileDetails", JSON.stringify(userInformation));
//   alert("Succesfully Registered");
// }
