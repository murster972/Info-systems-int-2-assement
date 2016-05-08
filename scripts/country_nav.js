/* stylesheet for index country nav */

$(document).ready(function(){
	$("#ENG").mouseenter(function(){
		$('#ENG_title').css("background-color", "black")
		$('#ENG_p').css("color", "red")
	})

	$("#ENG").mouseleave(function(){
		$('#ENG_title').css("background-color", "red")
		$('#ENG_p').css("color", "white")
	})

	$("#SCT").mouseenter(function(){
		$('#SCT_title').css("background-color", "black")
		$('#SCT_p').css("color", "blue")
	})

	$("#SCT").mouseleave(function(){
		$('#SCT_title').css("background-color", "blue")
		$('#SCT_p').css("color", "white")
	})

	$("#WAL").mouseenter(function(){
		$('#WAL_title').css("background-color", "black")
		$('#WAL_p').css("color", "green")
	})

	$("#WAL").mouseleave(function(){
		$('#WAL_title').css("background-color", "green")
		$('#WAL_p').css("color", "white")
	})

	$("#IRL").mouseenter(function(){
		$('#IRL_title').css("background-color", "black")
		$('#IRL_p').css("color", "green")
	})

	$("#IRL").mouseleave(function(){
		$('#IRL_title').css("background-color", "green")
		$('#IRL_p').css("color", "white")
	})
})