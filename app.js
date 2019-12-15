let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

class Modal {
  constructor() {
    this.popup = document.querySelector(".popup");
  }
  openModal() {
    this.popup.style.display = "block";
  }
  closeModal() {
    this.popup.style.display = "none";
  }
}

let reviewProduct = new Modal();

document.querySelectorAll("#ctaBtn").forEach(item => {
  item.addEventListener("click", () => {
    reviewProduct.openModal();
  });
});

document.querySelectorAll("#close-btn").forEach(item => {
  item.addEventListener("click", () => {
    reviewProduct.closeModal();
  });
});
