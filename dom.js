// let modify = document.getElementsByClassName("list-group");
// for(let ele of modify){
//     ele.style.fontWeight = "bold";
// }
// let color = document.getElementsByClassName("list-group-item");
// color[2].style.backgroundColor = "green";

// let li = document.getElementsByTagName("li");
// li[4].style.backgroundColor = "yellow";
// let tag = document.getElementsByClassName("new-li");
// tag[0].innerHTML = "<h4>Item 5</h4>"

let ele1 = document.querySelectorAll(".list-group-item");
ele1[1].style.backgroundColor = "green";
ele1[1].style.color = "green";
ele1[2].style.visibility = "hidden";
let ele2 = document.querySelectorAll("li:nth-child(odd)");
for(let odd of ele2){
    odd.style.backgroundColor = "green";
}