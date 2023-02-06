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

	const data = new FormData(e.target);

	const value = Object.fromEntries(data.entries());

	const serviceID = 'service_0ppa9xp';
	const templateID = 'template_0g7zfdn';

	let contactParams = {
		to_name: 'Humanitarian Studies',
		from_name: `${value.first_name} ${value.last_name}`,
		from_phone: value.from_phone,
		from_email: value.from_email,
		business_organization: value.business_organization,
		course: value.course,
		course_category: value.course_category,
		country: value.country,
		// course_cv: value.course_cv.name,
		education_level: value.education_level,
		// attachment: [
		// 	{ data: '<html>i <i>hope</i> this works!</html>', alternative: true },
		// 	{
		// 		path: value.course_cv.webkitRelativePath,
		// 		type: value.course_cv.type,
		// 		name: value.course_cv.name,
		// 	},
		// ],
		reply_to: value.from_email,
	};

	emailjs.send(serviceID, templateID, contactParams).then(
		function (res) {
			console.log('SUCCESS!');
			console.log(res);
		},
		function (error) {
			console.log('FAILED...', error);
		}
	);

	alert('Your message has been sent successfully');
}
