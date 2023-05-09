let bgmBtn = document.querySelector(".bgmToggle");
let bgmView = document.querySelector(".bgm iframe");

bgmBtn.addEventListener("click", () => {
  if (bgmView.className === "bgmView") {
    bgmBtn.innerHTML = "&gt;";
    bgmView.classList = "bgmView:active";
  } else {
    bgmBtn.innerHTML = "&lt;";
    bgmView.classList = "bgmView";
  }
});
