$(document).ready(function(){
	
	
});


// wrap the videoin an iframe
// ------------------------------------------------

function iframeVideo() {
	$('iframe[src*="vimeo.com"],[src*="youtube.com"]').wrap('<div class="iframe-wrapper"></div>');
}

/*
function width_test() {
		
	if (window.matchMedia('(min-width: 1000px)').matches) {
		$('.wide-js').css('display', 'block');
		$('.thin-js').css('display', 'none');
	} else {
		$('.wide-js').css('display', 'none');
		$('.thin-js').css('display', 'block');
	}

}
*/

// Setup waypoint watch
/*
$('.waypoint').each(function(i) {
    var self = $(this);
    var step_in = self.find('.step-in');
    var reveal_offset = self.attr('data-offset') ? self.attr('data-offset') + '%' : '90%';
                
    var waypoint = self.waypoint({
        handler: function(direction) {
            step_in.addClass('reveal');
                        
            // stuff has fired once, now let's destroy it
            this.destroy();
        },
        offset: reveal_offset
    })
});
*/