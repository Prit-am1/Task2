let modify = document.getElementsByClassName("list-group");
for(let ele of modify){
    ele.style.fontWeight = "bold";
}
let color = document.getElementsByClassName("list-group-item");
color[2].style.backgroundColor = "green";

let li = document.getElementsByTagName("li");
li[4].style.backgroundColor = "yellow";
let tag = document.getElementsByClassName("new-li");
tag[0].innerHTML = "<h4>Item 5</h4>"
