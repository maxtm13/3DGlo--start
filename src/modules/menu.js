const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const sliderLink = document.querySelector("main > a");
  const scrollToHref = function (e) {
    e.preventDefault();
    document
      .querySelector(this.attributes.href.value)
      .scrollIntoView({ block: "center", behavior: "smooth" });
  };
  const handleMenu = function () {
    menu.classList.toggle("active-menu");
  };
  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", handleMenu);
    menuItem.addEventListener("click", scrollToHref);
  });
  sliderLink.addEventListener("click", scrollToHref);
};
export default menu;
