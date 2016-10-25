// Sliders
// ------------------------------------------------------------


var slick_sliders = [
	{
		selector: '.slider',
		limit: null,
		operator: null,
		args: {
			slidesToShow: 8,
			slidesToScroll: 4,
			infinite: false,
			slide: '.slide',
			dots: false,
			arrows: false,
			customPaging: function(slick,index) {
				return '<span></span>';
			},
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 6
					}
				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
				
			]
		}
	}
];

var operators = {
	'<': function(a, b) { return a < b },
	'>': function(a, b) { return a > b },
	'<=': function(a, b) { return a <= b },
	'>=': function(a, b) { return a >= b },
	'==': function(a, b) { return a == b }
}

function slick_init() {
	
	var window_width = jQuery(window).width();
	
	jQuery.each(slick_sliders, function(index, value){
		
		if (jQuery(value.selector).length > 0) {
			
			if (typeof(value.limit) === 'undefined' || value.limit == null) {
				
				if (!jQuery(value.selector).hasClass('slick-initialized')) {
					jQuery(value.selector).slick(value.args);
				}
			}
			else {
				
				if (operators[value.operator](window_width, value.limit)) {
					
					if (!jQuery(value.selector).hasClass('slick-initialized')) {
						jQuery(value.selector).slick(value.args);
					}
					
				}
				else {
					
					if (jQuery(value.selector).hasClass('slick-initialized')) {
						jQuery(value.selector).slick('unslick');
					}
					
				}
				
			}			
			
		}
		
	});
	
}

jQuery(document).ready(function(){
	
	slick_init();
	
	// Resize functions
	jQuery(window).resize(function(){
		slick_init();
	});
	
});