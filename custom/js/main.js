// --------------------------------------------------------- //
// DOCUMENT READY
// --------------------------------------------------------- //
$(document).ready(function() {

  // MAGNIFIC POPUP
  $('.lightbox').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', 

    // Gallery mode
    gallery:{
      enabled:true
    },

    // Zoom mode
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });

});


// --------------------------------------------------------- //
// PAGINATION SHOTS
// --------------------------------------------------------- //
$(function(){

  $(".holder").jPages({
    containerID : "itemContainer",
    perPage : 15,
    next : "",
    previous  : "",
  });

});


// --------------------------------------------------------- //
// OPEN RESPONSIVE MENU
// --------------------------------------------------------- //
$('.responsive-menu-bt').click(function(){
  $('.site-nav').fadeIn(600);
  $('.close-responsive-menu').show();
});

// --------------------------------------------------------- //
// CLOSE APPSTORE FRAME
// --------------------------------------------------------- //
$('.close-responsive-menu').click(function(){
  $('.site-nav').fadeOut(300);
  $('.close-responsive-menu').hide();
});