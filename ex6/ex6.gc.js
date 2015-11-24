(function(){

	function fetchText() {
		var text = texts[(Math.round(Math.random() * 1E2) % texts.length)];
		var delay = Math.max(200,Math.round(Math.random() * 1E4) % 1000);
		var $elem = $("<p></p>").text(text);

		$h1.after($elem);

		$elems.unshift($elem);

		texts_count++;

		if (texts_count > 4) {
			$elem = $elems.pop();
			$elem.remove();
		}

		$elem = null;

		setTimeout(fetchText,delay);
	}

	var texts = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet nisi vitae diam feugiat consequat. Aliquam cursus blandit nisi, sit amet viverra lectus fringilla vel. Etiam ut ipsum elit. Etiam at dolor sem. Fusce nec leo id est ornare rhoncus laoreet at mi. In non scelerisque magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ut varius justo. Phasellus fermentum molestie euismod. Morbi et erat eu dolor dignissim mollis. Nam lectus libero, tristique quis laoreet sed, tristique in magna.",
		"Aliquam id diam vel diam dictum dictum. Maecenas porttitor egestas arcu ut tincidunt. Morbi facilisis sodales ipsum ac consectetur. In tristique scelerisque pulvinar. Sed aliquam egestas ligula, sed iaculis nisi luctus vitae. Maecenas rutrum elementum purus vel gravida. Sed nec nisl mauris, sed pulvinar lacus. Integer viverra lacus vitae erat molestie egestas. Nulla at metus lacus, malesuada aliquam sem. Integer posuere ultrices est, vitae euismod lacus aliquam mattis. Nulla facilisi. Fusce vitae gravida nisi. Duis eros urna, sollicitudin ultrices rhoncus faucibus, interdum at sem. Nam sapien justo, ullamcorper sed posuere sollicitudin, mollis ac erat. Sed pharetra, justo vitae tincidunt dignissim, eros turpis lobortis est, a hendrerit odio tortor vel justo. Sed lacinia luctus est, ac fermentum augue ornare sed.",
		"Maecenas laoreet porttitor nunc, eu facilisis lorem dignissim quis. Duis sed dui justo, a accumsan lorem. Nam vel nunc vitae purus sagittis porta nec sit amet lacus. Proin lacus mauris, dictum a imperdiet vitae, ultrices vitae nibh. Donec adipiscing aliquet porttitor. Etiam nulla sapien, feugiat vel euismod in, ultricies id libero. Suspendisse tincidunt risus eget felis faucibus suscipit. Quisque non odio vitae est facilisis congue. Quisque dui felis, posuere nec feugiat nec, fermentum eu turpis. Vestibulum tortor orci, pellentesque vitae laoreet pulvinar, tincidunt at neque. Donec id nunc et ipsum dictum eleifend eget at diam. Aenean accumsan, leo a bibendum tempus, ante eros cursus arcu, sed malesuada lectus mauris vestibulum nunc. Pellentesque vel enim dolor, et consectetur velit.",
		"In magna lacus, tincidunt a laoreet eget, dictum quis lacus. Aenean fermentum aliquam felis, quis commodo tortor molestie quis. Pellentesque at orci vel diam aliquet tempus a et orci. Nunc at mauris erat. Donec vitae lectus vitae justo feugiat viverra. Cras dictum dapibus purus vitae congue. Cras vitae vehicula magna. Fusce placerat cursus luctus. Morbi ultrices ligula a tortor scelerisque bibendum laoreet leo lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Quisque lacus magna, vulputate vitae sodales non, mattis id augue. Proin venenatis nisi vitae turpis feugiat in blandit nisl suscipit. Donec suscipit bibendum porttitor. Etiam blandit justo aliquam leo vulputate pretium. Ut libero diam, condimentum vitae pulvinar at, laoreet ac ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pharetra diam vitae orci mollis at fringilla quam tincidunt. Nam sapien urna, interdum in ullamcorper eget, convallis vel lorem. Nullam et turpis sed ante commodo rutrum et vel lorem. Nullam in nisl at elit bibendum molestie. Pellentesque et ipsum enim. Integer quis laoreet augue. Sed sit amet tincidunt quam. Aliquam vitae dui arcu, sit amet sodales ante.",
		"Sed cursus gravida sapien ut congue. Fusce laoreet arcu at quam venenatis posuere. Maecenas posuere, ipsum id ornare porttitor, lorem quam blandit enim, vel vehicula elit orci quis mi. Phasellus mollis fermentum ligula quis vestibulum. Nam pharetra molestie lacus, sed aliquet augue consequat vel. Proin condimentum lorem eget ipsum ornare egestas varius dolor pharetra. Nullam accumsan enim quis quam lobortis faucibus. Ut malesuada, felis id pulvinar pretium, est augue tristique nisi, et lacinia mauris risus sit amet nisi. Aenean in tortor nulla, nec ornare diam. Sed laoreet interdum risus. Aenean nulla tortor, gravida vitae rhoncus at, interdum vel eros. Vivamus tincidunt egestas adipiscing. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet auctor arcu. Integer erat tellus, tristique ut tincidunt et, commodo sed lectus.",
		"Donec quam metus, congue tristique ullamcorper et, sollicitudin dictum ipsum. Fusce luctus, mi sit amet imperdiet rhoncus, magna eros fermentum risus, vel fermentum felis eros ac felis. Nullam feugiat mauris vel nisi fermentum pellentesque tempus in sapien. Curabitur malesuada rhoncus commodo. Nam bibendum turpis lacinia enim rhoncus id cursus mauris commodo. Nunc vehicula laoreet enim, sit amet fringilla nunc ornare sit amet. In nec iaculis risus. In a ante in justo adipiscing faucibus a in felis. Phasellus rutrum rutrum massa ac suscipit. Cras nunc tellus, viverra at imperdiet eget, adipiscing ac arcu. Vivamus laoreet, massa a euismod malesuada, erat magna condimentum risus, vulputate congue quam magna sed turpis. In egestas feugiat nisi, quis sollicitudin velit rhoncus tempor.",
		"Pellentesque libero velit, ultricies id faucibus quis, fringilla ac lectus. Nam quis metus metus. Integer ut vestibulum quam. Proin ligula massa, iaculis non rhoncus non, faucibus vitae lacus. Aenean viverra neque ut arcu condimentum semper. Nulla et nibh in justo fringilla eleifend sed ut felis. Mauris luctus dictum nibh, at suscipit eros commodo nec.",
		"Pellentesque augue lacus, euismod sit amet bibendum nec, porttitor quis enim. Phasellus arcu ipsum, convallis vitae ullamcorper id, hendrerit non ipsum. In dapibus mauris nec nisi luctus ac consequat nisl ultricies. Maecenas quis mauris a mi ultrices luctus eleifend ultricies lorem. Integer ac mi nec lacus mattis iaculis. In hac habitasse platea dictumst. Suspendisse dictum nibh ut urna elementum sed rutrum quam dictum. Mauris sollicitudin quam vel massa ornare placerat. Duis sollicitudin sapien in nisi viverra in vehicula justo dictum. Nam in diam dolor. Mauris venenatis leo nec ante rhoncus congue. Donec bibendum sapien vitae ante sollicitudin condimentum ullamcorper quam rhoncus.",
		"Phasellus pretium, nibh commodo placerat mollis, justo velit ultricies nunc, posuere pharetra tortor quam non orci. Quisque aliquet pulvinar enim, eget luctus ligula elementum nec. Nullam sollicitudin ligula sit amet ligula euismod et commodo mauris lacinia. Aliquam dolor elit, dignissim ac tempus a, egestas vel mauris. In pellentesque adipiscing sapien, in accumsan dui varius bibendum. Donec tincidunt, magna in aliquam lobortis, ante erat placerat lorem, vitae sollicitudin lorem magna vitae purus. Curabitur porta nibh id erat aliquet vitae placerat massa rutrum. Aliquam ullamcorper lacinia nibh, vitae lobortis nibh euismod eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, nulla nec semper faucibus, arcu turpis pretium sapien, et hendrerit mauris nisl ut purus. Integer eget risus eget mi elementum egestas."
	];

	var $body = $(document.body);
	var $elems = [];
	var $spinner = $("#spinner");
	var $h1 = $("h1:eq(0)");
	var texts_count = 0;


	fetchText();

})();