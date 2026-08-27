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

function updateMessagesVisibility() {
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

updateMessagesVisibility();

let messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;
  console.log(usersName);
  console.log(usersEmail);
  console.log(usersMessage);
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.classList.add("message-entry");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;

  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "remove";
  //   removeButton.innerText = "remove"; (To capitalize the first letter of the edit button in the app)

  removeButton.type = "button";
  removeButton.addEventListener("click", function (event) {
    let entry = event.target.closest(".message-entry");
    entry.remove();
    updateMessagesVisibility();
  });

  let editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerText = "edit";
  //   editButton.innerText = "edit"; (To capitalize the first letter of the edit button in the app)

  editButton.type = "button";

  let isEditing = false;

  editButton.addEventListener("click", function () {
    if (!isEditing) {
      let messageSpan = newMessage.querySelector("span");
      let input = document.createElement("input");
      input.type = "text";
      input.value = messageSpan.innerText;
      input.classList.add("edit-input");
      messageSpan.replaceWith(input);
      editButton.innerText = "save";
      isEditing = true;
    } else {
      let input = newMessage.querySelector("input");
      let newSpan = document.createElement("span");
      newSpan.innerText = input.value;
      input.replaceWith(newSpan);
      editButton.innerText = "edit";
      isEditing = false;
    }
  });

  let actions = document.createElement("div");
  actions.classList.add("message-actions");
  actions.appendChild(editButton);
  actions.appendChild(removeButton);
  newMessage.appendChild(actions);

  messageList.appendChild(newMessage);
  updateMessagesVisibility();

  messageForm.reset();
});
