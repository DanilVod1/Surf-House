const searchInput = document.querySelector(".search-input");
const resetInput = document.querySelector(".reset-input svg");

resetInput.addEventListener("click", () => (searchInput.innerText = ""));
searchInput.addEventListener("focus", e => focusInput(e));

function focusInput(e) {
  e.target.innerText = "";
}
