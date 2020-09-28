// footer.innerText="copyrigth \xA9 2020 just  copyrigth";


// let content1 = document.querySelector(".content");


let div1 = document.createElement("div");
div1.style.position= "absolute";
div1.style.top = 10 + "%";
div1.style.left = 10 + "%";
div1.style.right = 10 + "%";
div1.style.height = 80 + "%";
// div1.style.border = 3 + "px" + " solid " + "red";
// div1.style.padding = 1 + "%"; 
// console.log(div1);
content1.appendChild(div1);


let h2A = document.createElement("h4");
h2A.innerText = "WelCome";
h2A.style.margin = 3 + "%";
div1.appendChild(h2A);


let year ;
let month ;
let date1;


let selector1 = document.createElement("select");
selector1.style.marginLeft = 3 + "%";
selector1.id = "selector1";
selector1.name = "selector1";
div1.appendChild(selector1);
selector1.onclick= findYear;
// selector1.onclick= autoFix;

let span1 = document.createElement("sapn");
span1.innerText = "年";
div1.appendChild(span1);

let i = 0;
for (i = 2010; i < 2021; i++) {
    let option1 = document.createElement("option");
    option1.value = i;
    option1.innerText = `${i}`;
    selector1.appendChild(option1);
}
year = selector1.value; 



let selector2 = document.createElement("select");
selector2.id = "selector2";
selector2.name = "selector2";
div1.appendChild(selector2);
selector2.onclick=findMonth;

let span2 = document.createElement("sapn");
span2.innerText = "月";
div1.appendChild(span2);

let j = 0 ;
for (j = 1; j < 13; j++) {
    let option2 = document.createElement("option");
    option2.value = j;
    option2.innerText = `${j}`;
    selector2.appendChild(option2);
} 
month = selector2.value;



let selector3 = document.createElement("select");
selector3.id = "selector3";
selector3.name = "selector3";
div1.appendChild(selector3);
selector3.onclick=findDate;

let span3 = document.createElement("sapn");
span3.innerText = "日";
div1.appendChild(span3);

for (let k = 1; k <= 31; k++) {
    let option3 = document.createElement("option");
    date1 = new Date(year,month-1,k);
    // console.log(date1);
    // console.log(date1.getMonth());
    
    if ((date1.getMonth()+1)!= month) {
        break;
    }
    option3.value = k;
    option3.innerText = `${k}`;
    selector3.appendChild(option3);
}
let dateV = selector3.value;


let informationText = document.createElement("div");
informationText.style.border = 3 + "px" + " solid " + "grey";
informationText.style.margin = 1 + "%";
informationText.innerHTML = "<h3 id=\"h3a\">Information</h3>";
// innerh3.style.backgroundColor = "lightseagreen";
div1.appendChild(informationText)
let innerh3 = document.getElementById("h3a");
console.log(innerh3)
innerh3.style.backgroundColor="lightseagreen";

let showResult = document.createElement("h2")
showResult.innerText = `您選擇的日期是 ${year}年${month}月${dateV}日`;
informationText.appendChild(showResult);




function findYear(){
    year = selector1.value;

    selector3.innerHTML="";
   
    for (let k = 1; k <= 31; k++) {
        let option3 = document.createElement("option");
        date1 = new Date(year,month-1,k);
        // console.log(date1);
        // console.log(date1.getMonth());
        
        if ((date1.getMonth()+1)!= month) {
            break;
        }
        option3.value = k;
        option3.innerText = `${k}`;
        selector3.appendChild(option3);
    }
    year = selector1.value;
    dateV = selector3.value;
    showResult.innerText = `您選擇的日期是 ${year}年${month}月${dateV}日`;
    // console.log(year);
}


function findMonth(){
    month = selector2.value;

    selector3.innerHTML="";
   
    for (let k = 1; k <= 31; k++) {
        let option3 = document.createElement("option");
        date1 = new Date(year,month-1,k);
        // console.log(date1);
        // console.log(date1.getMonth());
        
        if ((date1.getMonth()+1)!= month) {
            break;
        }
        option3.value = k;
        option3.innerText = `${k}`;
        selector3.appendChild(option3);
    }
    month = selector2.value;
    dateV = selector3.value;
    showResult.innerText = `您選擇的日期是 ${year}年${month}月${dateV}日`;
    // console.log(month);
}


function findDate(){
    dateV = selector3.value;
    // console.log(dateV);
    showResult.innerText = `您選擇的日期是 ${year}年${month}月${dateV}日`;

}






