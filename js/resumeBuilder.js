/**
*
* Fie For Roger Woodroofe's Resume content
* Based on Udacity course material https://www.udacity.com/course/javascript-basics--ud804
*
*/

/**
* bio JSON object
* @description stores biographical related values for an individual
*/
var bio = {
  "name" : "Roger Woodroofe",
  "role" : "Web Developer and IT Support",
  "welcomeMsg" : "I'm available for work in Auckland, Waikato, or remote - contact me now.",
  "bioPic" : "images/roger-profile-image.jpg",
  "contacts" : {
    "mobile" : "+64 27 2932397",
    "email" : "RogerWoodroofe@gmail.com",
    "twitter" : "rogyw",
    "github" : "rogyw",
    "blog" : "roger.navevent.co.nz/blog",
    "location" : "Waikato/Auckland NZ",
    "genericPost" : "PO Box 11390, Ellerslie, Auckland 1542, New Zealand",
    "genericPostTitle" : "Post",
    "linkedin": "https://nz.linkedin.com/in/rogerwoodroofe"
  },
  "skills" : [
    "Web Development",
    "HTML / CSS",
    "Git / GitHub",
    "Small Business IT Support",
    "User Documentation",
    "Application Support",
    "PHP",
    "MySQL",
    "Small Business Content Management (CMS) admin and setup",
    "Joomla",
    "Silverstripe",
    "Wordpress",
    "Concrete5"
  ]
};

/**
* @description Displays the individual's biographical information using the
* bio JSON object and HTML template strings
*/
bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contacts.genericPostTitle).replace("%data%", bio.contacts.genericPost);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
  var formattedLinkedin = HTMLlinkedin.replace(/%data%/g, bio.contacts.linkedin);
  var formattedBlog = HTMLblog.replace(/%data%/g, bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

  $("#header").prepend(formattedBioPic);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedTwitter);
  /*$("#topContacts").append(formattedBlog);*/
  $("#topContacts").append(formattedLocation);
  $("#topContacts").append(formattedLinkedin);
  $("#topContacts").append(formattedContactGeneric);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedTwitter);
  /*$("#footerContacts").append(formattedBlog);*/
  $("#footerContacts").append(formattedLinkedin);

  $("#header").append(formattedWelcomeMsg);
  $("title").prepend(bio.name + " - ");

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var mySkills = bio.skills.slice();

    while(mySkills.length > 0) {
      var formattedSkills = HTMLskills.replace("%data%", mySkills.shift());
      $("#skills").append(formattedSkills);
    }
  }
};

/**
* @description Displays the individual's GitHub feed using the
* polymer google-feeds response. HTML must include a tag with ID githubFeedContent
*/
bio.displayGithubFeed = function() {
  window.addEventListener("google-feeds-response", function(e) {
    for(var entry in e.detail.feed.entries) {
      var content = e.detail.feed.entries[entry].content;

      //Fix any relative URLs in Feed
      content = content.replace(/href="\//g, 'href="https://www.github.com/');

      $("#githubFeedContent").append("<hr>");
      $("#githubFeedContent").append(content);
    }
  });
};

/**
* education JSON object
* @description stores education related values for an individual
*/
var education = {
  "schools": [
  {
    "name": "University of Auckland",
    "location": "Glen Innes, Auckland, NZ",
    "degree": "Bachelor of Technology (Hons)",
    "major":  "Information Technology",
    "years": "1993 - 1996",
    "url" : "http://www.auckland.ac.nz/"
  }],
  "onlineCourses": [
  {
    "title": "Browser Rendering Optimization",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/courses/ud860"
  },
  {
    "title": "Website Performance Optimization",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/courses/ud884"
  },
  {
    "title": "Writing READMEs",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/writing-readmes--ud777"
  },
  {
    "title": "Object-Oriented Javascript",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/object-oriented-javascript--ud015"
  },
  {
    "title": "HTML5 Canvas",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/html5-canvas--ud292"
  },
  {
    "title": "Intro to jQuery",
    "school": "Udacity",
    "dates": "2015",
    "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
  },
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
  }],
  "otherCourses": [
  {
    "title": "Advanced Communicator Silver",
    "school": "Toastmasters International",
    "location": "Remuera, Auckland, NZ",
    "dates": "2013",
    "url": "http://www.toastmasters.org/Resources/Education-Program/Advanced-Communication"
  },
  {
    "title": "Competent Leader",
    "school": "Toastmasters International",
    "location": "Remuera, Auckland, NZ",
    "dates": "2003",
    "url": "http://www.toastmasters.org/Resources/Education-Program/Advanced-Communication"
  },
  {
    "title": "Workplace First Aid in Outdoors",
    "school": "NZ Mountain Saftey",
    "location": "Green Bay, Auckland, NZ",
    "dates": " Sept 2013",
    "url": "http://www.mountainsafety.org.nz/training/Outdoor-First-Aid/Overview.asp"
  },
  {
    "title": "Bush Safety course",
    "school": "Open Polytechnic of NZ",
    "location": "Correspondence",
    "dates": "2002",
    "url": "http://www.openpolytechnic.ac.nz/"
  }]
};


