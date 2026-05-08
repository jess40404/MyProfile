const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const openBtn1 = document.getElementById("openBtn1");
const openBtn2 = document.getElementById("openBtn2");
const openBtn3 = document.getElementById("openBtn3");
const closeBtn = document.getElementById("closeBtn");

function openModal1() {
  modal1.classList.add("show");
}

function openModal2() {
  modal2.classList.add("show");
}

function openModal3() {
  modal3.classList.add("show");
}

function closeModal() {
  modal1.classList.remove("show");
  modal2.classList.remove("show");
  modal3.classList.remove("show");
}

openBtn1.addEventListener("click", openModal1);
openBtn2.addEventListener("click", openModal2);
openBtn3.addEventListener("click", openModal3);
closeBtn.addEventListener("click", closeModal);

modal1.addEventListener("click", function (event) {
  if (event.target === modal1) {
    closeModal();
  }
});

modal2.addEventListener("click", function (event) {
  if (event.target === modal2) {
    closeModal();
  }
});
    
modal3.addEventListener("click", function (event) {
  if (event.target === modal3) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});