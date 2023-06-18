// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// GET ELEMENTBYID
// console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
headerTitle.innerHTML = "<h3> Hello </h3>";
headerTitle.style.border = "solid 3px black";
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
let addItem = document.getElementsByClassName("title");
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";
