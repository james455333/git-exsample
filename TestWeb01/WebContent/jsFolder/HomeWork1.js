


$("#content1").append('<div id="innerContainer"></div>');
$("#innerContainer").css({
    "position": "relative",
    "top": "30%",
    "left": "20%",
    "height": "40%",
    "width": "60%",
    "text-align": "center"
})
for (let i = 1; i <= 5; i++) {
    let star = `<img src="images/star.gif" id="img${i}">`
    $("#innerContainer").append(star);
    // console.log($(`#img${i}`).attr("id"))
    $(`#img${i}`).css({ "width": "20%", "height": "65%" });
}
$("#innerContainer").append(`<h4 id="commet">尚未確認星數</h4>`)

$("#innerContainer").append('<form id="form"></form>');
$("form").css({ "text-align": "center" })
$("form").append(`<input type="text" id="starlevel" name="starlevel" value="0" style="display:none"> `)

$("form").append('<input type="submit" id="submit" value="送出">');
$("form").append('<input type="reset" id="reset" value="重置">');


$(function () {
    let no = 0;
    $("img").mouseenter(change).mouseleave(leave).click(confirm);

    $("#submit").click(function () {
        let sta = $("#starlevel").val();
        let starlevel = Number(sta);
        if (starlevel == 0) {
            alert("評分未完成");
            $("#content1").empty();
            let script1 = document.createElement("script");
            script1.src = "jsFolder/HomeWork1.js";
            content1.appendChild(script1);
        }
    })

    $("#reset").click(function () {
        $("img").attr("src", "images/star.gif");
        $("img").on("mouseenter", change);
        $("img").on("mouseleave", leave);
        $("#commet").text('尚未確認星數')
    })

    function change() {
        no = $(this).attr("id");
        no = no.charAt(3);
        // console.log(no.charAt(3));
        $(`img:lt(${no})`).attr("src", "images/chngstar.gif");
        $("#commet").text(`你選擇了${no}顆星`)
    }
    function leave() {
        $('img').attr("src", "images/star.gif");
        $("#commet").text(`尚未確認星數`)
    }

    function confirm() {
        $("#starlevel").val(no);
        $('img').off("mouseenter");
        $('img').off("mouseleave");
    }





})


