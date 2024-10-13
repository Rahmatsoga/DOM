// const h1 = document.getElementById("heading");
// const para = document.getElementById("para");
// const para2 = document.getElementsByClassName("paragraph");
// const btn = document.getElementsByTagName("button");
const h2 = document.createElement("h2");
// const body = document.body;
// const div = document.getElementById("div");
h2.textContent = "Created using js";
// // body.appendChild(h2);
// // div.append(h2);
// // div.prepend(h2);
// // div.after(h2);
// div.before(h2);

// // h2.insertBefore("h1");
// // console.log(para2);
// // console.log(btn);

// // console.log(h1);

// // h1.innerText = "Changed By using Dom";
// h1.textContent = "Changed By Using TextContext";
// para.innerHTML = "<h2>I am Span</h2>";
// // h1.outerHTML = "<p>Changed</p>";
// console.log(h1.getAttribute("id"));
// h1.setAttribute("id", "");

// para2[0].style.fontSize = "30px";

// btn[0].remove();

// const h1 = document.querySelector("#heading");
// const para = document.querySelector(".paragraph");
// const btn = document.querySelector("button");
// const para2 = document.querySelectorAll("p");
// console.log(h1);
// console.log(para);
// console.log(para2.forEach((el) => console.log(el)));
// console.log(para2);
// console.log(btn);
// h1.innerText = "Changedd";

// const btn = document.querySelector("button");

// function handleClick() {
//   console.log("Button Clicked");
// }
// btn.addEventListener("click", handleClick);

// function handleDblClick() {
//   console.log("clicked twice");
// }
// btn.addEventListener("dblclick", handleDblClick);

// function handleTheme() {
//   if (document.body.style.backgroundColor === "black") {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   } else {
//     document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
//     document.body.style.color = "white";
//   }
// }

// btn.addEventListener("click", handleTheme);

// btn.addEventListener("mouseenter", function () {
//   console.log("mouse enterd");
// });
// btn.addEventListener("mouseleave", () => {
//   console.log("mouse left");
// });

// btn.addEventListener("mousedown", () => {
//   console.log("clicked");
// });
// btn.addEventListener("mouseup", () => {
//   console.log("mouseup");
// });

// btn.addEventListener("contextmenu", () => {
//   console.log("hellow");
// });

// const form = document.querySelector("form");
// // console.log(form);
// const username = "mughees07";
// const email = "me@mughees.com";
// const password = "1122";

// function handleSubmit(e) {
//   e.preventDefault();
//   const name = e.target[0].value;
//   const mail = e.target[1].value;
//   const pass = e.target[2].value;

//   //   if (name === username && mail === email && pass === password) {
//   //     alert("Logged In");
//   //   } else {
//   //     alert("Wrong credentials");
//   //   }

//   name === username && mail === email && pass === password
//     ? alert("Logged In")
//     : alert("Wrong credentials");
//   e.target[0].value = "";
//   e.target[1].value = "";
//   e.target[2].value = "";
// }
// form.addEventListener("submit", handleSubmit);

// const nameInput = document.querySelector("#name");
// console.log(nameInput);

// nameInput.addEventListener("focus", () => (nameInput.style.width = "400px"));
// nameInput.addEventListener("blur", () => (nameInput.style.width = "100px"));
// nameInput.addEventListener("focusout", () => console.log("Focus out"));
// nameInput.addEventListener("keypress", (e) => console.log(e.target.value));
// nameInput.addEventListener("keyup", (e) => console.log(e.target.value));
// nameInput.addEventListener("change", (e) => console.log(e));

// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const passInput = document.querySelector("#password");
// function handleName(e) {
//   let name = e.target.value;
//   console.log(name);
// }
// nameInput.addEventListener("change", handleName);

// const mobileTabs = document.querySelector(".mobile-tabs");
// const btn = document.querySelector(".toggle");
// console.log(mobileTabs);

// btn.addEventListener("click", () => {
//   mobileTabs.classList.toggle("toggle");
// });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .then((json) =>
//     json.forEach((el) => {
//       console.log(el);
//     })
//   )

// .catch((err) => console.log(err.message));
