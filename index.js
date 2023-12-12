document.addEventListener('DOMContentLoaded', () => {
	//* Get the data from sessionStorage
	// const data = JSON.parse(sessionStorage.getItem('data'))
	//* Get the data from localStorage
	const data = JSON.parse(localStorage.getItem('data'))

	//? If no data is found, redirect to auth.html
	if (!data) {
		alert('No data found! Please login first.')
		window.location.href = 'auth.html'
	}

	//? If data is found, log and render the data on the page
	console.log('User Data: ', data)

	const dataContainerEl = document.getElementById('user-data') //* data-container
	const greetEl = document.getElementById('greet') //* greeting header
	const signOutBtn = document.getElementById('sign-out') //* sign-out button

	/**
	 * * Function to render elements from an object's key-value pairs in the DOM
	 * * @param {Object} input - The object to render
	 * * @param {string} prepend - (Optional) The string to prepend to the key
	 * * @returns {void}
	 * */
	const renderElementsfromObj = (input, prepend) =>
		Object.entries(input).forEach(([key, value]) => {
			// Skip null and undefined
			if (value === null || value === undefined) return
			//? Skip the token key from being rendered
			if (key === 'token') return
			//? If the value is an object, recursively render its key-value pairs
			if (typeof value === 'object') renderElementsfromObj(value, key)
			//? Render the object's key-value pairs in the DOM (append each key-value to data-container)
			else
				dataContainerEl.innerHTML += `
					<div class="key-value">
						<span class="key">${prepend ? prepend + '-' + key : key}: </span>
						<span class="value">${value}</span>
					</div>
				`
		})

	//? Render the data on the page

	let name = data.email.name ?? data.waName ?? data.mobile.name

	greetEl.innerText = name === 'undefined' ? 'User Data!' : `Hello, ${name.split(' ')[0]}!` //* Set the greeting header
	data && renderElementsfromObj(data) //* Render the data on the page

	//* Set the sign-out button action
	signOutBtn.addEventListener('click', () => {
		sessionStorage.removeItem('data') //* Remove the data from sessionStorage
		window.location.href = 'auth.html' //* Redirect to auth.html
	})
})
