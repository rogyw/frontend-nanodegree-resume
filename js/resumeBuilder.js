/*
*
* Fie For Roger's Resume content
*
*/

var bio = {
  "name" : "Roger Woodroofe",
  "role" : "Web Developer and IT Support",
  "bioPic" : "images/roger-profile-image.jpg",
  "contacts" : {
    "mobile" : "+64 27 2932397",
    "email" : "RogerWoodroofe@gmail.com",
    "twitter" : "@rogyw",
    "github" : "turtleline",
    "blog" : "",
    "location" : "Waikato, NZ",
    "genericPost" : "PO Box 11390, Ellerslie, Auckland 1542, New Zealand",
    "genericPostTitle" : "Post"
  },
  "welcomeMsg" : "Contact me now to discuss how I can help your business succeed.",
  "skills" : [
    "Web Development", "HTML / CSS",  "Git / GitHub", "IT Support", "User Documentation", "Application Support"
  ]
};

var education = {
  "schools": [
  {
    "name": "University of Auckland",
    "city": "Auckland, NZ",
    "degree": "Bachelor of Technology (hons.)",
    "major": [
      "Information Technology"
    ],
    "years": "1993 - 1996"
  }
  ],
  "onlineCourses": [
  {
    "title": "Javascript Basics",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/javascript-basics--ud804"
  },
  {
    "title": "How to use Git and GitHub",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
  },
  {
    "title": "Responsive Images",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/responsive-images--ud882"
  },
  {
    "title": "Responsive Web Design Fundamentals",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
  },
  {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
  }
  ],
  "otherCourses": [
  {
    "title": "Advanced Communicator Silver",
    "school": "Toastmasters International",
    "city": "Auckland, NZ",
    "dates": "2013",
    "url": "http://www.toastmasters.org/Resources/Education-Program/Advanced-Communication"
  },
  {
    "title": "Workplace First Aid in Outdoors",
    "name": "NZ Mountain Saftey",
    "city": "Auckland, NZ",
    "dates": " Sept 2013",
    "url": "http://www.mountainsafety.org.nz/training/Outdoor-First-Aid/Overview.asp"
  },
  {
    "title": "Bush Safety course",
    "school": "Open Polytechnic of NZ",
    "city": "Correspondence",
    "dates": "2002",
    "url": "http://www.openpolytechnic.ac.nz/"
  }
  ]
};


var work = {};
work.employer = "Contract - Orienteering NZ";
work.position = "Online Coordinator";
work.workDates = "April 2014 - current";
work.location = "Remote";
work.description = "The purpose of the Online Co-ordinator is to ensure the Orienteering NZ is managing its online profile in a best-practice way.";

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["position"]);
var formattedWorkDates = HTMLworkDates.replace("%data%", work["workDates"]);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work["location"]);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work["description"]);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contacts.genericPostTitle).replace("%data%", bio.contacts.genericPost);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

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

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDescription);

