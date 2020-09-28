
let container1 = document.getElementById("container1");

  
$(function(){
  
  $("body").css("margin","0").css("padding","0");

  $("#container1").css("position","absolute").css("background-color","yellowgreen").css("height", "100%").css("width","100%")
  .css("margin","0").css("padding","0");

  $("#top1").css("position","relative").css("height","5%").css("background-color","#77FFCC").css("display","block")
  .css("text-align","center").css("margin","0").css("padding","0").css("border","1px solid white");

  $("#content1").css("position","relative").css("height","95%").css("background","#BBFF66");

  $("#top1 a").css({"cursor":"pointer","color":"rgb(224, 133, 14)","display":"inline-block","margin-top":"10px","margin-right":"10%","margin-left":"10%"});


  $("#top1 a").eq(0).click(click1);
  $("#top1 a").eq(1).click(click2);
  $("#top1 a").eq(2).click(click3);

  let content1 = document.getElementById("content1");

  let script1 = document.createElement("script");
  // script1.src="jsFolder/HomeWork1.js";
  // content1.appendChild(script1)
  


  function click1(){
    $("#content1").empty();
    let script1 = document.createElement("script");
    script1.src="jsFolder/HomeWork1.js";
    content1.appendChild(script1)
  }
  function click2(){
    $("#content1").empty();
    let script1 = document.createElement("script");
    script1.src="jsFolder/HomeWork2.js";
    content1.appendChild(script1)
  }
  function click3(){
    $("#content1").empty();
    let script1 = document.createElement("script");
    script1.src="jsFolder/HomeWork3.js";
    content1.appendChild(script1)
  }

})

