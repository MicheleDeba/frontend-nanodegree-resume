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

bio.display = function(){
	var formattedName =  HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.blog));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage);
	$("#header").append(formattedWelcomeMsg);

	$("#topContacts").append(formattedContactInfo);
	$("#footerContacts").append(formattedContactInfo);

	if (bio.skills.length) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};

bio.display();

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

work.display = function() {
	if(work.jobs.length){
		$("#workExperience").append(HTMLworkStart);

		for(var i = 0; i < work.jobs.length; i++){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

			var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();


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
	if(projects.projects.length){
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
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
	if(education.schools.length){
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
	}

	$("#education").append(HTMLonlineClasses);
	if(education.onlineCourses.length){
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
	}
};

education.display();
$("#mapDiv").append(googleMap);
