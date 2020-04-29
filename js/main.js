$(document).ready(function()
{

	$("button.toggle-sidebar").click(function(){
		$("aside.left").slideToggle(300);
	});

	$("nav.main").on("mousedown", "button.home", function(e){
		if (e.which == 2){
			window.open("./", "_blank");
		}
		else if (e.qhich == 1){
			window.location.href = "./";
		}

	});

});