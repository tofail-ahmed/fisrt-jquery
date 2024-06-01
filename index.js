// document.getElementById("jq").innerHTML="hi";
// $('h1').text("Assalamualaikum JQuery");

// $(".my-div h1,h1 ").text("Asslamualaikum")
// $("#p1").html("<h1 style='color:red;font-size:40px;' ><b><i>Walaikumslam<i/><b/><h1/>")
// $("#p1").prepend("<p style='color:green; font-size:20px;'>areh...<p>")
// $("#p1").append("  <p>kemon aso???<p/>")


var myPara0=$('<p></p>').text("This is paragraph 0");
var myPara2=$('<p></p>').text("This is paragraph 2");
$('#p1').before(myPara0)
$('#p1').after(myPara2)