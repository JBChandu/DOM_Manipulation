// answer 1
const title = document.querySelector("aside div h2 ");
title.innerHTML = "Chandrahassan 😊";
const desc = document.querySelector("aside div p ");
desc.innerHTML = "FullStack JavaScript Developer and a DevOps Professional";

// answer2
const productsList = document.querySelectorAll(
  ".row div a span.as-imagegrid-item-title"
);
let products = [];
for (let product of productsList) {
  products.push(product.textContent.replace("Support", "").trim());
}
console.log(products);

// answer3
const list = document.querySelector(".accordion-homepage");
const section = document.createElement("section");
section.className = "parent";
const h3 = document.createElement("h3");
h3.innerText = "My FAQ";
section.append(h3);
list.append(section);

// answer4
const phNo = document.querySelector(".one-tel-number");
phNo.innerText = "+1234567890";

// answer5
// changing first card
// const buyNow = document.querySelector(".diwali-deals-product-sale-btn");
// buyNow.innerText = "Check Out";
// or
// change all cards button text
const buyNow = document.querySelectorAll(".diwali-deals-product-sale-btn");
for (let i = 0; i < buyNow.length; i++) {
  buyNow[i].innerText = "Check Out";
}

// answer6
const searchBar = document.querySelector(".searchinput___19uW0");
searchBar.addEventListener("mouseenter", function () {
  searchBar.style.backgroundColor = "red";
});

// answer7
const form = document.querySelector(".search-form");
const search = document.querySelector("#hp-search-input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`https://developer.mozilla.org/en-US/search?q=${search.value}`);
});

// answer8
const lang = document.querySelectorAll("#SIvCob a");
for (let la of lang) {
  la.remove();
}

// answer9
const heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "monospace";
heading.style.color = "#B1361E";

// answer10
const btn = document.querySelector(
  ".btn-cta-big.btn-block.signup-btn.btn-cta.btn.btn-default"
);
const btntxt = document.querySelector(".login-btn-text");
btn.addEventListener("mouseover", function () {
  btntxt.style.backgroundColor = "#EA3323";
});

// answer11
const logo = document.querySelector("span.icon.icon-logo.in");
logo.style.backgroundImage = `url('https://ineuron.ai/images/ineuron-logo.png')`;

// answer12
const btnNewRepo = document.querySelector("a.btn.btn-sm.btn-primary");
btnNewRepo.style.backgroundColor = "#2827CC";

// answer13
const hackHead = document.querySelector(".fl-heading .fl-heading-text");
hackHead.innerHTML = "JSBOOTCAMP";

// answer14
const hotdeal = document.querySelector(".HotDealsAll__Heading__2fIbe");
hotdeal.style.fontSize = "80px";

// answer15
const dellLapName = document.querySelectorAll(".ps-title");
for (let lap of dellLapName) {
  if (lap.innerText == "G15 Gaming Laptop") {
    lap.style.textAlign = "right";
  }
}

// answer16
const vercelHead = document.querySelector(".section-title_title__VEDfK");
vercelHead.innerHTML = "Start with Scratch";

// answer17
const sonybtn = document.querySelector(".PrimaryTout__ButtonText");
sonybtn.innerText = new Date();

// answer18
const philips = document.querySelector(".p-f03-footer-container");
philips.style.background = "orange";

// answer19
const canon = document.querySelector(".navbar-brand img");
const source = canon.getAttribute("src");
console.log(`${location.href}${source}`);

// answer20
const oppo = document.querySelector(".wide h3");
oppo.style.color = "orange";
