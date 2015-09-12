/*
*
* Fie For Roger's Resume content
*
*/

var bio = {
  "name" : "Roger Woodroofe",
  "role" : "Web Developer and IT Support",
  "contactGenericTitle" : "Post",
  "contactGeneric" : "PO Box 11390, Ellerslie, Auckland 1542, New Zealand",
  "mobile" : "+64 27 2932397",
  "email" : "RogerWoodroofe@gmail.com",
  "twitter" : "@rogyw",
  "github" : "turtleline",
  "blog" : "",
  "location" : "Waikato, NZ",
  "bioPic" : "images/roger-profile-image.jpg",
  "welcomeMsg" : "Contact me now to discuss how I can help your business succeed.",
  "skills" : [
    "Web Development", "HTML / CSS",  "Git / GitHub", "IT Support", "User Documentation", "Application Support"
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contactGenericTitle).replace("%data%", bio.contactGeneric);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedBlog = HTMLblog.replace("%data%", bio.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills;
var mySkills = bio.skills.slice();


$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedContactGeneric);

$("#header").append(HTMLskillsStart);

while(mySkills.length > 0) {
  formattedSkills = HTMLskills.replace("%data%", mySkills.shift());
  $("#skills").append(formattedSkills);
}
