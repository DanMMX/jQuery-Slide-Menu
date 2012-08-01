(function($){
	var methods = {
		init : function( options ) {			
			return this.each(function(){

				var settings = $.extend( $.fn.slidemenu.defaults, options);

				var $slidemenu = $(this),
					data = $slidemenu.data("slidemenu"),
					$backButton = $slidemenu.find(settings.backButton),
					$menus = $slidemenu.find("> ul:first-child").find("li"),
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
						if($($submenus).filter(":animated").length == 0){
							$elementList = $(this);
							if($elementList.find(settings.backButton).length == 0)
								if(settings.buttonFunction)
									buttonFunction($backButton);
								else
									$backButton.slideToggle("fast");
							else
								if(settings.buttonFunction)
									buttonFunction($elementList.find(settings.backButton));
								else
									$elementList.find(settings.backButton).slideToggle("slow");

							$submenu = $slidemenu.find($elementList.attr("data-submenu"));
							if(settings.submenuFunction)
								submenuFunction($submenu);
							else
								$submenu.slideToggle("slow");

							if(settings.menuFunction)
								menuFunction($menus.not($elementList));
							else
								$menus.not($elementList).slideToggle("slow");
						}
					});
				});

				$submenus = $(submenus);

				$backButton.hide().click(function(){
					$menus.filter(":hidden").slideToggle("slow");

					$submenus.not(":hidden").slideToggle("slow");
					$backButton.not(":hidden").slideToggle("slow");
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
		"backButton" : ".backSlideMenuButton"
	}
	
})(jQuery);