/**
* @description Displays the individual's School information using the
* education JSON object and HTML template strings. Requires HTML tag with ID education
*/
education.displaySchools = function() {
  if (education.schools.length > 0) {
    for (var school in education.schools){
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);

      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }
};

/**
* @description Displays the individual's online courses information using the
* education JSON object and HTML template strings. Requires HTML tag with ID education
*/
education.displayOnlineCourses = function() {
// Takes in the heading to display and the courses
// assumes div with class education-entry is available

if(education.onlineCourses.length > 0) {
  $("#education").append(HTMLonlineClasses);

  for (var course in education.onlineCourses){
    $("#education").append(HTMLonlineStart);

    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    formattedCourseTitle = formattedCourseTitle.replace("%url%", education.onlineCourses[course].url);
    var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;

    var formattedCourseDates = HTMLonlineDates.replace("%data%",  education.onlineCourses[course].dates);
    var formattedCourseURL = HTMLonlineURL.replace(/%data%/g,  education.onlineCourses[course].url);

    $(".education-entry:last").append(formattedCourseTitleSchool);
    $(".education-entry:last").append(formattedCourseDates);
    $(".education-entry:last").append(formattedCourseURL);
  }
}
};

/**
* @description Displays the individual's Other Courses information using the
* education JSON object and HTML template strings. Requires HTML tag with ID education
*/
education.displayOtherCourses = function() {

  if(education.otherCourses.length> 0) {
    $("#education").append(HTMLotherClasses);

    for (var course in education.otherCourses){
      $("#education").append(HTMLotherStart);

      var formattedCourseTitle = HTMLotherTitle.replace("%data%", education.otherCourses[course].title);
      formattedCourseTitle = formattedCourseTitle.replace("%url%", education.otherCourses[course].url);
      var formattedCourseSchool = HTMLotherSchool.replace("%data%", education.otherCourses[course].school);
      var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;

      var formattedCourseLocation = HTMLotherLocation.replace("%data%",  education.otherCourses[course].location);
      var formattedCourseDates = HTMLotherDates.replace("%data%",  education.otherCourses[course].dates);
      var formattedCourseURL = HTMLotherURL.replace(/%data%/g,  education.otherCourses[course].url);

      $(".education-entry:last").append(formattedCourseTitleSchool);
      $(".education-entry:last").append(formattedCourseLocation);
      $(".education-entry:last").append(formattedCourseDates);
      $(".education-entry:last").append(formattedCourseURL);
    }
  }
};

/**
* @description Displays the individual's education information using the
* education JSON object and associated functions for each subtype of education.
*/
education.display = function() {
  education.displaySchools();
  education.displayOnlineCourses();
  education.displayOtherCourses();
};

