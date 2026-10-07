const tabs = () => {
  const tabContent = document.querySelectorAll(".service-tab");
  const tabPanel = document.querySelector(".service-header");
  const tabButtons = document.querySelectorAll(".service-header-tab");

  tabPanel.addEventListener("click", (e) => {
    if (e.target.closest(".service-header-tab")) {
      const bntTarget = e.target.closest(".service-header-tab");
      tabButtons.forEach((item, index) => {
        if (item === bntTarget) {
          item.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          item.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  });
};
export default tabs;
