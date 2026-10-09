const calc = (price = 100) => {
  const inputText = document.querySelectorAll("input.calc-item");
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  for (let input of inputText) {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.match(/\d+/);
    });
  }
  const caountCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;
    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue =
        price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }
		let i = 0;
		setInterval(() => {
			if (i < totalValue) {
					i +=5;
			total.textContent = i
			} else return
		}, 5);
  };
  calcBlock.addEventListener("input", (e) => {
    if (
      e.target == calcType ||
      e.target == calcSquare ||
      e.target == calcCount ||
      e.target == calcDay
    ) {
      caountCalc();
    }
  });
};
export default calc;
