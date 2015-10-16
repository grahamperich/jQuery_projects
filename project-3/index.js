$(document).ready(function () {

	$("#list-items").html(localStorage.getItem("savedListItems"));


    $(".add-items").submit(function(event){
    	event.preventDefault();
   

    	var item = $("#todo-list-item").val(); 

    	
    	if (item) {
    		$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
    		localStorage.setItem("savedListItems", $("#list-items").html());
    		$("#todo-list-item").val(""); 
    	}

    }); //add item to list

	$(document).on("change", ".checkbox", function() {

		if($(this).attr("checked")) 
			
			{$(this).removeAttr("checked");} 

		else {$(this).attr("checked", "checked");}

		$(this).parent().toggleClass("completed");
		localStorage.setItem("savedListItems", $("#list-items").html());


	}); //add strikethrough to finished tasks


	$(document).on("click", ".remove", function(){

		$(this).parent().remove()
		localStorage.setItem("savedListItems", $("#list-items").html());
	}); //remove list item

});
