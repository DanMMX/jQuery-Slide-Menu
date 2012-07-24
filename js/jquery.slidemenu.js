(function($){
	var methods = {
		init : function( options ) {			
			return this.each(function(){

				var settings = $.extend( $.fn.slidemenu.defaults, options);

				var $slidemenu = $(this),
					data = $slidemenu.data("slidemenu"),
					$backButton = $slidemenu.find(settings.backButton),
					$menus = $slidemenu.find("ul:first-child").find("li"),
					$submenus, 
					submenus = "";

				if($backButton.length <= 0 ){
					$backButton = $("<div />").addClass("backSlideMenuButton").text("<Back");

					$slidemenu.prepend($backButton);
				}

				if ( !data ){
					$slidemenu.data("slidemenu", { $backButton : $backButton });
				}

				$menus.each(function(){
					$elementList = $(this);
					submenus += submenus == "" ? $elementList.attr("data-submenu") : "," + $elementList.attr("data-submenu");
					$submenu = $slidemenu.find($elementList.attr("data-submenu"));

					$submenu.hide();

					$elementList.click(function(){
						if($($menus).filter(":animated").length == 0){
							$elementList = $(this);
							$submenu = $slidemenu.find($elementList.attr("data-submenu"));
							$submenu.slideToggle("slow");
							$menus.not($elementList).slideToggle("slow");
							$backButton.slideToggle("fast");
						}
					});
				});

				$submenus = $(submenus);

				$backButton.hide().click(function(){
					$submenus.not(":hidden").slideToggle("slow");
					$menus.filter(":hidden").slideToggle("slow");

					$(this).slideToggle("slow");
				});

				data = $slidemenu.data("slidemenu");
			});
		},
		destroy : function() {
			return this.each(function(){
				var $this = $(this),
					data = $this.data("slidemenu");

				$(window).unbind(".slidemenu");
				data.slidemenu.remove();
				$this.removeData("slidemenu");
			});
		}
	};

	$.fn.slidemenu = function ( method ) {
		if ( methods[method] ) {
			return methods[method].apply(this, Array.prototype.slice.call( arguments, 1));
		}else if ( typeof method === "object" || ! method ){
			return methods.init.apply( this, arguments);
		}else{
			$.error( "Method " + method + " does not exist on jQuery.slidemenu" );
		}
	};

	$.fn.slidemenu.defaults = {
		"side" : "top",
		"backButton" : ".backSlideMenuButton"
	}
	
})(jQuery);