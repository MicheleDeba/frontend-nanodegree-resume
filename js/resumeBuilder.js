/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Michele De Battista",
	"role": "Web Designer",
	"contacts": {
		"mobile": "+39 340 78 19 215",
		"email": "micheledebattista@digimade.it",
		"github": "MicheleDeba",
		"blog": "www.digimade.it",
		"location": "Padova"
	},
	"welcomeMessage": "Hello There!",
	"skills": [
		"CSS", "HTML", "Adobe Suite", "Many more"
	],
	"bioPic": "images/my-image.jpg"
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

for (contact in bio.contacts) {
	var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
	$("#topContacts").append(formattedContactGeneric);
	$("#footerContacts").append(formattedContactGeneric);
}

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedImage);



if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

var work = {
	"jobs": [{
		"employer": "Solidred",
		"title": "Freelance Graphic Designer",
		"location": "Paris",
		"dates": "2008 - current",
		"description": "Being a freelance is cool!"
	}, {
		"employer": "Digimade",
		"title": "Web Designer",
		"location": "Padova",
		"dates": "2014 - current",
		"description": "Small Company, big projects"
	}]
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

var projects = {
	"projects": [{
		"title": "Oxydo",
		"dates": "2015",
		"description": "Website for italian brand of glasses",
		"images": [
			"images/project01_1.jpg",
			"images/project01_2.jpg"
		]
	}, {
		"title": "Solidred",
		"dates": "2015",
		"description": "Design agency website",
		"images": [
			"images/project01_1.jpg",
			"images/project01_2.jpg"
		]
	}]
};


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

var education = {
	"schools": [{
		"name": "UNIPD - International economics",
		"location": "Padova",
		"degree": "Degree",
		"dates": 2010,
		"major": "International economics"
	}, {
		"name": "UNIPD - International economics",
		"location": "Padova",
		"degree": "Master Degree",
		"dates": 2013,
		"major": "Management of Innovation"
	}],

	"onlineCourses": [{
		"title": "Design of Artifacts in Society",
		"school": "Coursera",
		"dates": 2014,
		"url": "https://www.coursera.org/"
	}, {
		"title": "Front End devoloper Nanodegree",
		"school": "Coursera",
		"dates": 2015,
		"url": "https://www.udacity.org/"
	}]
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		//$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		//$(".education-entry:last").append(formattedDegree);

		var schoolTitle = formattedName + formattedDegree;
		$(".education-entry:last").append(schoolTitle);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
	}

	for (var online in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitleO = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		//$(".education-entry:last").append(formattedTitle);
		var formattedSchoolO = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		//$(".education-entry:last").append(formattedSchool);

		var schoolTitleO = formattedTitleO + formattedSchoolO;
		$(".education-entry:last").append(schoolTitleO);

		var formattedDatesO = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedDatesO);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedURL);
	}
};

education.display();
$("#mapDiv").append(googleMap);
