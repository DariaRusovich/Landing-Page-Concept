const modalWindow = document.getElementById("modalWindow");
const modalWindowWrapper = document.getElementById("modalWindowWrapper");
const closeBtn = document.getElementById("closeBtn");
const videoPlayBtn = document.getElementById("videoPlayBtn");
const video = document.getElementById("video");

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
videoPlayBtn.addEventListener("click", () => {
  video.controls = true;
  video.play();
  videoPlayBtn.classList.add("hide");
  // this.classList.add("hide");
});
function openModal() {
  document.body.classList.add("show-modal");
}

function closeModal() {
  document.body.classList.remove("show-modal");
  video.pause();
 
}
