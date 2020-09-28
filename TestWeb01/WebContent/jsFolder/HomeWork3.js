$("#content1").append('<div id="div1"><img id="img1"></img></div>')
$("#content1").css({
    "text-align": "center"
});



// let objHeight = $("#div1").height();
// let objWidth = $("#div1").width();

// let topV = (wHeight / 2) - (objHeight / 2);
// let leftV = (wWidth / 2) - (objWidth / 2);
// let heightV = Math.round((objHeight / wHeight) * 100) + "%";
// let widthV = Math.round((objWidth / wWidth) * 100) + "%";

$("#div1").css({
    // "border": "3px solid red",d
    "position": "absolute",
    // "top": topV + "%",
    // "left": leftV + "%",
    "height" :  "50%",
    "width" : "50%"
})

$("#img1").attr("src", "images/sputnik.jpg")
    .css({
        "position": "relative",
        "border-radius" : "50%",
        "height": "100%",
        "width": "100%",
    })
$(function(){
    resetImg();
    $(window).resize(resetImg);

    function resetImg() {
    
        let wHeight = $("#content1").height();
        let wWidth = $("#content1").width();
    
        let objHeight = $("#div1").height();
        let objWidth = $("#div1").width();
    
        let top = (wHeight / 2) - (objHeight / 2);
        let left = (wWidth / 2) - (objWidth / 2);
        let height = Math.round((objHeight / wHeight) * 100) + "%";
        let width = Math.round((objWidth / wWidth) * 100) + "%";
    
        $("#div1").css({
            "height" : height,
            "width" : width,
            "top" : top,
            "left" : left
        })
    
    
    }

})