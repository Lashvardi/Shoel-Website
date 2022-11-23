$.fn.hoverDelay = function(options) {
	var defaultOptions = {
		delayIn: 300,
		delayOut: 300,
		handlerIn: function(){},
		handlerOut: function(){}
	};
	options = $.extend(defaultOptions, options);
	return this.each(function() {
		var timeoutIn, timeoutOut;
		var $element = $(this);
			$element.hover(
				function() {
			    if (timeoutOut){
		        clearTimeout(timeoutOut);
			    }
			    timeoutIn = setTimeout(function(){options.handlerIn($element);}, options.delayIn);
				},
				function() {
			    if (timeoutIn){
		        clearTimeout(timeoutIn);
			    }
			    timeoutOut = setTimeout(function(){options.handlerOut($element);}, options.delayOut);
				}
			);
    });
};
