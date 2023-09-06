const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 7999,
    colors: [
      {
        code: "white",
        img: "./img/air.png",
      },
      {
        code: "black",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 11999,
    colors: [
      {
        code: "red",
        img: "./img/jordan.png",
      },
      {
        code: "orange",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Hoodie",
    price: 3499,
    colors: [
      {
        code: "blue",
        img: "./img/hoodie.png",
      },
      {
        code: "black",
        img: "./img/hoodie2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Jeans",
    price: 1999,
    colors: [
      {
        code: "blue",
        img: "./img/jeans.png",
      },
      {
        code: "black",
        img: "./img/jeans2.png",

      },
    ],
  },
  {
    id: 5,
    title: "Tshirt",
    price: 1499,
    colors: [
      {
        code: "red",
        img: "./img/tshirt.png",
      },
      {
        code: "black",
        img: "./img/tshirt2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});