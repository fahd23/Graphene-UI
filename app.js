const hamBurgerBtn = document.querySelector("#btn-ham-burger");
const sideBar = document.querySelector(".sidebar");
const closeSideBarBtn = document.querySelector(".close-sideBar-btn");

hamBurgerBtn.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

closeSideBarBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});
