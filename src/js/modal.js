const mediaImages = document.querySelectorAll(".img-box");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal-inner");

mediaImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    modal.classList.add("active");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("alt", "image");
    imgElement.setAttribute("src", image.children[0].getAttribute("src"));
    modalInner.append(imgElement);
  });
});

const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
