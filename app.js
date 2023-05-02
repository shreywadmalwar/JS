document.addEventListener("DOMContentLoaded", function() {
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
  
    var brand_info = localStorage.setItem("brand", brand);
    var name_info = localStorage.setItem("name", name);
    var details_info = localStorage.setItem("details", details);
    var image_info = localStorage.setItem("image", image);
    var cost_info = localStorage.setItem("cost", cost);
    var rating_info = localStorage.setItem("ratings", ratings);
  
    document.getElementById("product-form").reset();

  // rest of your code...
  }
});


// const form = document.getElementById("product-form");
// form.addEventListener("submit", addProduct);

// function addProduct(event) {
//   event.preventDefault();

//   const brand = document.getElementById("product-brand").value;
//   const name = document.getElementById("product-name").value;
//   const details = document.getElementById("product-details").value;
//   const image = document.getElementById("product-image").value;
//   const cost = document.getElementById("product-cost").value;
//   const ratings = document.getElementById("ratings").value;

//   if (!brand || !name || !details || !image || !cost || !ratings) {
//     alert("Please fill in all required fields");
//     return;
//   }

//   var brand_info = localStorage.setItem("brand", brand);
//   var name_info = localStorage.setItem("name", name);
//   var details_info = localStorage.setItem("details", details);
//   var image_info = localStorage.setItem("image", image);
//   var cost_info = localStorage.setItem("cost", cost);
//   var rating_info = localStorage.setItem("ratings", ratings);

//   document.getElementById("product-form").reset();
// }

function retrieveProduct() {
  const brand = localStorage.getItem("brand");
  const name = localStorage.getItem("name");
  const details = localStorage.getItem("details");
  const image = localStorage.getItem("image");
  const cost = localStorage.getItem("cost");
  const ratings = localStorage.getItem("ratings");

  const productInfoElement = document.getElementById("product-info");

  if (productInfoElement) {
    const productHTML = `
      <div>
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>${details}</p>
        <p>${brand}</p>
        <p>$${cost}</p>
        <p>Ratings: ${ratings}</p>
      </div>
    `;

    productInfoElement.innerHTML = productHTML;
  }
}


window.onload = retrieveProduct;
