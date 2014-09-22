(function ($) {
	$.fn.konami = function (callback) {
		var codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
		var history = [];

		$(this).keydown(function (e) {
			history.push(e.keyCode);
			if (history.length > codes.length) {
				history.shift();
			}
			if (history.length == codes.length && JSON.stringify(history) == JSON.stringify(codes)) {
				callback();
			}
		});
		return this;
	}
})(jQuery);
