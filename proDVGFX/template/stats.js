(function($) {  // Avoid conflicts with other libraries
	jQuery(document).ready(function($){
		var tabContainers = $('div.tabstats > div');
		tabContainers.hide().filter(':first').show();
		$('div.tabstats ul.tabNav a').click(function () {
			//Change beginning effect
			tabContainers.slideUp(450);
			//Change ending effect
			tabContainers.filter(this.hash).slideDown(550);
		$('div.tabstats ul.tabNav a').removeClass('selected');
		$(this).addClass('selected');
		return false;
		}).filter(':first').click();
	});
})(jQuery); // Avoid conflicts with other libraries