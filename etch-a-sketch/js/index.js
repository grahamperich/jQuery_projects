
$(document).ready(function () {
	
		for (var i = 0; i < 255; i++) {
			$(".square").first().clone().appendTo("#container");
		};

		$(document).on('mouseenter',".square",function(){
			$(this).css("background-color", "blue");
		});

			//	$(document).on('mouseout',"#square",function(){
			//		$(this).css("background-color", "white");
			//	});     //this line can be enabled if you want to just 'highlight' certain squares only while hovering
		
		
		$("#clear-grid").click(function(a){  //function to clear/redraw etch-a-sketch

			$(".square").each(function() {
				$(this).remove();
			})

		var a = prompt("Enter your desired number of squares in each row");
				
		var newSquareSize = 480 / a ;  //480 is the canvas size in main.css
				
				
			$("<div class='square'></div>").appendTo( "#container");

			$(".square").css("width", newSquareSize); // sets width and height of squares to comply with user's desired number of squares per row
			$(".square").css("height", newSquareSize);

			var loopController = (a * a) - 1; // we start with 1 square from 'appento' line above, so we have to -1 here
			
			for (var i = 0; i < loopController; i++) {
				$(".square").first().clone().appendTo("#container");
			};

		});	
});
