const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav .right ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const links = document.querySelectorAll("ul li");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});
