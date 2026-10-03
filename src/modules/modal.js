const modal = () => {
  const popupBtns = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const closeBtn = popup.querySelector(".popup-close");
  let popupPosition = 30;
  let count;
  const openModal = () => {
    count++;
    let position = count * 2;
    let id = requestAnimationFrame(openModal);
    popup.querySelector(".popup-content").style.top = position + "%";
    if (position > popupPosition) {
      cancelAnimationFrame(id);
    }
  };
  popupBtns.forEach((element) => {
    element.addEventListener("click", () => {
      count = 0;
      popup.style.display = "block";
      if (window.innerWidth > 768) {
        openModal();
      }
    });
  });
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
};
export default modal;
