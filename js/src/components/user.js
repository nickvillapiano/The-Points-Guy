define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;

    function init( config )
    {
      console.log( "  === user ===" );
      signals = config.signals;

      // NV: User page edit items
      $('.user-main-panel .edit').click(function(){
        $(this).next().next().toggleClass('engaged');
        $(this).toggleClass('engaged');
        if ( $('.edit').hasClass('engaged') ) {

        }
        else {
          setTimeout(
              function() {
                $('.alert-saved').addClass('show');
              },
          500);
          setTimeout(
              function() {
                $('.alert-saved').removeClass('show');
              },
          4000);
        }
      });
      $('.toggle-x').click(function(){
        $(this).parent().remove();
      });

      // AR: account settings user edit
      $( '.user-name + .edit' ).on('click', function(){
          $( '.profile-section .user-name' ).trigger('focus');
      });
    }

    return { init: init };
  }
);
