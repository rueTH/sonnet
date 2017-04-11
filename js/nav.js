"use strict";

function displayNavIcon(navIcon) {
  var icon = document.createElement("icon");
  icon.src = "https://cdn3.iconfinder.com/data/icons/education/512/literature-512.png"+navIcon;
  document.getElementById('navIcon').appendChild(icon); 
};