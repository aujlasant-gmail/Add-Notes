const notesContainer = document.querySelector(".notes-container");
const createNotes = document.querySelectorAll(".input-box");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  let para = document.createElement("p");
  let icon = document.createElement("i");
  para.setAttribute("contenteditable", "true");
  para.className = "input-box";
  para.innerText = "enter here.....";
  icon.classList.add("fa-solid", "fa-trash");
  notesContainer.appendChild(para).appendChild(icon);
  console.log("clicked");
  console.log(para);
  console.log(icon);
});

// notesContainer.addEventListener("click", (e) => {
//   if (e.target.tagName === "I") {
//     e.target.parentElement.remove();
//     console.log(e);
//   }
// });
