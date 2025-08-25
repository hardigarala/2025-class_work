//-------------------------------- section-1-------------------------------------------------------------------------- 
window.addEventListener("scroll", function () {
  const img = document.querySelector(".col-40 img");
  let scrollValue = window.scrollY;
  // Adjust zoom sensitivity ↓
  let scale = 1 + scrollValue / 1000; 
  img.style.transform = `scale(${scale})`;
});

//-------------------------------- section-1-------------------------------------------------------------------------- 
    
const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
      const header = item.querySelector(".accordion-header");
      header.addEventListener("click", () => {
        // close all other items
        items.forEach(i => {
          if (i !== item) {
            i.classList.remove("active");
            i.querySelector(".accordion-content").style.maxHeight = null;
            i.querySelector(".accordion-content").classList.remove("open");
          }
        });

        // toggle current item
        item.classList.toggle("active");
        const content = item.querySelector(".accordion-content");
        if (item.classList.contains("active")) {
          content.style.maxHeight = content.scrollHeight + "px";
          content.classList.add("open");
        } else {
          content.style.maxHeight = null;
          content.classList.remove("open");
        }
      });
    });
  