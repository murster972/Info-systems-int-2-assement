/* stylesheet for gallery main - country nav */

$(document).ready(function(){
	$('#SCT_imgs').mouseenter(function(){
		$('#scot_dark_trans_cover').css("background-color", "white")
		$('#scot_dark_trans_cover').css("opacity", "0.3")
		$('#scot_img_title').css("color", "blue")
	})

	$('#SCT_imgs').mouseleave(function(){
		$('#scot_dark_trans_cover').css("background-color", "black")
		$('#scot_dark_trans_cover').css("opacity", "0.7")
		$('#scot_img_title').css("color", "white")
	})

	$('#ENG_imgs').mouseenter(function(){
		$('#eng_dark_trans_cover').css("background-color", "white")
		$('#eng_dark_trans_cover').css("opacity", "0.3")
		$('#eng_img_title').css("color", "red")
	})

	$('#ENG_imgs').mouseleave(function(){
		$('#eng_dark_trans_cover').css("background-color", "black")
		$('#eng_dark_trans_cover').css("opacity", "0.7")
		$('#eng_img_title').css("color", "white")
	})

	$('#IRL_imgs').mouseenter(function(){
		$('#nirl_dark_trans_cover').css("background-color", "white")
		$('#nirl_dark_trans_cover').css("opacity", "0.3")
		$('#nirl_img_title').css("color", "green")
	})

	$('#IRL_imgs').mouseleave(function(){
		$('#nirl_dark_trans_cover').css("background-color", "black")
		$('#nirl_dark_trans_cover').css("opacity", "0.7")
		$('#nirl_img_title').css("color", "white")
	})

	$('#WAL_imgs').mouseenter(function(){
		$('#wal_dark_trans_cover').css("background-color", "white")
		$('#wal_dark_trans_cover').css("opacity", "0.3")
		$('#wal_img_title').css("color", "green")
	})

	$('#WAL_imgs').mouseleave(function(){
		$('#wal_dark_trans_cover').css("background-color", "black")
		$('#wal_dark_trans_cover').css("opacity", "0.7")
		$('#wal_img_title').css("color", "white")
	})
})