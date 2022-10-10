fetch("products.json")
  .then((res) => res.json())
  .then((data) => getProducts(data));

function getProducts(data) {
  let output = "";
  console.log(data);
  data.forEach((item) => {
    output += `
        <div class="product">
            <img src="${item.image}">
            <p class="title">${item.title}</p>
            <p class="description">${item.description}</p>
            <p class="price">
            <span>$</span>
            <span>${item.price}</span>
            </p>
            <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
        </div>`;
  });
  document.getElementById("products").innerHTML = output;
}
