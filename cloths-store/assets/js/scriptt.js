const products = [
  { name: "Red Heels", brand: "Allegra James", image: "https://www.forever21.com/cdn/shop/files/ANTONELLA-RED-shopify-front_1880x.jpg?v=1746221172" },
  { name: "Gold Flats", brand: "Saint G", image: "https://www.forever21.com/cdn/shop/files/CARA-RED-shopify-front_1880x.jpg?v=1746221127" },
  { name: "White Woven", brand: "Walnut Melbourne", image: "https://www.forever21.com/cdn/shop/files/8ecb4851918d278a1029eab026e2b994_1920x.jpg?v=1746554255" },
  { name: "Pink Slides", brand: "D'Amelio", image: "https://www.forever21.com/cdn/shop/files/427a2491dd8a5718ca16829967724a22_1920x.jpg?v=1746554191" },
];
const productList = document.getElementById("productList");
// const productList = console.log("productList");
// function selectbrannds(filtered = products){
//      productList.innerHTML = "";
//   filtered.forEach(product => {
//     productList.innerHTML += `
//       <div class="product">
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.brand}</p>
//       </div>
//     `;
//   });
// }

function showProducts(items) {
  productList.innerHTML = ""; // clear existing
  for (let i = 0; i < items.length; i++) {
    const product = items[i];
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.brand}</p>
      </div>
    `;
  }
}
function brandCheched(){
    // let checked
    let checked = [...document.querySelectorAll(".brand-filter:checked")].map(cb=>cb.value);
    return checked
}
showProducts();