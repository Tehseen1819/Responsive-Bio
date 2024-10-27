let btn = document.querySelector(".nightbtn");
let main = document.querySelector(".main");
let burger = document.querySelector(".burger");
let list = document.querySelector(".list");
let links = document.querySelector(".links");
let content = document.querySelector(".content");
let toggle = true;
let flag = true;
//night mode
btn.addEventListener("click", () => {
  if (toggle) {
    btn.innerHTML = '<i class="ri-sun-line text-xl"></i>';
    toggle = false;
    main.classList.add("dark");
  } else {
    btn.innerHTML = '<i class="ri-moon-fill text-xl"></i>';
    toggle = true;
    main.classList.remove("dark");
  }
});

burger.addEventListener("click", () => {
  if (flag) {
    burger.innerHTML = '<i class="ri-close-line text-xl"></i>';
    flag = false;
    links.classList.remove("hidden");
    content.classList.add("opacity-0");
  } else {
    burger.innerHTML = '<i class="ri-menu-line text-xl"></i>';
    flag = true;
    links.classList.add("hidden");
    content.classList.remove("opacity-0");
  }
});
