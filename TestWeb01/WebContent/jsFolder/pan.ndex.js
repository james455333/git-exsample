var footer = document.getElementById("footer");
footer.innerText="copyrigth \xA9 2020 just  copyrigth";

let a4 = document.getElementById("a4");
console.log(a4);
a4.onclick=a4Click;

let content1 = document.querySelector(".content");
console.log(content1);

function a4Click(){

    let script1 = document.createElement("script");
    script1.src="jsfolder/homework5.js";
    content1.appendChild(script1);

}