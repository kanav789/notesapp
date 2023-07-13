
alert("hello world");
const addbtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
// const delete = document.querySelector(".delete")

// savenotes function

const savenotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];

  notes.forEach((newone) => {
    data.push(newone.value);
  });

  localStorage.setItem("notes", JSON.stringify(data));
};

// selfcall function

(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  lsnotes.forEach((lsnotes) => {
    createnew(lsnotes);
  });
})();

//dskjdj
function createnew(text = "") {
  const newone = document.createElement("div");
  newone.classList.add("note");
  newone.innerHTML = `<div class="tool">
  <i class="save fas fa-save">S</i>
  <i class="delete fas fa-trash">X</i>
</div>
<textarea>${text}</textarea>`;
  main.appendChild(newone);
  savenotes();

  newone.querySelector(".delete").addEventListener("click", function () {
    newone.remove();
  });

  newone.querySelector(".save").addEventListener("click", function () {
    savenotes();
  });

  // newone.addbtn();
}

// call
addbtn.addEventListener("click", function () {
  createnew();
});
