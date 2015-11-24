(function(){

	function setNewPosition($elem,x,y) {
		$elem
		.addClass("moving")
		.css({
			left: x + "px",
			top: y + "px"
		})
		.bind("transitionend webkitTransitionEnd oTransitionEnd",function(evt){
			$elem.removeClass("moving").unbind("transitionend webkitTransitionEnd oTransitionEnd");
		});
	}

	var $body = $(document.body);
	var $elems = [];
	var $elem;
	var colors = ["red","green","blue","orange","gray","yellow"];
	var left, top, bgcolor;
	var $highlighted;

	for (var i=0; i<10; i++) {

		left = Math.max(10,Math.round(Math.random() * 1E4) % 400);
		top = Math.max(100,Math.round(Math.random() * 1E4) % 400);
		bgcolor = colors[(Math.round(Math.random() * 1E3) % colors.length)];

		$elem = $("<div></div>").addClass("elem").html((i+1));
		$elem.css({
			left: left + "px",
			top: top + "px",
			zIndex: (i+1),
			backgroundColor: bgcolor
		});
		$elems.push($elem);
		$elem.appendTo($body);
	}

	$body.on("click",".elem",function(evt){
		if (!$highlighted) {
			var $elem = $(evt.target);
			if (!$elem.is(".moving")) {
				$highlighted = $elem;
				$elem.addClass("highlighted");

				evt.preventDefault();
				return false;
			}
		}
	});

	$(document).bind("click",function(evt){
		if ($highlighted) {
			setNewPosition($highlighted,evt.pageX,evt.pageY);
			$highlighted.removeClass("highlighted");
			$highlighted = false;

			evt.preventDefault();
			return false;
		}
	});

})();