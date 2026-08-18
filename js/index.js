body = document.body;
footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML =
  "&copy; " + thisYear + " Mohammad Shafiq Sharifi. All rights reser ";
footer.appendChild(copyright);



