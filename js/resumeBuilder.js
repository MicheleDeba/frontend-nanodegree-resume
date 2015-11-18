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




