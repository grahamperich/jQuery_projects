$(".question").click(function() {
	$(this).next().slideToggle("fast");
	$(this).children().toggleClass("collapse");
})

$("h1").mouseover(function() {
	$("h1").animate({ fontSize: "31px" }, 1000);
	$("h1").animate({ fontSize: "30px" }, 1000);
		
})
	


$("h1").click(function () {
	console.log($(this));
	$(this)
	.animate({ 

		opacity: 0.25, 
		

		}, 500, function() {
		$(this).animate({
			opacity: 1.0,
			
			})
	});
})

// $("#q1").click(function() {
// 	$("#a1").slideToggle("fast");
// 	$("#arrow1-down, #arrow1-up").toggleClass("collapse");
// })

// $("#q2").click(function() {
// 	$("#a2").slideToggle("fast");
// 	$("#arrow2-down, #arrow2-up").toggleClass("collapse");
// })

// $("#q3").click(function() {
// 	$("#a3").slideToggle("fast");
// 	$("#arrow3-down, #arrow3-up").toggleClass("collapse");
// })