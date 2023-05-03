document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("product-form");
  form.addEventListener("submit", addProduct);

  function addProduct(event) {
    event.preventDefault();

    const brand = document.getElementById("product-brand").value;
    const name = document.getElementById("product-name").value;
    const details = document.getElementById("product-details").value;
    const image = document.getElementById("product-image").value;
    const cost = document.getElementById("product-cost").value;
    const ratings = document.getElementById("ratings").value;

    if (!brand || !name || !details || !image || !cost || !ratings) {
      alert("Please fill in all required fields");
      return;
    }

    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: existingProducts.length + 1,
      brand,
      name,
      details,
      image,
      cost,
      ratings,
    };

    existingProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(existingProducts));

    document.getElementById("product-form").reset();
  }
});

function retrieveProducts() {
  const products = JSON.parse(localStorage.getItem("products"));

  const productInfoElement = document.getElementById("product-info");

  if (productInfoElement && products && products.length > 0) {
    let i = 0;
    console.log(i)
    const productHTML = products.map((product) => `
      <div class="product_single" id="product-${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.details}</p>
        <p>${product.brand}</p>
        <p>$${product.cost}</p>
        <p>Ratings: ${product.ratings}</p>
        <button class="add_to_cart_btn" onclick='addtocart(${product.id})'>Add to Cart <span class="material-symbols-outlined">shopping_cart
        </span></button>
      </div>
    `
      )
      // 'addtocart("+(i++)+")'
      .join("");

    productInfoElement.innerHTML = productHTML;
  }
}

window.onload = retrieveProducts;

var Cart = [];

function addtocart(productId) {
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((p) => p.id === productId);
  console.log("in add to cart");
  console.log(product)
  if (product) {
    Cart.push({ ...product });
    displaycart();
    console.log("in if ")
  }
}

function delElement(productId){
  Cart.splice(productId, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0;
  const cartItemsElement = document.getElementById("cart-items");
  if (!cartItemsElement) {
    console.error("Element with ID 'cart-items' not found in the DOM");
    return;
  }
  document.getElementById("count").innerHTML = Cart.length;
  if (Cart.length == 0) {
    document.getElementById("cart-items").innerHTML = "your cart is empty";
  } else {
    document.getElementById("cart-items").innerHTML = Cart.map((items) => {
      var { name, image, cost } = items;
      return (
        `<div class = 'cart-items'>
        <div class='row-img'>
        <img class= 'rowimg' src=${items.image}>
        </div>
        <p>${items.name}</p>
        <h2>${items.cost}.00</h2>` +
        "<span class='material-symbols-outlined' onclick='delElement(" +
        j++ +
        ")'>delete</span></div>"
      );
    }).join("");
  }
}
