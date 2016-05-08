/* sets the image path */
//starts
window.onload = function getCountry(){
	var title = document.title;
	var countries = ["England", "Scotland", "Wales", "Northern Ireland"]

	for(var i = 0; i < 4; i += 1){
		var country = countries[i]

		if(title.search(country) > 0){
			path = "../images/image viewer/" + country + "/";
			break;
		}
	}
}
//ends

/* displays the image viewer */
//starts
$(document).ready(function(){
	$('.img_containers').click(function(){
		$('#title_p').fadeOut("fast")
		$('#image_viewer_dark_cover').fadeIn(300)
		$('#image_viewer_main_container').fadeIn(300)
	})

	$('#image_viewer_dark_cover').click(function(){
		$('#image_viewer_main_container').fadeOut('fast')
		$('#image_viewer_dark_cover').fadeOut()
		$('#title_p').fadeIn("fast")
	})
})
//ends

/* image viewer effects and navigation */
//starts
window.img = ""
window.poss = 1
window.image = ""
window.path = ""

/* sets the image to begin with */
//starts
function imageViewer(img, pos){
	img = img
	poss = Number(pos)
	image = img + pos + ".jpg"

	$('#img_pos_p').text(poss + "/20")
	$('#MAIN_IMG').attr("src", path + image)
}
//ends

/* navigation */
//starts
function imageViewerNav(nav){
	if(nav === "next"){
		if(poss === 20){
			poss = 1
			image = "img" + poss + ".jpg"

			$('#img_pos_p').text(poss + "/20")
			$('#MAIN_IMG').hide().attr("src", path + image).fadeIn(600)
		}

		else{
			poss += 1
			image = "img" + poss + ".jpg"

			$('#img_pos_p').text(poss + "/20")
			$('#MAIN_IMG').hide().attr("src", path + image).fadeIn(600)
		}
	}

	else{
		if(poss === 1){
			poss = 20
			image = "img" + poss + ".jpg"

			$('#img_pos_p').text(poss + "/20")
			$('#MAIN_IMG').hide().attr("src", path + image).fadeIn(600)
		}

		else{
			poss -= 1
			image = "img" + poss + ".jpg"

			$('#img_pos_p').text(poss + "/20")
			$('#MAIN_IMG').hide().attr("src", path + image).fadeIn(600)
		}
	}
}
//ends

/* effects for the navigation and the position of the image */
//starts
$(document).ready(function(){
	$("#nav_hide_fix").mouseenter(function(){
		$("#img_nav_container_l").fadeIn()
		$("#img_nav_container_r").fadeIn()
		$("#pos_main_container").fadeIn()
	})

	$("#nav_hide_fix").mouseleave(function(){
		$("#img_nav_container_l").fadeOut()
		$("#img_nav_container_r").fadeOut()
		$("#pos_main_container").fadeOut()
	})

	$("#img_nav_container_l").mouseenter(function(){
		$("#img_nav_l_p").css("color", "red")
	})

	$("#img_nav_container_l").mouseleave(function(){
		$("#img_nav_l_p").css("color", "white")
	})

	$("#img_nav_container_r").mouseenter(function(){
		$("#img_nav_r_p").css("color", "red")
	})

	$("#img_nav_container_r").mouseleave(function(){
		$("#img_nav_r_p").css("color", "white")
	})
})
//ends

/* control for the arrow keys */
//starts
$(document).keyup(function(e){
	if(e.which == 39){
		imageViewerNav("next")
	}

	else if(e.which == 37){
		imageViewerNav("prev")
	}
})
//ends
//ends