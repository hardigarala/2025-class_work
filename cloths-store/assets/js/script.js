function openInSameTab(event) {
  event.preventDefault(); // Prevent default anchor behavior
  window.location.href = "index2.html"; // Open in same tab
}
let products = [
  { name: "Red Heels", brand: "Allegra James", image: "https://www.forever21.com/cdn/shop/files/ANTONELLA-RED-shopify-front_1880x.jpg?v=1746221172" },
  { name: "Gold Flats", brand: "Saint G", image: "https://www.forever21.com/cdn/shop/files/CARA-RED-shopify-front_1880x.jpg?v=1746221127" },
  { name: "White Woven", brand: "Walnut Melbourne", image: "https://www.forever21.com/cdn/shop/files/8ecb4851918d278a1029eab026e2b994_1920x.jpg?v=1746554255" },
  { name: "Pink Slides", brand: "D'Amelio", image: "https://www.forever21.com/cdn/shop/files/427a2491dd8a5718ca16829967724a22_1920x.jpg?v=1746554191" },
];

let productList = document.getElementById("productList");


    // Show products
    function showProducts(items) {
      productList.innerHTML = ""; // clear existing
      items.forEach(product => {
        productList.innerHTML += `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.brand}</p>
          </div>
        `;
      });
    }

    // Get selected brand filters
    function getSelectedBrands() {
      const checkedBoxes = document.querySelectorAll(".brand-filter:checked");
      return Array.from(checkedBoxes).map(box => box.value);
    }

    // Filter based on selection
    function filterProducts() {
      const selected = getSelectedBrands();
      if (selected.length === 0) {
        showProducts(products); // no filter applied
      } else {
        const filtered = products.filter(p => selected.includes(p.brand));
        showProducts(filtered);
      }
    }

    // Clear all filters
    function clearFilters() {
      document.querySelectorAll(".brand-filter").forEach(cb => cb.checked = false);
      showProducts(products);
    }

    // Add event listener to checkboxes
    document.querySelectorAll(".brand-filter").forEach(cb => {
      cb.addEventListener("change", filterProducts);
    });

    // Initial load
    showProducts(products);
  

