"use strict";

var sonnet = document.getElementById('sonnet').innerHTML;


//finding starting position of "orphans"
var n = sonnet.indexOf('orphans');
document.getElementById("orphanStart").innerHTML = n;
//length of sonnet
var total = sonnet.length;
document.getElementById("numOfCharacters").innerHTML = total;
//replace "winter" with "yuletide"
var newString = sonnet.replace('winter', 'yuletide');
//replace "the" with "a large"
var replaceThe = sonnet.replace(/the /gi, 'a large ');
//change html to reflect changes
document.getElementById('sonnet').innerHTML = replaceThe;