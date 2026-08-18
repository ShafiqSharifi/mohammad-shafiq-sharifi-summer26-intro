body = document.body;
footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML =
  "&copy; " + thisYear + " Mohammad Shafiq Sharifi. All rights reserved ";
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Adobe Photoshop"];

let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skill.classList.add("skills-item");
  skillsList.appendChild(skill);
}
