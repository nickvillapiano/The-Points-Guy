define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;

    function init( config )
    {
      console.log( "  === nav ===" );
      signals = config.signals;

      //NV: Mobile menu
      $('.menu').click(function(){
        $('.home-nav').toggleClass('show');
        $('html, body').toggleClass('overflow-hidden');
      });
      $('.home-nav .x-close').click(function(){
        $('.home-nav').toggleClass('show');
        $('html, body').removeClass('overflow-hidden');
      });
      $('.search-trigger').click(function(){
        $('.home-nav').toggleClass('search-open');
      });
      $('.home-nav .x-close').click(function(){
        if ( $('.home-nav').hasClass('search-open') ) {
          $('.search').removeClass('show');
          $('.home-nav').removeClass('search-open');
        }
        else {
        }
      });


      //NV: Nav User Login/Cards
      $('.home-nav #user-icon').click(function(){
        $('.user-dropdown').toggleClass('show');
      });
      $('.user-dropdown a').click(function(){
        $('.user-dropdown').removeClass('show');
        $('.cards-icon').toggleClass('show');
        $('.add-card-trigger, .trigger-label').toggleClass('show');
      });
      $('.cards-icon').click(function(){
        $('.cards-dropdown').toggleClass('show');
      });

    }

    return { init: init };
  }
);
