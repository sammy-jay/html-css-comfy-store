const imgDiv = document.querySelector(".featured-element-div");
const openBar = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".navigators");
const closeBar = document.querySelector(".fa-times");
sideBar.classList.remove("toggle-sidebar");

openBar.addEventListener("click", () => {
  sideBar.classList.add("toggle-sidebar");
  sideBar.style.transform = "translateY(3vh)";
  sideBar.style.transition = "transform linear 1s";
});
closeBar.addEventListener("click", () => {
  sideBar.style.transform = "";
  sideBar.style.transition = "";
  sideBar.classList.remove("toggle-sidebar");
});
