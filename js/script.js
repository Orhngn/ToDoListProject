let addButton = document.getElementById("addToDo");

let toDoContainer = document.getElementById("to-doContainer");

let inputText = document.getElementById("inputText");

let clearToDo = document.getElementById("clearToDo");

addButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-style");
  toDoContainer.appendChild(paragraph); // to do ekleme
  paragraph.innerHTML = "  -  " + inputText.value;
  inputText.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through"; // bir kere tıklanınca üzrine çizme
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph); // iki kere tıklanınca silme
  });

  clearToDo.addEventListener("click", function () {
    paragraph.remove(); // temizle ile hepsini silme
  });
});

//
