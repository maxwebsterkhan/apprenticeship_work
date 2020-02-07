function wait(ms = 0) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
	popup.classList.remove('open')
	await wait(1000);
	popup.remove()
	popup = null
}

function ask(options) {
	return new Promise(async function (resolve) {
		//First we need to create a pop up with all of the fields in it
		const popup = document.createElement('form');
		popup.classList.add('popup');
		popup.insertAdjacentHTML(
			'afterbegin',
			`<fieldset>
		<label>${options.title}</label>
		<input type="text" name="input"/>
		<button type="submit">Submit</button>
		</fieldset>
		`
		);


		console.log(popup);

		// check if they want a cancel button
		if (options.cancel) {
			const skipButton = document.createElement('button');
			skipButton.type = 'button';
			skipButton.textContent = 'Cancel';
			console.log(popup.firstChild)
			popup.firstElementChild.appendChild(skipButton);
			// TODO listen for click on cancel button
			skipButton.addEventListener('click', () => {
				resolve(null);
			}, { once: true }
			);
		}
		// listen for the submit event on the inputs
		popup.addEventListener(
			'submit',
			function (e) {
				e.preventDefault();
				console.log('submitted')
				resolve(e.target.input.value);
				destroyPopup(popup)
			},
			{ once: true }
		);
		// when someone submits we want to resolve the data from the input box
		// Inset that popup to dom
		document.body.appendChild(popup)
		// put a very small timeout before open class

		await wait(50);
		popup.classList.add('open')
	});
}

// select all buttons that have question
const askQuestion = async (e) => {
	const button = e.currentTarget;
	const cancel = button.hasAttribute('data-cancel')
	console.log(e)
	const answer = await ask({
		title: button.dataset.question,
		cancel,
	})
	console.log(answer)
}


const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
	{ title: 'What is your name?' },
	{ title: 'What is your age?', cancel: true },
	{ title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
	// make array to store results
	const results = []
	for (const item of array) {
		results.push(await callback(item))
	}
	return results
}

async function go() {
	const answers = await asyncMap(questions, ask)
	console.log(answers)
}
go()


// const askMany = async () => {
// 	for (const question of questions) {
// 		const answer = await ask(question)
// 		console.log(answer)
// 	}
// }
// askMany()