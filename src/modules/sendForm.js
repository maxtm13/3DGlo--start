const sendForm = ({ formId, someElement = [] }) => {
	const form = document.getElementById(formId)
	const statusBlock = document.createElement('div')
	const sendText = 'Данные отправляются...'
	const errorText = 'Ошибка...'
	const successText = 'Данные отправлены. Мы вам перезвоним.'
	const preloader = document.createElement('section')
	preloader.insertAdjacentHTML('beforeend', '<div class="sk-rotating-plane"></div>')
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
		statusBlock.remove()
		
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
			statusBlock.remove()
			form.append(preloader)
			form.style.position = 'relative'
			sendData(formBody)
				.then(data => {
					preloader.remove();
					formElements.forEach(el => {
						el.value = ''
					})
					statusBlock.innerText = successText
					form.append(statusBlock)
				})
				.catch(error => {
					preloader.remove();
					statusBlock.innerText = errorText
					form.append(statusBlock)
					console.log("Ошибка при отправке ", error);
					
				})
		} else {
			statusBlock.innerText ='Ошибка валидации формы'
			form.append(statusBlock)
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