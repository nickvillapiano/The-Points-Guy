define(
  [ 'jquery'],
  function( $ )
  {
    var signals;
    var flickityTicker;
    var elem = document.querySelector('.ticker-item-wrapper');

    function init( config )
    {
      console.log( "  === home ===" );
      signals = config.signals;

      _setHeroHeight();
      _setTPGTVHeight();
      _setHeroImageSelectors();
    }

    function _setHeroHeight()
    {
      // NV: Match height on homepage hero module, ripped from StackOverflow
      // Select and loop the container element of the elements you want to equalise
      $('.home-hero').each(function(){
        // Cache the highest
        var highestBox = 0;
        // Select and loop the elements you want to equalise
        $('.home-hero-element', this).each(function(){
          // If this box is higher than the cached highest then store it
          if($(this).height() > highestBox) {
            highestBox = $(this).height();
          }
        });
        // Set the height of all those children to whichever was highest
        $('.home-hero-element',this).height(highestBox);
      });
    }

    function _setTPGTVHeight()
    {
      // see above function
      $('.tpgtv').each(function(){
        var highestBox = 0;
        $('.tpgtv-element', this).each(function(){
          if($(this).height() > highestBox) {
            highestBox = $(this).height();
          }
        });
        $('.tpgtv-element',this).height(highestBox);
      });
    }

    function _setHeroImageSelectors()
    {
      $('.home').keypress(function(e) {
        if(e.which == 49) {
          $('.home-hero').removeClass('hero2');
          $('.home-hero').removeClass('hero3');
          $('.home-hero').removeClass('hero4');
          $('.home-hero video').removeClass('show-video');
        }
      });
      $('.home').keypress(function(e) {
        if(e.which == 50) {
          $('.home-hero').toggleClass('hero2');
        }
      });
      $('.home').keypress(function(e) {
        if(e.which == 51) {
          $('.home-hero').toggleClass('hero3');
        }
      });
      $('.home').keypress(function(e) {
        if(e.which == 52) {
          $('.home-hero').toggleClass('hero4');
        }
      });
      $('.home').keypress(function(e) {
        if(e.which == 53) {
          $('.home-hero video').toggleClass('show-video');
        }
      });
    }

    return { init: init };
  }
);
