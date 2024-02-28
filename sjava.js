// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#iconmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar untuk menghilangkan menu yang sedang aktif
const menu = document.querySelector("#iconmenu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
