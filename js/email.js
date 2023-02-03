/* Sending Email from Contact Section */
(function () {
	emailjs.init('KL07k3FfR0UOyuxdi');
})();

function sendmail() {
	let firstName = document.getElementById('first_name').value;
	let lastName = document.getElementById('last_name').value;
	let userPhone = document.getElementById('phone').value;
	let userEmail = document.getElementById('email').value;
	let businessOrganization = document.getElementById(
		'business_organization'
	).value;
	let courseName = document.getElementById('course').value;
	// let userMessage = document.getElementById('message').value;

	const serviceID = 'service_0ppa9xp';
	const templateID = 'template_0g7zfdn';

	let contactParams = {
		to_name: 'Humanitarian Studies',
		from_name: `${firstName} ${lastName}`,
		from_phone: userPhone,
		from_email: userEmail,
		business_organization: businessOrganization,
		course: courseName,
		reply_to: userEmail,
		// message: userMessage,
	};
	console.log(contactParams);

	alert('Your message has been sent successfully');

	emailjs.send(serviceID, templateID, contactParams).then(
		function () {
			console.log('SUCCESS!');
		},
		function (error) {
			console.log('FAILED...', error);
		}
	);
}
