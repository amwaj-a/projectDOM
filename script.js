let nav = document.getElementsByClassName("dropdown-content")[0];
let logo = document.getElementsByClassName("logo")[0];
let img2 = document.querySelector(".rover-action-shot");
let img1 = document.querySelector(".rover-hero-container");
let title1 = document.querySelector("h1");
let titlePra = document.querySelectorAll("p")[0];
let listSection1 = document.querySelectorAll("h3")[0];
let list2Section1 = document.querySelectorAll("h3")[2];
let listPRAGSection1 = document.querySelectorAll("p")[3];
let list2PRAGSection1 = document.querySelectorAll("p")[4];
let TxtBox = document.querySelectorAll("p")[9];
let TxtFooter = document.querySelectorAll("h2")[1];

// console.log(document.querySelectorAll("h2"));
logo.addEventListener("click", () => {
  // replaced(document.title, "Dog");
  window.top.document.title = "Rover.com: Book Cat Boarding Services";

  replaced(title1, "Dog");
  replaced(titlePra, "dog");
  replaced(listSection1, "Dog");
  replaced(list2Section1, "Dog");
  replaced(listPRAGSection1, "dog");
  replaced(list2PRAGSection1, "dog");
  replaced(TxtBox, "Dog");
  replaced(TxtFooter, "dog");

  img1.style.backgroundImage = "url(cat.jpg)";
  img1.style.backgroundPositionY = "30%";
  img1.style.backgroundPositionX = "30%";
  img2.style.backgroundImage =
    "url('https://t3.ftcdn.net/jpg/06/30/14/24/360_F_630142489_woQtMUVgEibBZRUWxsgctRARoGp7P6Yx.jpg')";
  img2.style.backgroundPositionY = "40%";
  img2.style.backgroundPositionX = "60%";
});

function replaced(params, oldValue) {
  oldValue == "Dog"
    ? (params.innerText = params.textContent.replace(/Dog/, "Cat"))
    : (params.innerText = params.textContent.replace(/dog/, "Cat"));
}

function navBar() {
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else nav.style.display = "block";
}
