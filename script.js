let notesContainer = document.querySelector(".notes-container");
let createNotes = document.querySelectorAll(".input-box");
let btn = document.querySelector(".button");

const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();

const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

btn.addEventListener("click", () => {
  let para = document.createElement("p");
  let icon = document.createElement("i");
  para.setAttribute("contenteditable", "true");
  para.className = "input-box";
  para.innerText = "enter here.....";
  icon.classList.add("fa-solid", "fa-trash");
  notesContainer.appendChild(para).appendChild(icon);
  attachKeyupListener(para);
});

function attachKeyupListener(element) {
  element.onkeyup = () => {
    updateStorage();
  };
}

createNotes.forEach((notes) => {
  attachKeyupListener(notes);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    updateStorage();
  }
  // else if (e.target.tagName === "P") {
  //   createNotes = document.querySelectorAll(".input-box");
  //   createNotes.forEach((notes) => {
  //     notes.onkeyup = () => {
  //       updateStorage();
  //     };
  //   });
  // }
});
