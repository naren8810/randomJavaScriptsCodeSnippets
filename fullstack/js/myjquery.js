$(document).ready(function(){
	$("#welcomemsg").click(function(){
		$("#welcomemsg").text("HELLO JQUERY");
	});

	$("#jqueryBtn").click(function(){
		var jQdiv1 = $("#jqueryDiv1").fadeToggle("slow",function(){
			alert("Text:" + $("#btn").text() + $("#nodeInJsP1").html());
		}).addClass("green");
		var jQdiv2 = $("#jqueryDiv2").slideToggle("slow");
		jQdiv2.animate({ height: '300px', opacity: '0.4'}, "slow");
		jQdiv2.animate({ width: '300px', opacity: '0.8'}, "slow");
		jQdiv2.animate({ height: '100px', opacity: '0.4'}, "slow");
		jQdiv2.animate({ width: '100px', opacity: '0.8'}, "slow", function(){
			var txt = "";
			txt += "Width: " + $("#jqueryDiv2").width();
			txt += "Height: " + $("#jqueryDiv2").height();
			txt += "Inner Width: " + $("#jqueryDiv2").innerWidth();
			txt += "Inner Height: " + $("#jqueryDiv2").innerHeight();
			txt += "Outer Width: " + $("#jqueryDiv2").outerWidth(true);
			txt += "Outer Height: " + $("#jqueryDiv2").outerHeight(true);
			alert("Animation Completed:" + txt );
		});
		
		var jQdiv3 = $("#jqueryDiv3").animate({
			left: '100px',
			opacity: '0.8',
			height: '+=100px',
			width: '+=100px',
		}).css("backgroundColor","blue"); //chaining methods / styles
		setTimeout(myFunction,1000);

		$("#jqueryPtag").css({"background-color":"yellow", "font-size":"200%"}).addClass("colorTextGreen").slideToggle("slow");
	});

	$("#jqueryBtn").dblclick(function(){
		$("#jqueryDiv3").animate({
			left: '0',
			opacity: '0.8',
			height: '100px',
			width: '100px',
		});
	});

	$("#jqueryStopBtn").click(function(){
		$("#jqueryDiv1").stop();
		$("#jqueryDiv2").stop();
		$("#jqueryDiv3").stop();
	});

	$("#ajaxJQuery").click(function(){
		$("#ajaxJQueryDiv").load("demo.txt", function(responseTxt, statusTxt, xhr){
	      if(statusTxt == "success")
	        alert("External content loaded successfully!");
	      if(statusTxt == "error")
	        alert("Error: " + xhr.status + ": " + xhr.statusText);
	    });
	});

	$("#ajaxJQuery").dbclick(function(){
		$("#ajaxJQueryDiv").load("demo.txt #p1");
	});
});


function myFunction(){
	$("#jqueryDiv3").animate({
			left: '0',
			opacity: '1',
			height: '+=100px',
			width: '+=100px',
		});
}

function appendText() {
  var txt1 = "<p>Text.</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text.";         // Create text with DOM
  $("body").append(txt1, txt2, txt3);   // Append new elements
}