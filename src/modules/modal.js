import {animate} from './helper'
const modal = () => {
  const popupBtns = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup");
  const closeBtn = popup.querySelector(".popup-close");
  let popupPosition = 30;
  let count;
	
  const openModal = () => {
		animate({
			duration: 300,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				popup.querySelector(".popup-content").style.top = progress * popupPosition + '%';
			}
		});
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
