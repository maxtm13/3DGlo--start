const calc = () => {
	const inputText = document.querySelectorAll('input.calc-item')
	for (let input of inputText) {
		input.addEventListener('input', (e)=>{
			 e.target.value = e.target.value.match(/\d+/)
		})
	}
}
export default calc