
// this is the .para2:
/*
Donec turpis risus, ultricies vitae vulputate a, vestibulum ac magna. Sed id sapien elit, vel egestas tortor. Nulla facilisi. Curabitur sem libero, ullamcorper at convallis vel, rhoncus sit amet nunc. Proin lorem mi, mollis sit amet dapibus ut, venenatis eu lorem. Phasellus viverra, velit sed feugiat adipiscing, urna urna pulvinar lacus, tempor consectetur tellus erat ut tellus. Quisque lacus elit, rutrum ut sagittis eu, tristique et nisl. Suspendisse scelerisque, nisl ac consectetur tincidunt, lorem velit pulvinar est, quis pulvinar ipsum purus at purus. Phasellus id felis hendrerit quam faucibus commodo.
*/

// this is the .para3:
/*
Pellentesque aliquam posuere nisl et ultricies. Etiam sollicitudin turpis consequat ante ultricies ut venenatis massa ultrices. Sed eget mauris ipsum. Maecenas aliquet, dolor ac feugiat sodales, dui libero bibendum erat, a ullamcorper dolor nisl a est. Ut sagittis ligula at mi ultrices malesuada id feugiat arcu. Vivamus quis augue vitae leo porta dapibus. Pellentesque mattis pretium tortor at accumsan. Integer et augue dui, at auctor mauris. Duis pretium, elit a aliquam pretium, mauris arcu fermentum lacus, eu viverra justo nibh et sapien. 
*/


$(document).ready(function(){
	var $imglist = $("<div></div>");
	var $img;

	for (var j=0; j<5; j++) {
		for (var i=0; i<3; i++) {
			$img = $("<img>");
			$img.addClass("img2").addClass("foo" + (i+1));
			$imglist.append($img);
		}
	}

	$(".para2").after($imglist);

	$imglist = $("<div></div>");

	for (var j=0; j<5; j++) {
		for (var i=0; i<3; i++) {
			$img = $("<img>");
			$img.addClass("img2").addClass("foo" + (i+1));
			$imglist.append($img);
		}
	}

	$(".para3").after($imglist);

});