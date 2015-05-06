$(document).ready(function(){
$("#coop").hide();
$("#clickme").click(function(){
	$("#coop").slideDown('slow');
	});
$("#clickme2").click(function(){
	$("#coop2").slideUp('slow');
});
$("#coop3").hide();
$("#clickme3").click(function(){
	$("#coop3").fadeIn('slow');
});
$("#clickme4").click(function(){
	$("#coop4").fadeOut('slow');
});
$("#coop5").hide();
$("#clickme5").click(function(){
	$("#coop5").show();
});
$("#name").click(function(){
	$("#focus").html("focus event triggered").fadeOut(2000);
});
$("#clickme6").click(function(){
	$("#mother").addClass("hen");
});
$("#clickme7").click(function(){
	$(".coop7").after("<p>Bradley Cooper is a demigod</p>");
});
$("#clickme8").click(function(){
	$(".coop8").before("<p>Bradley Cooper is my prince charming</p>");
});
$("#clickme9").click(function(){
	$("#georgetown").html("Yes I knew he went to Georgetown.");
});
$("#clickme10").click(function(){
	$("#phil").text("His nickname is \"the Coop\"");
});
$("#clickme11").click(function(){
	$("#coop11").attr("width", "700");
});
$("#clickme12").click(function(){
	$("#name2").val("Denise Chiang");
});
$("#clickme13").click(function(){
	$("#how").append(" <strong>He is so charming.</strong");
});
$("#clickme14").click(function(){
	$("#coop14").slideToggle();
});
$("#clickme15").click(function(){
	$("#coop15").toggle();
});
});