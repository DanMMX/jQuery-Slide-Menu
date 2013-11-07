(function($){
	var methods = {
		init : function( options ) {			
			return this.each(function(){

				var settings = $.extend( $.fn.slidemenu.defaults, options);

				var $slidemenu = $(this),
					data = $slidemenu.data("slidemenu"),
					$backButton = $slidemenu.find(settings.backButton),
					$menus = $slidemenu.find(" > [data-submenu]"),
					$submenus, 
					submenus = "";

				if($backButton.length <= 0 && !settings.noBackButtons){
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
						if(!$(this).hasClass("selected")){
							$(".selected").removeClass("selected");
							$(this).addClass("selected");
							if($slidemenu.filter(":animated").add(".noTransition").length == 0){
								$elementList = $(this);
								if($elementList.find(settings.backButton).length == 0)
									if(settings.buttonFunction)
										buttonFunction($backButton);
									else
										$backButton.slideToggleCss("slow");
								else
									if(settings.buttonFunction)
										buttonFunction($elementList.find(settings.backButton));
									else
										$elementList.find(settings.backButton).slideToggleCss("slow");


								if(settings.menuFunction)
									menuFunction($menus.not($elementList));
								else{
									if(options.hideMenuOnClick){
										$menus.not($elementList).slideToggleCss("slow");
									}else{
										
									}
								}

								$submenu = $slidemenu.find($elementList.attr("data-submenu"));							
								$submenus.not($submenu).slideUpCss("slow");
								if(settings.submenuFunction)
									submenuFunction($submenu);
								else
									$submenu.slideDownCss("slow");
							}
						}else{
							$(".selected").removeClass("selected");
							$submenu = $slidemenu.find($elementList.attr("data-submenu"));
							$submenu.slideUpCss("slow");
						}
					});
					$(document).scrollTop(0);
					$menus.scrollTop(0);
				});
	
				$submenus = $(submenus);
				if(settings.autoHideBackButtons)
					$backButton.hide();

				$backButton.click(function(){
					$menus.filter(":hidden").slideToggleCss("slow");

					if(settings.submenuFunction)
						buttonFunction($submenus.not(":hidden"));
					else
						$submenus.not(":hidden").slideToggleCss("slow");
					
					if(settings.buttonFunction)
						buttonFunction($(this));
					else
						$backButton.not(":hidden").slideToggleCss("slow");
				});

				var hashVal = window.location.hash.split("#")[1];
				if(hashVal){
					$slidemenu.find("[data-submenu=#"+hashVal+"]").click();
					
					$(document).scrollTop(0);
					$(".paper.menu.two-thirds.column").scrollTop(0);
				}
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
		"backButton" : ".backSlideMenuButton",
		"noBackButtons" : false,
		"hideMenuOnClick" : true
	}
	
})(jQuery);
