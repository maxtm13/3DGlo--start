const menu = () => {
  const body = document.querySelector("body");
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  // const closeBtn = menu.querySelector(".close-btn");
  // const menuItems = menu.querySelectorAll("ul>li>a");
  // const sliderLink = document.querySelector("main > a");

  const scrollToHref = function (e) {
    document
      .querySelector(e.attributes.href.value)
      .scrollIntoView({ block: "center", behavior: "smooth" });
  };
  const handleMenu = function () {
    setTimeout(() => {
      menu.classList.toggle("active-menu");
    }, 1);
  };
  menuBtn.addEventListener("click", handleMenu);
  body.addEventListener("click", (e) => {
    if (e.target.matches("menu ") || e.target.closest(".active-menu")) {
      if (e.target.classList.contains("close-btn")) {
        handleMenu();
      } else if (e.target.tagName === "A") {
        e.preventDefault();
        scrollToHref(e.target);
        handleMenu();
      }
    } else if (
      menu.classList.contains("active-menu") ||
      e.target.classList.contains(".close-btn")
    ) {
      handleMenu();
    } else {
      return;
    }
  });
};
export default menu;
