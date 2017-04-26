define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;
    var state;
    var isIn;

    function init( config )
    {
      console.log( "  === rubric ===" );
      signals = config.signals;

      isIn = false;
      $('.spendtoggle').click( _spendtoggleClick );
    }

    function _spendtoggleClick( $evt )
    {
      state = parseInt( $( this ).attr( 'id' ).split('-')[1] );

      // sk: toggle selected for the `radio` button
      $.each( $( '.spendtoggle' ), function( index, val ) {
        $( this ).removeClass( 'selected' );
      });
      $( this ).addClass( 'selected' );

      // sk: show results (initially)
      if( ! isIn )
      {
       switch( state )
       {
          case 1 :
            $( '#card-1, #card-2, #card-3' ).removeClass( 'hide' );
            $( '#perks' ).removeClass( 'remove' );
          break
          case 2 :
            $( '#card-4, #card-5' ).removeClass( 'hide' );
            $( '#airlines' ).removeClass( 'remove' );
          break
       }

        $( '.toggle-results, .spend-toggle-dropdowns' ).addClass( 'show' );
        setTimeout( _addCards, 500 );
        isIn = true;
        return;
      }

      _removeCards();
      setTimeout( _addCards, 500 );
    }

    function _addCards()
    {
      switch( state )
      {
        case 1 :
          // dropdown
          $( '#perks' ).removeClass( 'hide-opacity' );
          for( var i = 0; i <= 2; i++ )
          {
            $( '.fpo-result-card' ).eq( i ).delay( 150 * i ).queue(function() {
              $( this ).addClass( 'show' ).clearQueue();
            });
          }
        break;
        case 2 :
          // dropdown
          $( '#airlines' ).removeClass( 'hide-opacity' );
          $( '#card-4' ).addClass( 'show' );
          setTimeout( function() {
            $( '#card-5' ).addClass( 'show' );
          }, 150 );
        break;
      }

    }

    function _removeCards()
    {
      switch( state )
      {
        case 1 :

          // dropdown
          $( '#airlines' ).addClass( 'hide-opacity' );

          // hide
          $( '#card-4' ).removeClass( 'show' );
          setTimeout( function() {
            $( '#card-5' ).removeClass( 'show' );
          }, 150 );

          // we need to wait a beat for the cards to animate out
          setTimeout( function(){
            // remove from DOM
            $( '#card-4, #card-5' ).addClass( 'hide' );
            $( '#airlines' ).addClass( 'remove' );
            // add to DOM
            $( '#card-1, #card-2, #card-3' ).removeClass( 'hide' );
            $( '#perks' ).removeClass( 'remove' );
          }, 300 );
        break;
        case 2 :

          // dropdown
          $( '#perks' ).addClass( 'hide-opacity' );

          // hide
          for( var i = 0; i <= 2; i++ )
          {
            $( '.fpo-result-card' ).eq( i ).delay( 150 * i ).queue(function() {
              $( this ).removeClass( 'show' ).clearQueue();
            });
          }

          // we need to wait a beat for the cards to animate out
          setTimeout( function(){
            // remove from DOM
            $( '#card-1, #card-2, #card-3' ).addClass( 'hide' );
            $( '#perks' ).addClass( 'remove' );
            // add to DOM
            $( '#card-4, #card-5' ).removeClass( 'hide' );
            $( '#airlines' ).removeClass( 'remove' );
          }, 300 );

        break;
      }
    }

    return { init: init };
  }
);
