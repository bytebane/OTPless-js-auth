/**
 * OTPLESS Function
 * * After auth process, this function will be called with the user data in the form of an object
 * @param {Object} otplessUser - The user data in the form of an object
 */
function otpless(otplessUser) {
	if (otplessUser && otplessUser.token) {
		// ? If data is found, sign the user in (log the user data, save it in Local storage and redirect to Home page)

		console.log('User Logged In')
		console.log('User Data: ', otplessUser)

		localStorage.setItem('data', JSON.stringify(otplessUser)) //* save the user data in Local storage

		window.location.href = 'index.html' //* redirect to home page
	} else {
		// ? If data is not found or token is missing, log error and print the data received(if any)

		console.error('Something went wrong. Token not found')
		console.log('Received Data: ', otplessUser ?? 'No Data Received')
	}
}
