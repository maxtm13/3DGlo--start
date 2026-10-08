const slider = (sliderWrapperClass, sliderClass, dotsWrapperClass, dotClass) => {

	
  const sliderBlock = document.querySelector('.'+ sliderWrapperClass);
  const slides = document.querySelectorAll('.'+ sliderClass);
	const slideActiveClass = sliderClass + '-active';
  const dotBlock = document.querySelector('.'+ dotsWrapperClass);
  const activeDotClass = dotClass + '-active'
	let currentSlide = 0;
  let intervalID;
  let timerInterval;
  let dots; ;
  let newDot;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove( strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, activeDotClass);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, activeDotClass);
  };

  const startSlide = (interval = 1500) => {
    intervalID = setInterval(autoSlide, interval);
  };

  const stopSlide = () => {
    clearInterval(intervalID);
  };
	if  (!(sliderBlock && slides.length > 0 && dotBlock) ) {
		return
	}

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }
    prevSlide(slides, currentSlide, slideActiveClass);
    prevSlide(dots, currentSlide, activeDotClass);
    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains(dotClass)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    nextSlide(slides, currentSlide, slideActiveClass);
    nextSlide(dots, currentSlide, activeDotClass);
  });
  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide(timerInterval);
      }
    },
    true,
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timerInterval);
      }
    },
    true,
  );

  for (let i = 0; i < slides.length; i++) {
    newDot = document.createElement("li");
    newDot.classList.add(dotClass);
    if (i === 0) {
      newDot.classList.add(activeDotClass);
    }
    dotBlock.append(newDot);
  }
  dots = document.querySelectorAll('.'+ dotClass);

  startSlide(timerInterval);
};
export default slider;
