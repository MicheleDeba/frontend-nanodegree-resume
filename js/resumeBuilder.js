/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Bio

var bio = {
	"name" : "Michele De Battista",
	"role" : "Web Designer",
	"contacts" : {
		"mobile" : "+39 340 78 19 215",
		"email" : "micheledebattista@digimade.it",
		"github" : "MicheleDeba",
		"blog" : "www.digimade.it",
		"location" : "Padova - IT"
	},
	"welcomeMessage" : "Hello There!",
	"skills" : [
		"CSS", "HTML", "Adobe Suite", "Many more"
	],
	"bioPic" : "images/my-image.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);


$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedImage);



if ( bio.skills.length > 0 ) {
$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
		$("#skills").append(formattedSkill);
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Solidred",
			"title" : "Freelance Graphic Designer",
			"location" : "Worldwide",
			"dates" : "2008 - current",
			"description" : "Lorem ipsum"
		},
		{
			"employer" : "Digimade",
			"title" : "Web Designer",
			"location" : "Padova - IT",
			"dates" : "2014 - current",
			"description" : "Lorem ipsum"
		}
	]
};


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
};




//var education = {
//	"schools" : [
//		{
//			"name" : "UNIPD - International economics",
//			"location" : "Padova - IT",
//			"degree" : "Degree",
//			"date" : 2010,
//			"major" : ["International economics", "Statistics"]
//		},
//		{
//			"name" : "UNIPD - International economics",
//			"location" : "Padova - IT",
//			"degree" : "Master Degree",
//			"date" : 2013,
//			"major" : ["Ebusiness", "Innovation Management", "Marketing"]
//		}
//	],
//
//	"OnlineCourses" : [
//		{
//			"title" : "Design of Artifacts in Society",
//			"school" : "Coursera",
//			"date" : 2014,
//			"url" : "https://www.coursera.org/"
//		},
//		{
//			"title" : "Front End devoloper Nanodegree",
//			"school" : "Coursera",
//			"date" : 2015,
//			"url" : "https://www.udacity.org/"
//		}
//	]
//};
//
//var projects = {
//	"projects" : [
//		{
//			"title" : "Oxydo",
//			"date" : "2015",
//			"description" : "Website for italian brand of glasses",
//			"images" : [
//				"/images/project01_1.png",
//				"/images/project01_2.png"
//			]
//		},
//		{
//			"title" : "Solidred",
//			"date" : "2015",
//			"description" : "Design agency website",
//			"images" : [
//				"/images/project01_1.png",
//				"/images/project01_2.png"
//			]
//		}
//	]
//}


