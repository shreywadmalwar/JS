const categoriesList = document.getElementById("categories_list");
const baseUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;

fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    data.categories.forEach((category) => {
      const listItem = `
      <div class="container_item">
        <div class="container_img">
          <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
        </div>
        <div class= "container_name">
          <h3 class"container_name_h3">${category.strCategory}</h3>
          <p class="container_name_p">${category.strCategoryDescription}</p>
        </div>
        </div>
      `;
      categoriesList.insertAdjacentHTML("beforeend", listItem);
    });
  });
