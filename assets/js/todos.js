$("ul").on("click","li",function () {
	/*if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	}
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}*/

	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); 		//prevent bubbling
});

$("input[type='text'").keypress(function(){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> "+todoText+"</li>");
	}
});