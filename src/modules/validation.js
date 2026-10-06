const validate = ()=> {
	const inputName = document.querySelectorAll('input[name="user_name"]')
	const inputEmail = document.querySelectorAll('input[name="user_email"]')
	const inputPhone = document.querySelectorAll('input[type="tel"]')
	const userMessage = document.querySelector('input[placeholder="Ваше сообщение"]')
	const validatePreg = (item, preg) =>{
			const value = item.target.value.match(preg)
			item.target.value =  value ? value : ''
	}

	for (let name of inputName) {
		name.addEventListener('input', (e)=>{
			validatePreg(e, /[а-я\s\-]+/gi)
		})
	}
	for (let mail of inputEmail) {
		mail.addEventListener('input', (e)=>{
			validatePreg(e, /[a-z\_\-\(\)\`\!\~\*\.@]+/gi)
		})
	}
	for (let phone of inputPhone) {
		phone.addEventListener('input', (e)=>{
			validatePreg(e, /[\d\(\)\-]+/gi)
		})
	}
	userMessage.addEventListener('input', (e)=>{
			validatePreg(e, /[а-я\s\-]+/gi)
		})
} 
export default validate