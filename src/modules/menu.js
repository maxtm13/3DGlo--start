const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const sliderLink = document.querySelector("main > a");

  const scrollToHref = function (e) {
    document
      .querySelector(e.attributes.href.value)
      .scrollIntoView({ block: "center", behavior: "smooth" });
  };
  const handleMenu = function () {
    menu.classList.toggle("active-menu");
  };
  menuBtn.addEventListener("click", handleMenu);
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    console.dir(e.target);
    if (e.target.tagName === "A") {
      if (!e.target.closest(".close-btn")) {
        scrollToHref(e.target);
      }
      handleMenu();
    }
  });
};
export default menu;
