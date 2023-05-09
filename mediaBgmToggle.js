let bgmBtn = document.querySelector(".bgmToggle");
let bgmView = document.querySelector(".bgm iframe");

bgmBtn.addEventListener("click", () => {
  if (bgmView.className === "bgmView") {
    bgmBtn.innerHTML = "&lt;";
    bgmView.classList = "bgmViewHide";
  } else {
    bgmBtn.innerHTML = "&gt;";
    bgmView.classList = "bgmView";
  }
});
