/*
*
* Fie For Roger's Resume content
*
*/
var name = "Roger Woodroofe";
var role = "Front End Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
