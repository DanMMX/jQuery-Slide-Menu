# jQuery-Slide-Menu #

A custom jQuery.accordion-like plugin for jQuery.

## Usage ##
```console
  $("#slideMenu").slidemenu();
```
## Options ##
```console

  {
    backButton : ".backSlideMenuButton",
    noBackButtons : false,
    hideMenuOnClick : true
  }
```
### backButton ###
Element created/took from the html to bind the back functionality. (Only available on small browsers/mobile.

### noBackButtons ###
Make it true if you want to disable the backButton functionality. You wouldn't go back in a submenu.

### hideMenuOnClick ###
Show/Hide functionality binded to the same element to show it (useful on noBackButtons: true :+1: ).
