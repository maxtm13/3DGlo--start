const sendForm = ({ formId, someElement = [] }) => {
	const form = document.getElementById(formId)
	const statusBlock = document.createElement('div')
	const sendText = 'Данные отправляются...'
	const errorText = 'Ошибка...'
	const successText = 'Данные отправлены. Мы вам перезвоним.'
	let success

	const validate = (list) => {
		success = true
		list.forEach((item)=> {
			item.style.border = 'none' 
			switch (true) {
				case item.getAttribute('name') === 'user_name':
					if (!/^[а-я\s]+$/gi.test(item.value)) {
						success = success && false;
						item.style.border = '3px solid red'
					}
					
					break;
				case item.getAttribute('name') === 'user_email':
					if (!/^[a-z\_\-\(\) \`\!\~\*\.@]+$/gi.test(item.value)){
					success = success && false;
					item.style.border = '3px solid red'
					}
					break;
				case item.getAttribute('name') === 'user_phone':
					if (!/^[\d\(\)\-\+]+$/gi.test(item.value)) {
					success =  success && false;
					item.style.border = '3px solid red'
					}
					break;
				default:
					break;
				
			}
		})
		return success
	}
	const sendData = (data) =>{
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-type': "application/json"
			}
		}).then(res => res.json())
	}
	const submitForm = ()=> {
		const formData = new FormData(form)
		const formBody = {}
		statusBlock.innerText = sendText
		form.append(statusBlock)
		const formElements = form.querySelectorAll('input')
		formData.forEach((val, key) => {
			formBody[key] = val
		});
		someElement.forEach(elem => {
			const element = document.getElementById(elem.id)
			if (elem.type === 'block') {
				formBody[elem.id] = element.textContent
			} else if (elem.type === 'input') {
				formBody[elem.id] = element.value
			}
		})
		if (validate(formElements)) {
			sendData(formBody)
				.then(data => {
					statusBlock.innerText = successText
					formElements.forEach(el => {
						el.value = ''
					})
				})
				.catch(error => {
					statusBlock.innerText = errorText
				})
		} else {
			statusBlock.innerText ='Ошибка валидации формы'
		}
	}
	try {
		if (!form) {
			throw new Error(`Форма ${formId} не найдена`)
		}
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			submitForm()
		})
	} catch (error) {
		console.log(error);
		
	}
	
}

export default sendForm;