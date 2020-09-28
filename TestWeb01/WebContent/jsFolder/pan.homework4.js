footer.innerText="copyrigth \xA9 2020 just  copyrigth";


let legend1 = document.querySelector("legend");
legend1.style.textAlign="center";

let fildSet1 = document.querySelector("fieldset");
fildSet1.style.marginLeft = 15 + "%";
fildSet1.style.marginRight = 15 + "%";
fildSet1.style.marginTop = 5 + "%";
// fildSet1.style.overflow = "auto" ;
fildSet1.style.height = 90 + "%";

let main = document.querySelector("#mainShow");

let a1 = document.createElement("a");
a1.href= null;
main.appendChild(a1);

let bottom = document.querySelector("#bottomShow");

let m1 = document.createElement("img");
m1.src="../images/cyberPunk1.jpg";
m1.style.width = 17.5 + "%";
m1.style.margin = 1 + "%";
m1.id = "img1" ; 
m1.href = "https://www.cyberpunk.net/tw/zh-tw/";
bottom.appendChild(m1);
m1.onclick=clickAndShow;

let m2 = document.createElement("img");
m2.src="../images/rimworld.jpg";
m2.style.width = 17.5 + "%";
m2.style.margin = 1 + "%";
m2.id = "img2" ; 
m2.href = "https://rimworldgame.com/";
bottom.appendChild(m2);
m2.onclick=clickAndShow;

let m3 = document.createElement("img");
m3.src="../images/nba2k21.jpg";
m3.style.width = 17.5 + "%";
m3.style.margin = 1 + "%"
m3.id = "img3" ; 
m3.href = "https://www.2k.com/en-US/";
m3.style.border= 3 + "px" + " solid " + "red";
bottom.appendChild(m3);
m3.onclick=clickAndShow;

let m4 = document.createElement("img");
m4.src="../images/fateSeeker.jpg";
m4.style.width = 17.5 + "%";
m4.style.margin = 1 + "%";
m4.id = "img4" ; 
m4.href = "https://fs.jslgame.com/";
m3.style.border= 3 + "px" + " solid " + "red";
bottom.appendChild(m4);
m4.onclick=clickAndShow;

let m5 = document.createElement("img");
m5.src="../images/xiaoyi.jpg";
m5.style.width = 17.5 + "%";
m5.style.margin = 1 + "%";
m5.id = "img5" ; 
m5.href = "https://store.steampowered.com/app/1189630/PathOfWuxia/";
bottom.appendChild(m5);
m5.onclick=clickAndShow;

let mTop = document.createElement("img");
mTop.src= document.getElementById("img3").src;
mTop.style.width = 98 + "%";
mTop.style.height = 98 + "%";
mTop.style.margin = 1 + "% " + 1 + "%";
a1.appendChild(mTop);
a1.href = m3.href;

let timer = setInterval(timeShow,2000);
let showCounter = 3 ;

let controller = document.querySelector("#controller");
console.log(controller);
controller.style.textAlign="center";

let buttonRight = document.createElement("img");
buttonRight.src= "../images/forward.png";
buttonRight.style.height = 5 + "%";
buttonRight.style.width = 5 + "%";
controller.appendChild(buttonRight);
buttonRight.onclick=rightForward;

let buttonStop = document.createElement("img");
buttonStop.src= "../images/stop.png";
buttonStop.style.height = 5 + "%";
buttonStop.style.width = 5 + "%";
controller.appendChild(buttonStop);
buttonStop.onclick=StopAndRestart;

let butCon1  = true;

let buttonLeft = document.createElement("img");
buttonLeft.src= "../images/backward.png";
buttonLeft.style.height = 5 + "%";
buttonLeft.style.width = 5 + "%";
controller.appendChild(buttonLeft);
buttonLeft.onclick=leftForward;

// let forwardSelector = 3 ;


function rightForward(){
    clearInterval(timer);
    const cImgCon = document.querySelectorAll("img");
    for (let i = 0; i < cImgCon.length; i++) {
        const element = cImgCon[i];
        element.style.border = "none";
    }
    showCounter--;
    if(showCounter<1){
        showCounter = 5;
    }
    const imgShow = document.getElementById(`img${showCounter}`);
    imgShow.style.border = 3 + "px " + "solid" + " red";
    mTop.src = imgShow.src;
    a1.href = imgShow.href;
    timer = window.setInterval(timeShow,2000);
}

function leftForward(){
    clearInterval(timer);
    const cImgCon = document.querySelectorAll("img");
    for (let i = 0; i < cImgCon.length; i++) {
        const element = cImgCon[i];
        element.style.border = "none";
    }
    showCounter++;
    if(showCounter>5){
        showCounter = 1;
    }
    const imgShow = document.getElementById(`img${showCounter}`);
    imgShow.style.border = 3 + "px " + "solid" + " red";
    mTop.src = imgShow.src;
    a1.href = imgShow.href;
    timer = window.setInterval(timeShow,2000);
}



function StopAndRestart(){
    if(butCon1){
        buttonStop.src = "../images/start.png";
        butCon1 = false;
        clearInterval(timer);
    }else{
        buttonStop.src = "../images/stop.png";
        butCon1 = true;
        timer = setInterval(timeShow,2000);
    }

}


function timeShow(){
    const cImgCon = document.querySelectorAll("img");
    for (let i = 0; i < cImgCon.length; i++) {
        const element = cImgCon[i];
        element.style.border = "none";
    }
    showCounter++;
    if(showCounter>5){
        showCounter = 1;
    }
    const imgShow = document.getElementById(`img${showCounter}`);
    imgShow.style.border = 3 + "px " + "solid" + " red";
    mTop.src = imgShow.src;
    a1.href = imgShow.href;
    
}

function clickAndShow(){
    const cImgCon = document.querySelectorAll("img");
    for (let i = 0; i < cImgCon.length; i++) {
        const element = cImgCon[i];
        element.style.border = "none";
    }
    const cImg = document.getElementById(this.id);
    cImg.style.border = 3 + "px " + "solid" + " red";
    a1.innerHTML= null;

    mTop = document.createElement("img");
    mTop .src= cImg.src;
    mTop .style.width = 98 + "%";
    mTop .style.margin = 1 + "%" + 1 + "%";
    a1.appendChild(mTop);
    a1.href = cImg.href;
    
    const clickId = this.id;
    const idNumber = clickId.substring(clickId.length -1 );
    // console.log(idNumber);
    showCounter = idNumber;

}

