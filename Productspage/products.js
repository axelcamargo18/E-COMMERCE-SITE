// fetch function will return a promise //

// .then will run the json data in the response //

// run the then function with the response as a parameter. To get the JSON data from the response, we execute the json() function.//

// json() function also returns a promise. This is why we just return it and chain another then function. In the second then function we get the actual JSON data as a parameter. This data looks just like the data in our JSON file.//

fetch("products.json")
  .then((res) => res.json())
  .then((data) => getProducts(data));

function getProducts(data) {
  let output = "";
  console.log(data);
  // going through each object creating a template literal for each object and chaining and setting equal to the output variable //
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
