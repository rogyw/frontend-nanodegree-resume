/*
*
* Fie For Roger's Resume content
*
*/

var bio = {
  "name" : "Roger Woodroofe",
  "role" : "Web Developer and IT Support",
  "welcomeMsg" : "Contact me now to discuss how I can help your business succeed.",
  "bioPic" : "images/roger-profile-image.jpg",
  "contacts" : {
    "mobile" : "+64 27 2932397",
    "email" : "RogerWoodroofe@gmail.com",
    "twitter" : "@rogyw",
    "github" : "turtleline",
    "blog" : "roger.navevent.co.nz/blog/",
    "location" : "Waikato, NZ",
    "genericPost" : "PO Box 11390, Ellerslie, Auckland 1542, New Zealand",
    "genericPostTitle" : "Post"
  },
  "skills" : [
    "Web Development", "HTML / CSS",  "Git / GitHub", "IT Support", "User Documentation", "Application Support"
  ]
};

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

$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedContactGeneric);

$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var mySkills = bio.skills.slice();

  while(mySkills.length > 0) {
    var formattedSkills = HTMLskills.replace("%data%", mySkills.shift());
    $("#skills").append(formattedSkills);
  };
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
    "school": "NZ Mountain Saftey",
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

var work = {
  "jobs": [
    {
      "employer": "Orienteering NZ (Contract)",
      "title": "Online Coordinator",
      "location": "Matamata, Waikato, NZ",
      "dates": "April 2014 - current",
      "description": "The purpose of the Online Co-ordinator is to ensure the Orienteering NZ is managing its online profile in a best-practice way. Wordpress site administration"
    },
    {
      "employer": "Self Employed (Casual)",
      "title": "IT Maintenance and Support",
      "location": "Greenlane, Auckland, NZ",
      "dates": "2001 - present",
      "description": "IT support services for several Small Businesses. Computer and network setup, maintenance and support. Application Support. Staff training and procedures documentation. On-call onsite and remote support."
    },
    {
      "employer": "Codenza Limited",
      "title": "Web Developer and Support",
      "location": "East Tamaki, Auckland, NZ",
      "dates": "Nov 2011 - Dec 2012",
      "description": "Website development and support. CSS, HTML, PHP, Joomla website upgrades, configuration, and new sites. Joomla template development and client support. User documentation. Shopping cart site upgrades. Content updates. Site maintenance. Testing and issue resolution."
    },
    {
      "employer": "Volunteer / Self Employed (Casual)",
      "title": "Web Developer, Administrator and Support",
      "location": "Ellerslie, Auckland, NZ",
      "dates": "2001 - 2014",
      "description": "Provided customised website development adhering to web standards validation. CMS: Silverstripe, Concrete5, Joomla, Wordpress. HTML4+5/XHTML and CSS. MySQL database maintenance. Maintenance and improvement of sites in PHP, Coldfusion5, Javascript, jQuery. Online forms, and database structures; Website support and advice. Management of hosting, domain names, email services; assisted clients and staff with content creation; maintained and implemented smooth change-over; Speed enhancement, upgrades, logs analysis, SEO and troubleshooting."
    },
    {
      "employer": "Symantec New Zealand Limited",
      "title": "Information Developer",
      "location": "Grey Lynn, Auckland, NZ",
      "dates": "June 1998 - May 1999",
      "description": "User documentation update and maintenance to adhere to style guidelines. Worked with overseas senior editor.  Provided updates to international translation team. Identified and reported documentation requirements for version releases."
    },
    {
      "employer": "Self Employed (Contract)",
      "title": "Software Developer",
      "location": "Grey Lynn, Auckland, NZ",
      "dates": "Dec 1996 - June 1998",
      "description": "Development in C programming language with network protocols NetBIOS, IPX and TCP/IP and Winsock2/WATTTCP/Network Driver specifications. Development team member. Minimal assembly language work. Windows online user help file creation. User manual supplements. Documentation maintenance and project management."
    }
    ]
};

function locationizer(work_obj) {
  var locations = [];
  if(work_obj.jobs.length > 0){
    for (var job in work_obj.jobs){
      locations.push(work_obj.jobs[job].location);
    }
    return locations;
  }

}

function displayWork() {

  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);

    for (job in work.jobs){
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedworkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedworkEmployerTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

var projects = {
  "projects": [
  {
    "title": "",
    "dates": "",
    "description": "",
    "images": []
  }
  ]
};


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});




function inName(full_name) {
  //full_name is a string containing the names of a person seperated by space.
  //returns: all names are returned in Title Case and last name in ALL-CAPS.

    var internationalName = full_name;

console.log(internationalName);

    // remove all uppercase letters
    internationalName = internationalName.trim().toLowerCase();

    //convert name string to array of names
    var tempNameArray = internationalName.split(" ");

    //extract the surname and change to uppercase
    var surname = tempNameArray.pop();
    surname = surname.toUpperCase();

    //titlecase on all first names
    var name = "";
    while(tempNameArray.length > 0) {
        var namePart = tempNameArray.shift();
        name = name + namePart[0].toUpperCase() + namePart.slice(1) + " ";
    }

    //join first names and surname
    internationalName = name + surname;
console.log(internationalName);

    return internationalName;
}


inName("roGer woodRoofe");

locationizer(work);

$("#main").append(internationalizeButton);

