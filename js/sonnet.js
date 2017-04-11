"use strict";

var sonnet = document.getElementById('sonnet').innerHTML;

var n = sonnet.indexOf('orphans');
document.getElementById("orphanStart").innerHTML = n;

var total = sonnet.length;
document.getElementById("numOfCharacters").innerHTML = total;

var newString = sonnet.replace('winter', 'yuletide');
var replaceThe = sonnet.replace(/the /gi, 'a large ');

document.getElementById('sonnet').innerHTML = replaceThe;


    

    