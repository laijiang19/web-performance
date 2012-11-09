// silly/naive fibonnaci
function calcFib(n) {
	var n2 = 0;
	var n1 = 1;
	var calc = n2;
	if (n > 1) {
		return calcFib(n-1) + calcFib(n-2);
	}
	else {
		return n;
	}
	return calc;
}

self.onmessage = function(evt) {
	var answer = calcFib(evt.data);
	self.postMessage(answer);
};
