$(document).ready(function() {
  $(".kenkeiso").lettering();
  var fontColour = ["lightCoral","orangeRed","#ffccff","#17cfcf","goldenRod","lavender","#ccf5a3","chocolate","#009B77","cadetBlue","gold","mediumSlateBlue","seaGreen","antiqueWhite"];
  var backgroundColour = ["darkKhaki","navajoWhite","steelBlue","#B565A7","oliveDrab","LightSeaGreen","#7575a3","paleGoldenRod","#EFC050","conflowerBlue","royalBlue","rosyBrown","#9B2335","sienna"];
  var randColour = Math.floor(Math.random() * 13)
  document.body.style.backgroundColor = backgroundColour[randColour];
  document.getElementsByClassName("kenkeiso")[0].childNodes.forEach(function(element)
  {
	element.style.color = fontColour[randColour];
  });
document.getElementsByClassName("button")[0].style.color = fontColour[randColour];
document.getElementsByClassName("button")[1].style.color = fontColour[randColour];
document.getElementsByClassName("button")[2].style.color = fontColour[randColour];
});


function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
