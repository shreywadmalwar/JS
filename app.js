// select the form element and listen for the submit event
const form = document.getElementById('product-form');
form.addEventListener('submit', addProduct);

// define the addProduct function
function addProduct(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // select the input fields and get their values
  const brand = document.getElementById('product-brand').value;
  const name = document.getElementById('product-name').value;
  const details = document.getElementById('product-details').value;
  const image = document.getElementById('product-image').value;
  const cost = document.getElementById('product-cost').value;
  const ratings = document.getElementById('ratings').value;

  // create a new list item element
  const li = document.createElement('li');

  // set the inner HTML of the list item element
  li.innerHTML = `
    <div class="product">
      <div class="product-image">
        <img src="${image}" alt="${name}" />
      </div>
      <div class="product-info">
        <h2 class="product-name">${name}</h2>
        <p class="product-details">${details}</p>
        <div class="product-meta">
          <p class="product-brand">${brand}</p>
          <p class="product-cost">$${cost}</p>
          <p class="product-ratings">${ratings} stars</p>
        </div>
      </div>
    </div>
  `;

  // select the product list and append the new list item element to it
  const productList = document.getElementById('product-list');
  productList.appendChild(li);

  // reset the form
  form.reset();
}
