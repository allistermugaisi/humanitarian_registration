/* Sending Email from Contact Section */
(function () {
	emailjs.init('KL07k3FfR0UOyuxdi');
})();

let sendMailForm = document.getElementById('sendMailForm');

if (sendMailForm.attachEvent) {
	sendMailForm.attachEvent('submit', sendmail);
} else {
	sendMailForm.addEventListener('submit', sendmail);
}

function sendmail(e) {
	e.preventDefault();

	let firstName = document.getElementById('first_name').value;
	let lastName = document.getElementById('last_name').value;
	let userPhone = document.getElementById('from_phone').value;
	let userEmail = document.getElementById('from_email').value;
	let businessOrganization = document.getElementById(
		'business_organization'
	).value;
	let courseCategory = document.getElementById('course_category').value;
	let courseName = document.getElementById('course').value;
	let country = document.getElementById('country').value;
	let courseCV = document.getElementById('course_cv').files[0];

	const serviceID = 'service_0ppa9xp';
	const templateID = 'template_0g7zfdn';

	let contactParams = {
		to_name: 'Humanitarian Studies',
		from_name: `${firstName} ${lastName}`,
		from_phone: userPhone,
		from_email: userEmail,
		business_organization: businessOrganization,
		course: courseName,
		course_category: courseCategory,
		country: country,
		course_cv: courseCV,
		reply_to: userEmail,
	};
	console.log(contactParams);
	console.log(this);

	alert('Your message has been sent successfully');

	emailjs.sendForm(serviceID, templateID, this).then(
		function (res) {
			console.log('SUCCESS!');
			console.log(res);
		},
		function (error) {
			console.log('FAILED...', error);
		}
	);
}
