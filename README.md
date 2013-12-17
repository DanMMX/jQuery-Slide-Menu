# [jQuery-Slide-Menu](http://danmmx.github.io/jQuery-Slide-Menu/) #

A custom jQuery.accordion-like plugin for jQuery.

## Usage ##

### Script ###

```
  $("#slideMenu").slidemenu(options);
```

### HTML ###
```
<article id="slideMenu">
	<div data-submenu="#menu-1">
		<span>Menu 1</span>
	</div>
	<section id="menu-1">
		<ul>
			<li>
				<span>Menu 1 - 1</span>
			</li>
			<li>
				<span>Menu 1 - 2</span>
			</li>
			<li>
				<span>Menu 1 - 3</span>
			</li>
		</ul>
	</section>
	<div data-submenu="#menu-2">
		<span>Menu 2</span>
	</div>
	<section id="menu-2">
		<ul>
			<li>
				<span>Menu 2 - 1</span>
			</li>
			<li>
				<span>Menu 2 - 2</span>
			</li>
			<li>
				<span>Menu 2 - 3</span>
			</li>
		</ul>
	</section>
</article>			
```

## Options ##
```console

  {
    backButton : ".backSlideMenuButton",
    noBackButtons : false,
    hideMenuOnClick : true,
    buttonFunction: function,
    menuFunction: function,
    submenuFunction: function
  }
```
### backButton ###
Element created/took from the html to bind the back functionality. (Only available on small browsers/mobile.

### noBackButtons ###
Make it true if you want to disable the backButton functionality. You wouldn't go back in a submenu.

### hideMenuOnClick ###
Show/Hide functionality binded to the same element to show it (useful on noBackButtons: true :+1: ).

### buttonFunction ###
Accepts a function to execute when clicking on a back button or on a menu if not back button found/provided, sending the clicked object as an argument to the method called.
If not provided, the default action is to slideToggle the button for showing/hiding.

### menuFunction ###
Accepts a function to execute when clicking a menu, sending all the menus but the one clicked to the function as an argument (the ones you want to hide/dissapear).
If not provided, the default action is to slideToggle all the other menus.

### submenuFunction ###
Accepts a function to execute when a submenu is clicked, sending the submenu as an argument to the funcion.
If not provided, the default action is to slideToggle the current submenu.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/DanMMX/jquery-slide-menu/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

