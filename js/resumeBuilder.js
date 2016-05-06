"use strict";
/*
 * File For Roger Woodroofe's Resume content
 * Based on Udacity course material https://www.udacity.com/course/javascript-basics--ud804
 * Revised as an excercise refactoring to use model-view-* (model-view-octopus)
 * TODO Further refactoring could be completed.
 */

// set jshint to ignore console, alert, etc
/* jshint devel: true */

// set jshint to ignore global $ and external global google
/* global $: false */
/* global google */

// declare a global map variable
var map;

$(function() {
    // ==================== Model ====================
    /**
     * @namespace model
     * @description Model for Model-View-Object application organisation
     */
    var model = {
        /**
         * @function model.init
         * @description initialises the application model
         */
        "init": function() {

            /**
             * @description {object} model.bio - JSON object with biographical related values for an individual
             */
            model.bio = {
                "name": "Roger Woodroofe",
                "role": "Web Developer and IT Support",
                "welcomeMsg": "I'm available for work in Auckland, Waikato, or remote - contact me now.",
                "bioPic": "images/roger-profile-image.jpg",
                "contacts": {
                    "mobile": "+64 27 2932397",
                    "email": "RogerWoodroofe@gmail.com",
                    "twitter": "rogyw",
                    "github": "rogyw",
                    "blog": "roger.navevent.co.nz/blog",
                    "portfolio": "roger.navevent.co.nz/portfolio/",
                    "location": "Waikato/Auckland NZ",
                    "genericPost": "PO Box 11390, Ellerslie, Auckland 1542, New Zealand",
                    "genericPostTitle": "Post",
                    "linkedin": "https://nz.linkedin.com/in/rogerwoodroofe"
                },
                "skills": [
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
             * @description {object} model.education - JSON object with education related values for an individual
             */
            model.education = {
                "schools": [{
                    "name": "University of Auckland",
                    "location": "Glen Innes, Auckland, NZ",
                    "degree": "Bachelor of Technology (Hons)",
                    "major": "Information Technology",
                    "years": "1993 - 1996",
                    "url": "http://www.auckland.ac.nz/"
                }],
                "onlineCourses": [{
                    "title": "Browser Rendering Optimization",
                    "school": "Udacity",
                    "dates": "2016",
                    "url": "https://www.udacity.com/courses/ud860"
                }, {
                    "title": "Website Performance Optimization",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud884"
                }, {
                    "title": "Writing READMEs",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud777"
                }, {
                    "title": "Object-Oriented Javascript",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud015"
                }, {
                    "title": "HTML5 Canvas",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud292"
                }, {
                    "title": "Intro to jQuery",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud245"
                }, {
                    "title": "Javascript Basics",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud804"
                }, {
                    "title": "How to use Git and GitHub",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud775"
                }, {
                    "title": "Responsive Images",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud882"
                }, {
                    "title": "Responsive Web Design Fundamentals",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud893"
                }, {
                    "title": "Intro to HTML and CSS",
                    "school": "Udacity",
                    "dates": "2015",
                    "url": "https://www.udacity.com/courses/ud304"
                }],
                "otherCourses": [{
                    "title": "Advanced Communicator Silver",
                    "school": "Toastmasters International",
                    "location": "Remuera, Auckland, NZ",
                    "dates": "2013",
                    "url": "http://www.toastmasters.org/Resources/Education-Program/Advanced-Communication"
                }, {
                    "title": "Competent Leader",
                    "school": "Toastmasters International",
                    "location": "Remuera, Auckland, NZ",
                    "dates": "2003",
                    "url": "http://www.toastmasters.org/Resources/Education-Program/Advanced-Communication"
                }, {
                    "title": "Workplace First Aid in Outdoors",
                    "school": "NZ Mountain Saftey",
                    "location": "Green Bay, Auckland, NZ",
                    "dates": " Sept 2013",
                    "url": "http://www.mountainsafety.org.nz/training/Outdoor-First-Aid/Overview.asp"
                }, {
                    "title": "Bush Safety course",
                    "school": "Open Polytechnic of NZ",
                    "location": "Correspondence",
                    "dates": "2002",
                    "url": "http://www.openpolytechnic.ac.nz/"
                }]
            };

            /**
             * @description {object} model.work - JSON object with work related values for an individual
             */
            model.work = {
                "jobs": [{
                    "employer": "Orienteering NZ (Contract)",
                    "title": "Online Coordinator",
                    "location": "Matamata, Waikato, NZ",
                    "dates": "April 2014 - current",
                    "description": "Ensuring Orienteering NZ is managing its online profile in a best-practice way. Wordpress site administration. Social media accounts management. Monitoring, issue management, and communication with remote site development team. Prioritised remote end user support.",
                    "url": "http://www.orienteering.org.nz/"

                }, {
                    "employer": "Self Employed (Casual)",
                    "title": "IT Maintenance and Support",
                    "location": "Greenlane, Auckland, NZ",
                    "dates": "2001 - present",
                    "description": "IT support services for several Small Businesses. Computer and network setup, maintenance and support. Application Support. Staff training and procedures documentation. On-call onsite and remote support.",
                    "url": "http://roger.navevent.co.nz/"
                }, {
                    "employer": "Codenza Limited",
                    "title": "Web Developer and Support",
                    "location": "East Tamaki, Auckland, NZ",
                    "dates": "Nov 2011 - Dec 2012",
                    "description": "Website development and support. CSS, HTML, PHP, Joomla website upgrades, configuration, and new sites. Joomla template development and client support. User documentation. Shopping cart site upgrades. Content updates. Site maintenance. Testing and issue resolution.",
                    "url": "http://www.codenza.co.nz/"
                }, {
                    "employer": "Volunteer / Self Employed (Casual)",
                    "title": "Web Developer, Administrator and Support",
                    "location": "Ellerslie, Auckland, NZ",
                    "dates": "2001 - 2014",
                    "description": "Provided customised website development adhering to web standards validation. CMS: Silverstripe, Concrete5, Joomla, Wordpress. HTML4+5/XHTML and CSS. MySQL database maintenance. Maintenance and improvement of sites in PHP, Coldfusion5, Javascript, jQuery. Online forms, and database structures; Website support and advice. Management of hosting, domain names, email services; assisted clients and staff with content creation; maintained and implemented smooth change-over; Speed enhancement, upgrades, logs analysis, SEO and troubleshooting.",
                    "url": "http://roger.navevent.co.nz/"
                }, {
                    "employer": "Symantec New Zealand Limited",
                    "title": "Information Developer",
                    "location": "Grey Lynn, Auckland, NZ",
                    "dates": "June 1998 - May 1999",
                    "description": "User documentation update and maintenance to adhere to style guidelines. Worked with overseas senior editor.  Provided updates to international translation team. Identified and reported documentation requirements for version releases.",
                    "url": "http://www.symantec.com/"
                }, {
                    "employer": "Self Employed (Contract)",
                    "title": "Software Developer",
                    "location": "Grey Lynn, Auckland, NZ",
                    "dates": "Dec 1996 - June 1998",
                    "description": "Development in C programming language with network protocols NetBIOS, IPX and TCP/IP and Winsock2/WATTTCP/NDIS network driver specifications. Development team member. Minimal assembly language work. Windows online user help file creation. User manual supplements. Documentation maintenance and project management.",
                    "url": "http://roger.navevent.co.nz/"
                }]
            };

            /**
             * @description {object} model.projects - JSON object with projects related values for an individual
             */
            model.projects = {
                "projects": [{
                    "title": "Silverstripe Website - AOC",
                    "dates": "2015",
                    "description": "Silverstripe CMS setup. Added content from old static sites. Template customised.",
                    "images": ["http://roger.navevent.co.nz/portfolio/img/past_work_aoc_ss3.png"],
                    "url": "http://www.orienteeringauckland.org.nz/"
                }, {
                    "title": "Joomla Template (Codenza) - BGate",
                    "dates": "2012",
                    "description": "Joomla Template initial build in HTML/CSS created from supplied design images. CMS setup and added content. Created documentation for website.",
                    "images": ["http://roger.navevent.co.nz/portfolio/img/past_work_bg.png"],
                    "url": "http://www.bgate.com/cms/"
                }, {
                    "title": "Joomla Template (Codenza) - Added Insight",
                    "dates": "2012",
                    "description": "Joomla Template initial build in HTML/CSS created from supplied design pdf mockup. CMS setup and added content. Suggested small design improvements.",
                    "images": ["http://roger.navevent.co.nz/portfolio/img/past_work_ai.png"],
                    "url": "http://www.addedinsight.co.nz/"
                }]
            };

            /**
             * @description {boolean} model.internationalizeEnabled - toggle state of internationalise name capitalisation excercise.
             */
            model.internationalizeEnabled = false;
        },

        /**
         * @function model.getInternationliseEnabled
         * @description returns the enabled state of internationalise button
         * @returns {boolean} status of Internationalise Button. True if enabled, false if disabled.
         */
        "getInternationliseEnabled": function() {
            return (model.internationalizeEnabled);
        },

        /**
         * @function model.getAllBio
         * @description returns the Bio information
         * @returns {Object} JSON Bio object
         */
        "getAllBio": function() {
            return model.bio;
        },

        /**
         * @function model.getAllWork
         * @description returns the Work information
         * @returns {Object} JSON Work object
         */
        "getAllWork": function() {
            return model.work;
        },

        /**
         * @function model.getAllEducation
         * @description returns the Education information
         * @returns {Object} JSON Education object
         */
        "getAllEducation": function() {
            return model.education;
        },

        /**
         * @function model.getAllProjects
         * @description returns the Projects information
         * @returns {Object} JSON Projects object
         */
        "getAllProjects": function() {
            return model.projects;
        }
    };


    // ==================== Octopus ====================
    /**
     * @namespace octopus
     * @description The Octopus in "Model-View-Octopus"
     */
    var octopus = {

        /**
         * @function octopus.init
         * @description initialises the application, and triggers the display of all views
         */
        "init": function() {
            model.init();
            viewBio.init();
            viewProjects.init();
            viewWork.init();
            viewEducation.init();
            viewGitHubFeed.init();
            viewMap.init();

            viewBio.render();
            viewProjects.render();
            viewWork.render();
            viewEducation.render();
        },

        /**
         * @function octopus.getInternationliseEnabled
         * @description returns the enabled state of internationalise button
         * @returns {boolean} true if enabled, false if disabled
         */
        "getInternationliseEnabled": function() {
            return model.getInternationliseEnabled();
        },

        /**
         * @function octopus.getAllBio
         * @description returns the Bio information
         * @returns {Object} JSON Bio object
         */
        "getAllBio": function() {
            return model.getAllBio();
        },

        /**
         * @function octopus.getAllWork
         * @description returns the Work information
         * @returns {Object} JSON Work object
         */
        "getAllWork": function() {
            return model.getAllWork();
        },

        /**
         * @function octopus.getAllEducation
         * @description returns the Education information
         * @returns {Object} JSON Education object
         */
        "getAllEducation": function() {
            return model.getAllEducation();
        },

        /**
         * @function octopus.getAllProjects
         * @description returns the Projects information
         * @returns {Object} JSON Projects object
         */
        "getAllProjects": function() {
            return model.getAllProjects();
        },

        /**
         * @function octopus.locationizer
         * @description provides a list of locations from the provided
         * work_obj JSON object.
         * @param {object} work_obj - the work JSON object containing work information
         * @returns {array} an array of location strings
         */
        "locationizer": function(work_obj) {
            var locations = [];
            if (work_obj.jobs.length > 0) {
                for (var job in work_obj.jobs) {
                    locations.push(work_obj.jobs[job].location);
                }
                return locations;
            }
        },

        /**
         * @function octopus.locationFinder
         * @description returns an array of every location string from the JSONs
         * written for bio, education, and work.
         * @returns {string[]} locations included in bio, education and work
         */
        "locationFinder": function() {

            // initializes an empty array
            var locations = [];
            var bio = octopus.getAllBio();
            var education = octopus.getAllEducation();
            var work = octopus.getAllWork();

            // adds the single location property from bio to the locations array
            locations.push(bio.contacts.location);

            // iterates through school locations and appends each location to
            // the locations array
            for (var school in education.schools) {
                locations.push(education.schools[school].location);
            }

            // iterates through work locations and appends each location to
            // the locations array
            for (var job in work.jobs) {
                locations.push(work.jobs[job].location);
            }

            return locations;
        },

        /**
         * @function octopus.inName
         * @description international name function - capitalises the surname.
         * @param {string} full_name - names of a person seperated by space. e.g. "Joe Jack Bloggs"
         * @returns {string} all names are returned in Title Case and last name in ALL-CAPS.
         */
        "inName": function(full_name) {
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
            while (tempNameArray.length > 0) {
                var namePart = tempNameArray.shift();
                name = name + namePart[0].toUpperCase() + namePart.slice(1) + " ";
            }

            //join first names and surname
            internationalName = name + surname;

            return internationalName;
        }
    };


    // ==================== ViewBio ====================
    /**
     * @namespace viewBio
     * @description View for Biographical information.  A view in "Model-View-Octopus" structure.
     */
    var viewBio = {

        /**
         * @function viewBio.init
         * @description inialises the application view viewBio.
         * Initialises the views HTML template strings and gets the Bio JSON object.
         */
        "init": function() {
            /**
             * These are HTML strings. As part of the course, JavaScript functions are used to
             * replace the %data%, %url%, %title% placeholder text you see in them.
             */
            viewBio.HTMLheaderName = '<h1 id="name">%data%</h1>';
            viewBio.HTMLheaderRole = '<span class="role">%data%</span><hr/>';

            viewBio.HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
            viewBio.HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
            viewBio.HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><a href="mailto:%data%">%data%</a></li>';
            viewBio.HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><a href="https://twitter.com/%data%">@%data%</a></li>';
            viewBio.HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span> <a href="https://github.com/%data%">%data%</a></li>';
            viewBio.HTMLlinkedin = '<li class="flex-item"><span class="orange-text">LinkedIn</span><a href="%data%">%data%</a></li>';
            viewBio.HTMLblog = '<li class="flex-item"> <span class="orange-text">blog</span><a href="http://%data%/">%data%</a></li>';
            viewBio.HTMLportfolio = '<li class="flex-item"> <span class="orange-text">portfolio</span><a href="http://%data%">%data%</a></li>';
            viewBio.HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

            viewBio.HTMLbioPic = '<img src="%data%" class="biopic">';
            viewBio.HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

            viewBio.HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
            viewBio.HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

            viewBio.internationalizeButton = '<button>Internationalize</button>';

            viewBio.bio = octopus.getAllBio();

        },


        /**
         * @function viewBio.render
         * @description Displays the individual's biographical information using the
         * bio JSON object and the views HTML template strings.
         */
        "render": function() {
            var bio = viewBio.bio;
            var formattedName = viewBio.HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = viewBio.HTMLheaderRole.replace("%data%", bio.role);

            var formattedContactGeneric = viewBio.HTMLcontactGeneric.replace("%contact%", bio.contacts.genericPostTitle).replace("%data%", bio.contacts.genericPost);

            var formattedMobile = viewBio.HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = viewBio.HTMLemail.replace(/%data%/g, bio.contacts.email);
            var formattedTwitter = viewBio.HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
            var formattedGithub = viewBio.HTMLgithub.replace(/%data%/g, bio.contacts.github);
            var formattedLinkedin = viewBio.HTMLlinkedin.replace(/%data%/g, bio.contacts.linkedin);
            //var formattedBlog = viewBio.HTMLblog.replace(/%data%/g, bio.contacts.blog);
            var formattedPortfolio = viewBio.HTMLportfolio.replace(/%data%/g, bio.contacts.portfolio);
            var formattedLocation = viewBio.HTMLlocation.replace("%data%", bio.contacts.location);

            var formattedBioPic = viewBio.HTMLbioPic.replace("%data%", bio.bioPic);
            var formattedWelcomeMsg = viewBio.HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

            $("#header").prepend(formattedBioPic);
            $("#header").prepend(formattedRole);
            $("#header").prepend(formattedName);

            $("#topContacts").append(formattedMobile);
            $("#topContacts").append(formattedEmail);
            $("#topContacts").append(formattedGithub);
            $("#topContacts").append(formattedTwitter);
            /*$("#topContacts").append(formattedBlog);*/
            $("#topContacts").append(formattedPortfolio);
            $("#topContacts").append(formattedLocation);
            $("#topContacts").append(formattedLinkedin);
            $("#topContacts").append(formattedContactGeneric);

            $("#footerContacts").append(formattedMobile);
            $("#footerContacts").append(formattedEmail);
            $("#footerContacts").append(formattedGithub);
            $("#footerContacts").append(formattedTwitter);
            /*$("#footerContacts").append(formattedBlog);*/
            $("#footerContacts").append(formattedPortfolio);
            $("#footerContacts").append(formattedLinkedin);

            $("#header").append(formattedWelcomeMsg);
            $("title").prepend(bio.name + " - ");

            if (bio.skills.length > 0) {
                $("#header").append(viewBio.HTMLskillsStart);

                var mySkills = bio.skills.slice();

                while (mySkills.length > 0) {
                    var formattedSkills = viewBio.HTMLskills.replace("%data%", mySkills.shift());
                    $("#skills").append(formattedSkills);
                }
            }

            if (octopus.getInternationliseEnabled() === true) {
                $("#main").append(viewBio.internationalizeButton);
            }
        }
    };


    // ==================== ViewEducation ====================
    /**
     * @namespace viewEducation
     * @description View for Individiual's Education information.
     * A view in "Model-View-Octopus" structure.
     */
    var viewEducation = {

        /**
         * @function viewEducation.init
         * @description inialises the application view viewEducation.
         * Initialises the views HTML template strings and gets the JSON object.
         */
        "init": function() {

            viewEducation.HTMLschoolStart = '<div class="education-entry"></div>';
            viewEducation.HTMLschoolName = '<a href="%url%">%data%';
            viewEducation.HTMLschoolDegree = ' -- %data%</a>';
            viewEducation.HTMLschoolDates = '<div class="date-text">%data%</div>';
            viewEducation.HTMLschoolLocation = '<div class="location-text">%data%</div>';
            viewEducation.HTMLschoolMajor = '<em><br>Major: %data%</em>';

            viewEducation.HTMLonlineStart = '<div class="education-entry"></div>';
            viewEducation.HTMLonlineClasses = '<h3>Online Classes</h3>';
            viewEducation.HTMLonlineTitle = '<a href="%url%">%data%';
            viewEducation.HTMLonlineSchool = ' - %data%</a>';
            viewEducation.HTMLonlineDates = '<div class="date-text">%data%</div>';
            viewEducation.HTMLonlineURL = '<br><a class="course-url" href="%data%" target="_blank">%data%</a>';

            viewEducation.HTMLotherStart = '<div class="education-entry"></div>';
            viewEducation.HTMLotherClasses = '<h3>Other Classes</h3>';
            viewEducation.HTMLotherTitle = '<a href="%url%">%data%';
            viewEducation.HTMLotherSchool = ' - %data%</a>';
            viewEducation.HTMLotherLocation = '<div class="location-text">%data%</div>';
            viewEducation.HTMLotherDates = '<div class="date-text">%data%</div>';
            viewEducation.HTMLotherURL = '<br><a class="course-url" href="%data%" target="_blank">%data%</a>';

            viewEducation.education = octopus.getAllEducation();
        },

        /**
         * @function viewEducation.displaySchools
         * @description Displays the individual's School information using the
         * education JSON object and HTML template strings. Requires HTML tag with ID "education".
         */
        "displaySchools": function() {

            var education = viewEducation.education;

            if (education.schools.length > 0) {
                for (var school in education.schools) {
                    $("#education").append(viewEducation.HTMLschoolStart);

                    var formattedSchoolName = viewEducation.HTMLschoolName.replace("%data%", education.schools[school].name);
                    formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
                    var formattedSchoolDegree = viewEducation.HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

                    var formattedSchoolLocation = viewEducation.HTMLschoolLocation.replace("%data%", education.schools[school].location);
                    var formattedSchoolMajor = viewEducation.HTMLschoolMajor.replace("%data%", education.schools[school].major);
                    var formattedSchoolDates = viewEducation.HTMLschoolDates.replace("%data%", education.schools[school].years);

                    $(".education-entry:last").append(formattedSchoolNameDegree);
                    $(".education-entry:last").append(formattedSchoolDates);
                    $(".education-entry:last").append(formattedSchoolLocation);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }
            }
        },

        /**
         * @function viewEducation.displayOnlineCourses
         * @description Displays the individual's online courses information using the
         * education JSON object and HTML template strings.
         * Requires HTML tag with ID education, and assumes div with class "education-entry" is available.
         */
        "displayOnlineCourses": function() {

            var education = viewEducation.education;

            // Takes in the heading to display and the courses
            // assumes div with class education-entry is available
            if (education.onlineCourses.length > 0) {
                $("#education").append(viewEducation.HTMLonlineClasses);

                for (var course in education.onlineCourses) {
                    $("#education").append(viewEducation.HTMLonlineStart);

                    var formattedCourseTitle = viewEducation.HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    formattedCourseTitle = formattedCourseTitle.replace("%url%", education.onlineCourses[course].url);
                    var formattedCourseSchool = viewEducation.HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;

                    var formattedCourseDates = viewEducation.HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                    var formattedCourseURL = viewEducation.HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);

                    $(".education-entry:last").append(formattedCourseTitleSchool);
                    $(".education-entry:last").append(formattedCourseDates);
                    $(".education-entry:last").append(formattedCourseURL);
                }
            }
        },

        /**
         * @function viewEducation.displayOtherCourses
         * @description Displays the individual's Other Courses information using the
         * education JSON object and HTML template strings. Requires HTML tag with ID education.
         * Assumes div with class "education-entry" is available.
         */
        "displayOtherCourses": function() {
            var education = viewEducation.education;

            if (education.otherCourses.length > 0) {
                $("#education").append(viewEducation.HTMLotherClasses);

                for (var course in education.otherCourses) {
                    $("#education").append(viewEducation.HTMLotherStart);

                    var formattedCourseTitle = viewEducation.HTMLotherTitle.replace("%data%", education.otherCourses[course].title);
                    formattedCourseTitle = formattedCourseTitle.replace("%url%", education.otherCourses[course].url);
                    var formattedCourseSchool = viewEducation.HTMLotherSchool.replace("%data%", education.otherCourses[course].school);
                    var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;

                    var formattedCourseLocation = viewEducation.HTMLotherLocation.replace("%data%", education.otherCourses[course].location);
                    var formattedCourseDates = viewEducation.HTMLotherDates.replace("%data%", education.otherCourses[course].dates);
                    var formattedCourseURL = viewEducation.HTMLotherURL.replace(/%data%/g, education.otherCourses[course].url);

                    $(".education-entry:last").append(formattedCourseTitleSchool);
                    $(".education-entry:last").append(formattedCourseLocation);
                    $(".education-entry:last").append(formattedCourseDates);
                    $(".education-entry:last").append(formattedCourseURL);
                }
            }
        },

        /**
         * @function viewEducation.render
         * @description Displays the individual's education information using the
         * education JSON object and associated functions for each subtype of education.
         */
        "render": function() {
            viewEducation.displaySchools();
            viewEducation.displayOnlineCourses();
            viewEducation.displayOtherCourses();
        }
    };


    // ==================== ViewWork ====================
    /**
     * @namespace viewWork
     * @description View for Work information.  A view in "Model-View-Octopus" structure.
     */
    var viewWork = {

        /**
         * @function viewWork.init
         * @description inialises the application view viewWork.
         * Initialises the views HTML template strings and gets the Work JSON object.
         */
        "init": function() {
            viewWork.HTMLworkStart = '<div class="work-entry"></div>';
            viewWork.HTMLworkEmployer = '<a href="%url%">%data%';
            viewWork.HTMLworkTitle = ' - %data%</a>';
            viewWork.HTMLworkDates = '<div class="date-text">%data%</div>';
            viewWork.HTMLworkLocation = '<div class="location-text">%data%</div>';
            viewWork.HTMLworkDescription = '<p><br>%data%</p>';

            viewWork.work = octopus.getAllWork();
        },

        /**
         * @function viewWork.render
         * @description Displays the individual's work information using the
         * work JSON object and HTML template strings. Requires HTML tag with ID workExperience.
         * Assumes div with class "work-entry" is available.
         */
        "render": function() {
            var work = viewWork.work;

            if (work.jobs.length > 0) {
                for (var job in work.jobs) {
                    $("#workExperience").append(viewWork.HTMLworkStart);

                    var formattedWorkEmployer = viewWork.HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                    formattedWorkEmployer = formattedWorkEmployer.replace("%url%", work.jobs[job].url);
                    var formattedWorkTitle = viewWork.HTMLworkTitle.replace("%data%", work.jobs[job].title);
                    var formattedworkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

                    var formattedWorkLocation = viewWork.HTMLworkLocation.replace("%data%", work.jobs[job].location);
                    var formattedWorkDates = viewWork.HTMLworkDates.replace("%data%", work.jobs[job].dates);
                    var formattedWorkDescription = viewWork.HTMLworkDescription.replace("%data%", work.jobs[job].description);

                    $(".work-entry:last").append(formattedworkEmployerTitle);
                    $(".work-entry:last").append(formattedWorkLocation);
                    $(".work-entry:last").append(formattedWorkDates);
                    $(".work-entry:last").append(formattedWorkDescription);
                }
            }
        }
    };


    // ==================== ViewProjects ====================
    /**
     * @namespace viewProjects
     * @description View for Projects information.  A view in "Model-View-Octopus" structure.
     */
    var viewProjects = {

        /**
         * @function viewProjects.init
         * @description inialises the application view viewProjects.
         * Initialises the views HTML template strings and gets the Projects JSON object.
         */
        "init": function() {

            viewProjects.HTMLprojectStart = '<div class="project-entry"></div>';
            viewProjects.HTMLprojectTitle = '<a href="%url%">%data%</a>';
            viewProjects.HTMLprojectDates = '<div class="date-text">%data%</div>';
            viewProjects.HTMLprojectDescription = '<p><br>%data%</p>';
            viewProjects.HTMLprojectImage = '<img src="%data%">';

            viewProjects.projects = octopus.getAllProjects();
        },

        /**
         * @function viewProjects.render
         * @description Displays the individual's project information using the
         * projects JSON object and HTML template strings. Requires HTML tag with ID projects
         */
        "render": function() {

            var projects = viewProjects.projects;

            if (projects.projects.length > 0) {
                for (var project in projects.projects) {
                    $("#projects").append(viewProjects.HTMLprojectStart);

                    var formattedProjectTitle = viewProjects.HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                    formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.projects[project].url);
                    var formattedProjectDates = viewProjects.HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                    var formattedProjectDescription = viewProjects.HTMLprojectDescription.replace("%data%", projects.projects[project].description);

                    $(".project-entry:last").append(formattedProjectTitle);
                    $(".project-entry:last").append(formattedProjectDates);
                    $(".project-entry:last").append(formattedProjectDescription);

                    for (var image in projects.projects[project].images) {
                        var formattedProjectImage = viewProjects.HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedProjectImage);
                    }
                }
            }
        }
    };

    // ==================== ViewGitHubFeed ====================
    /**
     * @namespace viewGitHubFeed
     * @description View for the individuals GitHub Feed.  A view in "Model-View-Octopus" structure.
     */
    var viewGitHubFeed = {

        /**
         * @function viewGitHubFeed.init
         * @description inialises the application view viewGitHubFeed.
         * Displays the individual's GitHub feed using the polymer google-feeds response.
         * HTML must include a tag with ID githubFeedContent
         */
        "init": function() {
            window.addEventListener("google-feeds-response", function(e) {
                for (var entry in e.detail.feed.entries) {
                    var content = e.detail.feed.entries[entry].content;

                    //Fix any relative URLs in Feed
                    content = content.replace(/href="\//g, 'href="https://www.github.com/');

                    $("#githubFeedContent").append("<hr>");
                    $("#githubFeedContent").append(content);
                }
            });
        }
    };


    // ==================== ViewMap ====================
    /**
     * @namespace viewMap
     * @description View for the individuals Map of Work Locations.
     * A view in "Model-View-Octopus" structure.
     * Generates the custom Google Map for the website.
     * See the documentation below for more details.
     * https://developers.google.com/maps/documentation/javascript/reference
     */
    var viewMap = {

        /**
         * @function viewMap.init
         * @description inialises the application view viewMap.
         * Initialises the view for generating the custom Google Map displayed after page load.
         */
        "init": function() {

            // For the map to be displayed, the #map div must be
            // appended to #mapDiv in resumeBuilder.js.
            viewMap.googleMap = '<div id="map"></div>';
            $("#mapDiv").append(viewMap.googleMap);

            // Calls the initializeMap() function when the page loads
            window.addEventListener('load', viewMap.render);

            // Vanilla JS way to listen for resizing of the window
            // and adjust map bounds
            window.addEventListener('resize', viewMap.resizeMap);
        },


        /**
         * @function viewMap.render
         * @description renders the view viewMap.
         */
        "render": function() {

            var locations;
            var mapOptions = {
                disableDefaultUI: true,
            };

            map = new google.maps.Map(document.querySelector("#map"), mapOptions);

            // Sets the boundaries of the map based on pin locations
            window.mapBounds = new google.maps.LatLngBounds();

            // locations is an array of location strings returned from locationFinder()
            locations = octopus.locationFinder();

            // pinPoster(locations) creates pins on the map for each location in
            // the locations array
            viewMap.pinPoster(locations);
        },

        "resizeMap": function() {
            //Make sure the map bounds get updated on page resize
            map.fitBounds(window.mapBounds);
        },

        /**
         * createMapMarker(placeData) reads Google Places search results to create map pins.
         * placeData is the object returned from search results containing information
         * about a single location.
         */
        "createMapMarker": function(placeData) {
            // The next lines save location data from the search result object to local variables
            var lat = placeData.geometry.location.lat(); // latitude from the place service
            var lon = placeData.geometry.location.lng(); // longitude from the place service
            var name = placeData.formatted_address; // name of the place from the place service
            var bounds = window.mapBounds; // current boundaries of the map window

            // marker is an object with additional data about the pin for a single location
            var marker = new google.maps.Marker({
                map: map,
                position: placeData.geometry.location,
                title: name
            });

            //change the look of the content in the map infoWindow.
            var infoContent = '<div class="map-info">' + name + "</div>";

            // infoWindows are the little helper windows that open when you click
            // or hover over a pin on a map. They usually contain more information
            // about a location.
            var infoWindow = new google.maps.InfoWindow({
                content: infoContent
            });

            // open Information Window when Marker clicked
            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.open(map, marker);
            });

            // this is where the pin actually gets added to the map.
            // bounds.extend() takes in a map location object
            bounds.extend(new google.maps.LatLng(lat, lon));
            // fit the map to the new marker
            map.fitBounds(bounds);
            // center the map
            map.setCenter(bounds.getCenter());
        },

        /**
         * callback(results, status) makes sure the search returned results for a location.
         * If so, it creates a new map marker for that location.
         */
        "callback": function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                viewMap.createMapMarker(results[0]);
            }
        },

        /**
         * pinPoster(locations) takes in the array of locations created by locationFinder()
         * and fires off Google place searches for each location
         */
        "pinPoster": function(locations) {
            // creates a Google place search service object. PlacesService does the work of
            // actually searching for location data.
            var service = new google.maps.places.PlacesService(map);

            // Iterates through the array of locations, creates a search object for each location
            for (var place in locations) {

                // the search request object
                var request = {
                    query: locations[place]
                };

                // Actually searches the Google Maps API for location data and runs the callback
                // function with the search results after each search.
                service.textSearch(request, viewMap.callback);
            }
        }
    };

    // ==================== Main ====================
    octopus.init();
});
