/* stylesheet for nav bar */

$(document).ready(function(){
	$('#SCT_topnav').mouseenter(function(){
		$('#SCT_topnav').css("background-color", "black")
		$('#top_nav_title_SCT').css("color", "white")
	})

	$('#SCT_topnav').mouseleave(function(){
		$('#SCT_topnav').css("background-color", "white")
		$('#top_nav_title_SCT').css("color", "black")
	})

	$('#ENG_topnav').mouseenter(function(){
		$('#ENG_topnav').css("background-color", "black")
		$('#top_nav_title_ENG').css("color", "white")
	})

	$('#ENG_topnav').mouseleave(function(){
		$('#ENG_topnav').css("background-color", "white")
		$('#top_nav_title_ENG').css("color", "black")
	})

	$('#WAL_topnav').mouseenter(function(){
		$('#WAL_topnav').css("background-color", "black")
		$('#top_nav_title_WAL').css("color", "white")
	})

	$('#WAL_topnav').mouseleave(function(){
		$('#WAL_topnav').css("background-color", "white")
		$('#top_nav_title_WAL').css("color", "black")
	})

	$('#IRL_topnav').mouseenter(function(){
		$('#IRL_topnav').css("background-color", "black")
		$('#top_nav_title_IRL').css("color", "white")
	})

	$('#IRL_topnav').mouseleave(function(){
		$('#IRL_topnav').css("background-color", "white")
		$('#top_nav_title_IRL').css("color", "black")
	})

	$('.home_nav').mouseenter(function(){
		$('.home_nav').css("background-color", "black")
		$('#top_nav_title_HME').css("color", "white")
	})

	$('.home_nav').mouseleave(function(){
		$('.home_nav').css("background-color", "white")
		$('#top_nav_title_HME').css("color", "black")
	})

	$('#GALL_topnav').mouseenter(function(){
		$('#GALL_topnav').css("background-color", "black")
		$('#top_nav_title_GALL').css("color", "white")
	})

	$('#GALL_topnav').mouseleave(function(){
		$('#GALL_topnav').css("background-color", "white")
		$('#top_nav_title_GALL').css("color", "black")
	})
})