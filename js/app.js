const modalWindow = document.getElementById("modalWindow");
const modalWindowWrapper = document.getElementById("modalWindowWrapper");
const closeBtn = document.getElementById("closeBtn");

modalWindowWrapper.addEventListener("click", (event) => {
  // const playBtn = document.getElementById('playVideoBtn')
  const modalBackdrop = document.getElementById("modalBackdrop");
  const playBtn = event.target.closest(".play-btn");
  if (playBtn) {
    openModal();
  } else if (event.target === modalBackdrop) {
    closeModal();
  }
});
closeBtn.addEventListener("click", (e) => {
  closeModal();
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function openModal() {
  document.body.classList.add("show-modal");
}

function closeModal() {
  document.body.classList.remove("show-modal");
}
