define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;

    function init( config )
    {
      console.log( "  === table of contents trigger ===" );
      signals = config.signals;

      //NV
      $('#check-in').click(function(){
        $('.toc-trigger').toggleClass('show');
      });
    }

    return { init: init };
  }
);
