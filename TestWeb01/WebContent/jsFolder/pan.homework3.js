footer.innerText="copyrigth \xA9 2020 just  copyrigth";

// document.getElementById("#container1").addEventListener(show())

let container1 = document.querySelector('#container1');

let s1 = document.createElement("h5");
s1.innerHTML="尚未確認星數";
s1.style.textAlign="center";
container1.appendChild(s1);
document.getElementById("re1").onclick=restart;
document.getElementById("sub1").onclick=confirmAlert;
let numLimit = 5;
let imageStar ;

for (let i = 1; i <= numLimit; i++) {

    imgStar = document.createElement('img');
    imgStar.id = `iStar${i}`;
    imgStar.src= "../images/star.gif";
    imgStar.style.width = 100/numLimit + "%";
    container1.appendChild(imgStar)
    // console.log(`iStar${i}`);
    document.getElementById(`iStar${i}`).onmouseenter=actionChange;
    document.getElementById(`iStar${i}`).onmouseleave=leaveChange;
    document.getElementById(`iStar${i}`).onclick=clickSet;
};
let con1 = true;
let con2 = true;

let hideSenter = document.createElement("input");
    hideSenter.type = "text";
    hideSenter.style.display = "none";
    hideSenter.name = "starLevel";
    container1.appendChild(hideSenter);


function actionChange(){
    if(con1){
        let isId = this.id.substring(5);
        let idLength = Number(isId);
        let chStar ;
        // console.log(idLength);
        for (let i = 1; i <= idLength ; i++) {
                chStar = document.getElementById(`iStar${i}`);
                chStar.src ="../images/chngstar.gif";
                s1.innerHTML=`現在選擇${idLength}顆星`;
        }
    }

};

function clickSet(){
    let isId = this.id.substring(5);
    let idLength = Number(isId);
    // console.log(idLength)
    let chStar ;
    // console.log(idLength);
    for (let i = 1; i <= idLength ; i++) {
            chStar = document.getElementById(`iStar${i}`);
            chStar.src ="../images/chngstar.gif";
            s1.innerHTML=`已確定選擇${idLength}顆星`;
        }
    hideSenter.value = `${idLength}`;
    con1 = false;
    con2 = false;

};


function leaveChange(){
    if(con2){
        let isId = this.id.substring(5);
        let idLength = Number(isId);
        let chStar ;
        // console.log(idLength);
        for (let i = 1; i <= idLength ; i++) {
                chStar = document.getElementById(`iStar${i}`);
                chStar.src ="../images/star.gif";
                s1.innerHTML="尚未確認星數";
        }
    }
}

function restart(){
    for (let i = 1; i <= numLimit; i++) {
        imgStar = document.getElementById(`iStar${i}`);
        imgStar.src= "../images/star.gif";
        imgStar.style.width = 100/numLimit + "%";
        container1.appendChild(imgStar)
        // console.log(`iStar${i}`);
        document.getElementById(`iStar${i}`).onmouseenter=actionChange;
        document.getElementById(`iStar${i}`).onmouseleave=leaveChange;
        document.getElementById(`iStar${i}`).onclick=clickSet;
        s1.innerHTML="尚未確認星數";
        hideSenter.value = "";

    }
    con1 = true;
    con2 = true;
}

function confirmAlert(){
    let starLevel = hideSenter.value;
    if(starLevel==0){
        alert("尚未確認星數");
    }
}

