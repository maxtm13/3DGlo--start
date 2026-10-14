import timer from './modules/timer.js'
import menu from './modules/menu.js'
import modal from './modules/modal.js'
import calc from './modules/calc.js'
import validate from './modules/validation.js'
import tabs from './modules/tabs.js'
import slider from './modules/slider.js'
import sendForm from '/modules/sendForm.js'

timer('2026 16 october 12:00')
menu()
modal()
calc(100)
// validate()
tabs()

slider('portfolio-content', 'portfolio-item', 'portfolio-dots', 'dot')
sendForm({formId: 'form1', 
	someElement: [ 
		{
			type: 'block',
			id: 'total'
		}
	]
});
sendForm({
	formId: 'form2',
});
sendForm({
	formId: 'form3',
});
 