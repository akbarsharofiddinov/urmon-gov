const mediaImages = document.querySelectorAll(".img-box");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal-inner");

const imgElement = document.createElement("img");
imgElement.setAttribute("alt", "image");

mediaImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    modal.classList.add("active");
    imgElement.setAttribute("src", image.children[0].getAttribute("src"));
    modalInner.append(imgElement);
  });
});

const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");

  imgElement.removeAttribute("src");
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    modal.classList.remove("active");
    imgElement.removeAttribute("src");
  }
});