/**
* work JSON object
* @description stores work related values for an individual
*/
var work = {
  "jobs": [
  {
    "employer": "Orienteering NZ (Contract)",
    "title": "Online Coordinator",
    "location": "Matamata, Waikato, NZ",
    "dates": "April 2014 - current",
    "description": "Ensuring Orienteering NZ is managing its online profile in a best-practice way. Wordpress site administration. Social media accounts management. Monitoring, issue management, and communication with remote site development team. Prioritised remote end user support.",
    "url": "http://www.orienteering.org.nz/"

  },
  {
    "employer": "Self Employed (Casual)",
    "title": "IT Maintenance and Support",
    "location": "Greenlane, Auckland, NZ",
    "dates": "2001 - present",
    "description": "IT support services for several Small Businesses. Computer and network setup, maintenance and support. Application Support. Staff training and procedures documentation. On-call onsite and remote support.",
    "url": "http://roger.navevent.co.nz/"
  },
  {
    "employer": "Codenza Limited",
    "title": "Web Developer and Support",
    "location": "East Tamaki, Auckland, NZ",
    "dates": "Nov 2011 - Dec 2012",
    "description": "Website development and support. CSS, HTML, PHP, Joomla website upgrades, configuration, and new sites. Joomla template development and client support. User documentation. Shopping cart site upgrades. Content updates. Site maintenance. Testing and issue resolution.",
    "url": "http://www.codenza.co.nz/"
  },
  {
    "employer": "Volunteer / Self Employed (Casual)",
    "title": "Web Developer, Administrator and Support",
    "location": "Ellerslie, Auckland, NZ",
    "dates": "2001 - 2014",
    "description": "Provided customised website development adhering to web standards validation. CMS: Silverstripe, Concrete5, Joomla, Wordpress. HTML4+5/XHTML and CSS. MySQL database maintenance. Maintenance and improvement of sites in PHP, Coldfusion5, Javascript, jQuery. Online forms, and database structures; Website support and advice. Management of hosting, domain names, email services; assisted clients and staff with content creation; maintained and implemented smooth change-over; Speed enhancement, upgrades, logs analysis, SEO and troubleshooting.",
    "url": "http://roger.navevent.co.nz/"
  },
  {
    "employer": "Symantec New Zealand Limited",
    "title": "Information Developer",
    "location": "Grey Lynn, Auckland, NZ",
    "dates": "June 1998 - May 1999",
    "description": "User documentation update and maintenance to adhere to style guidelines. Worked with overseas senior editor.  Provided updates to international translation team. Identified and reported documentation requirements for version releases.",
    "url": "http://www.symantec.com/"
  },
  {
    "employer": "Self Employed (Contract)",
    "title": "Software Developer",
    "location": "Grey Lynn, Auckland, NZ",
    "dates": "Dec 1996 - June 1998",
    "description": "Development in C programming language with network protocols NetBIOS, IPX and TCP/IP and Winsock2/WATTTCP/NDIS network driver specifications. Development team member. Minimal assembly language work. Windows online user help file creation. User manual supplements. Documentation maintenance and project management.",
    "url": "http://roger.navevent.co.nz/"
  }
  ]
};

/**
* @description Displays the individual's work information using the
* work JSON object and HTML template strings. Requires HTML tag with ID workExperience.
*/
work.display = function() {

  if (work.jobs.length > 0) {
    for (var job in work.jobs){
      $("#workExperience").append(HTMLworkStart);

      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      formattedWorkEmployer = formattedWorkEmployer.replace("%url%", work.jobs[job].url);
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
};

/**
* projects JSON object
* @description stores project related values for an individual
*/
var projects = {
  "projects": [
   {
    "title": "Silverstripe Website - AOC",
    "dates": "2015",
    "description": "Silverstripe CMS setup. Added content from old static sites. Template customised.",
    "images": ["http://roger.navevent.co.nz/portfolio/img/past_work_aoc_ss3.png"],
    "url": "http://www.orienteeringauckland.org.nz/"
  },
  {
    "title": "Joomla Template (Codenza) - BGate",
    "dates": "2012",
    "description": "Joomla Template initial build in HTML/CSS created from supplied design images. CMS setup and added content. Created documentation for website.",
    "images": ["http://roger.navevent.co.nz/portfolio/img/past_work_bg.png"],
    "url": "http://www.bgate.com/cms/"
  },
  {
    "title": "Joomla Template (Codenza) - Added Insight",
    "dates": "2012",
    "description": "Joomla Template initial build in HTML/CSS created from supplied design pdf mockup. CMS setup and added content. Suggested small design improvements.",
    "images": ["http://roger.navevent.co.nz/portfolio/img/past_work_ai.png"],
    "url": "http://www.addedinsight.co.nz/"
  }
  ]
};

/**
* @description Displays the individual's project information using the
* projects JSON object and HTML template strings. Requires HTML tag with ID projects
*/
projects.display = function(){
  if (projects.projects.length > 0) {
    for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.projects[project].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for (var image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};

/**
* @description locationizer provides a list of locations from the provided
* work_obj JSON object. Used by helper.js map function.
* @param {object} work_obj - the work JSON object containing work information
* @returns {array} an array of location strings
*/
function locationizer(work_obj) {
  var locations = [];
  if(work_obj.jobs.length > 0){
    for (var job in work_obj.jobs){
      locations.push(work_obj.jobs[job].location);
    }
    return locations;
  }
}


/**
* @description inName - international name function- capitalises the surname.
* @param {string} full_name - names of a person seperated by space. e.g. "Joe Jack Bloggs"
* @returns {string} all names are returned in Title Case and last name in ALL-CAPS.
*/
function inName(full_name) {
  var internationalName = full_name;

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

    return internationalName;
  }


/**
* Uncomment the following line to add Udacity exercise - Surname Capitalisation button
*/
//$("#main").append(internationalizeButton);

/**
* Call all display functions to generate page
*/
bio.display();
projects.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);
bio.displayGithubFeed();
