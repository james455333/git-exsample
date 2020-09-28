
$("#content1").append('<div id="innerContainer"></div>');
$("#innerContainer").css({
    "position": "relative",
    "top": "15%",
    "left": "20%",
    "height": "70%",
    "width": "60%",
    "text-align": "center",
    "overflow": "hidden"
});
$("#innerContainer").append('<ul id="mainImg"></ul>');
$("#mainImg").css({
    "list-style-type" : "none" , 
    "top" : 0 ,
    "margin" : 0 , 
    "padding" : 0 , 
    "position" : "relative",
    "height" : "100%",
    "width" : "100%",
    "transition" : "2S"
});

for (let i = 1; i <= 5; i++) {
    $("#mainImg").append(`<li id="li${i}"></li>`);
    // console.log($(`#img${i}`).attr("id"))
    $(`#li${i}`).css({"width" : "100%" , "height" : "100%"}).append(`<img id="img${i}">`);
    $(`#img${i}`).attr("src", `images/img${i}.jpg`);
    $(`#img${i}`).css({ "width": "100%", "height": "100%", "margin": "0" });
}



$("#innerContainer").append('<ul id="ulList">');
$("#ulList").css({
    "margin" : 0, 
    "list-style-type" : "none" ,
    "position": "absolute",
    "top": "25%",
    "bottom" : "25%",
    "left": "2.5%"
})

for (let i = 1; i <= 5; i++) {
    $("#ulList").append(`<li id="slideLi${i}"></li>`);
    let positionSlidLi = i*20
    $(`#slideLi${i}`).css({
        "position" : "absolute",
        "left" : "0%" ,
        "top" : positionSlidLi+"%",
        "border":"1px solid black",
        "background-color" : "white",
        "width" : "100%",
        "margin" : "10%",
        "height" : "10%",
        "opacity" : "0.5"
    });
}
$("#slideLi1").css("background-color","black")


$("#innerContainer").append('<div id="up"></div>');

$("#up").css({
    "position": "absolute",
    "height": "2.5%",
    "width": "2.5%",
    "top": "5%",
    "left": "2.5%",
}).append('<span class="glyphicon glyphicon-chevron-left" style="cursor:pointer;transform: rotate(90deg)"></span>')


$("#innerContainer").append('<div id="down"></div>');
$("#down").css({
    "position": "absolute",
    "height": "2.5%",
    "width": "2.5%",
    "top": "12.5%",
    "left": "2.5%"
}).append('<span class="glyphicon glyphicon-chevron-right" style="cursor:pointer;transform: rotate(90deg)"></span>')


$("#innerContainer").append('<div id="rightbar"></bar>')
$("#rightbar").css({
    "position": "absolute",
    "display" : "block",
    "top" : "0%",
    "right": "0%",
    "border": "10px solid	#7D7DFF",
    "background-color" : "#B9B9FF",
    "border-radius" : "5px",
    "height": "100%",
    "transition": "2s",
    "width" : 0
})

for (let i = 1; i <= 5; i++) {
    $("#rightbar").append(`<div><img id="imgSmall${i}"></div>`);
    $("#rightbar div").css({ "width": "95%", "height": "19.5%", "margin": "2.5% 2.5%" })
    $(`#imgSmall${i}`).attr("src", `images/img${i}.jpg`);
    $(`#imgSmall${i}`).css({ "width": "100%", "height": "100%", "margin": "0" });
}

$("#innerContainer").append('<div id="barclick"></div>')
$("#barclick").css({
    "position": "absolute",
    "right": "0%",
    "top": "45%",
    "height": "10%",
    "cursor": "col-resize",
    "transition": "2s",
    // "background-color" : "	#4F4F4F"
    // "border" : "2px solid red"

}).append('<svg width="20px" height="100%" viewBox="0 0 16 16" class="bi bi-upc-scan" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/><path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/></svg>')
$(".bi").css({
    "color" : "#28004D",
});



var timmer = setInterval(swithDown,2500);


$("#barclick").click(extendRightbar);
$("#up").click(swithUp);
$("#down").click(swithDown);
$("#rightbar div").mouseenter(smallImgSwith);
$("#ulList li").mouseenter(bottomSwith);
$("#innerContainer").mouseover(function(){
    window.clearInterval(timmer);
    
}).mouseleave(function(){
    timmer = setInterval(swithDown,2500); 
       
})

$("#top1 a").click(function(){
    window.clearInterval(timmer);
})


var imgCounter = 0 ;

function extendRightbar() {
    $("#rightbar").css({
        "width":"25%" ,
        "border" : "5px solid #7D7DFF",
        "opacity" : "0.5"
    });
    $("#rightbar div").eq(imgCounter).css("border","1px solid red");
    $("#barclick").css("right","22.5%");
    // $("#barclick").off("click",extendRightbar);
    $("#barclick").on("click",shrinkRightbar);
}
function shrinkRightbar() {
    $("#rightbar").css({
        "width":"25%" ,
        "border" : "10px solid #7D7DFF",
        "opacity" : "1"
    });
    $("#rightbar").css("width","0%");
    $("#barclick").css("right","0%");
    $("#barclick").on("click",extendRightbar);
    $("#rightbar div").css("border","none");
}



function swithUp(){
    imgCounter--;
    if(imgCounter<0) imgCounter=4;
    if( $("#rightbar").width()){
        $("#rightbar div").css("border","none");
        $("#rightbar div").eq(imgCounter).css("border","1px solid red");
    }
    show();
}
function swithDown(){
    imgCounter++;
    if(imgCounter>=$("#mainImg li").length) imgCounter=0;
    if( $("#rightbar").width()){
        $("#rightbar div").css("border","none");
        $("#rightbar div").eq(imgCounter).css("border","1px solid red");
    }
    console.log("Timmer")
    show();
}

function show(){
    let imgLength = $("#mainImg li").length;
    imgHeight = $("#mainImg").css("height");
    let length = imgHeight.length;
    imgHeight = Number(imgHeight.substring(0,length-3));
    $("#ulList li").css("background-color","white");
    $(`#slideLi${imgCounter+1}`).css("background-color","black");
    
    $("#mainImg").css("top", (0 - imgCounter*imgHeight) +"px" );
    if( $("#rightbar").width()){
        $("#rightbar div").css("border","none");
        $("#rightbar div").eq(imgCounter).css("border","1px solid red");
    }
}

function smallImgSwith(){
    $("#rightbar div").css("border","none");
    $(this).css("border","1px solid red");
    let id = $(this).find("img").attr("id");
    imgCounter =Number(id.charAt(8))-1;
    $("#ulList li").css("background-color","white");
    $(`#slideLi${imgCounter+1}`).css("background-color","black");
    show();
}

function bottomSwith(){
    $("#ulList li").css("background-color","white");
    $(this).css("background-color","black");
    let slideId = $(this).attr("id");
    imgCounter = Number(slideId.charAt(7))-1;

    if( $("#rightbar").width()){
        $("#rightbar div").css("border","none");
        $("#rightbar div").eq(imgCounter).css("border","1px solid red");
    }

    show();
}


