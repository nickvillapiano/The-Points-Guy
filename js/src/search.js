// sk: rewrite
define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;

    function init( config )
    {
      console.log( "  === search ===" );
      signals = config.signals;

      $( '.search-trigger' ).click( _openSearch );
      $( '.search .x-close' ).click( _closeSearch )
      $( '.search-results-order a' ).click( _fakeSort );
      $( '.search-bar input' ).keypress( { from: '.one', to: '.two' }, _changeState );
      $( '.search-bar input' ).change( { from: '.two', to: '.three' }, _changeState );

      // AR: remove initial highlight
      $( '.search-options' ).on('mouseover', function() {
        $( '.result.hilite' ).removeClass('hilite');
      });

      // AR: Dev mode show on load
      // _openSearch();
      // _changeState({data: { from: '.one', to: '.three' }});
    }

    function _changeState( $evt )
    {
      // console.log( "$evt.data", $evt.data );
      var from = $evt.data.from;
      var to = $evt.data.to;

      // AR: Always highlight first result
      if( to === '.two' ) {
        $('#result1').addClass('hilite');
      }

      if( to == '.three' )
      {
        $( '.search-bar input' ).val( 'Chase Sapphire Reserve' );
      }
      $( '.search-state' + from ).addClass( 'hide-opacity' );
      setTimeout( function() {
        $( '.search-state' + from ).addClass( 'remove' );
        $( '.search-state' + to ).removeClass( 'remove' );
        setTimeout( function() {
          $( '.search-state' + to ).removeClass( 'hide-opacity' );
        }, 100);
      }, 400);
    }

    function _closeSearch( $evt )
    {
      $( 'html, body' ).removeClass( 'overflow-hidden' );
      $( '.search' ).removeClass( 'show' );
      $( '.search-bar input' ).blur();
      $( '.search-bar input' ).val( '' );

      $( '.search-state.one, .search-state.two, .search-state.three' ).addClass( 'hide-opacity' );

      setTimeout( function() {
        $( '.search .article' ).each(function( i, el ) {
          $( this ).removeClass( 'show' );
        });
        $( '.search-state.one, .search-state.two, .search-state.three' ).addClass( 'remove' );
      }, 400);
    }

    function _openSearch( $evt )
    {
      $( 'html, body' ).toggleClass( 'overflow-hidden' );
      $( '.search' ).toggleClass( 'show' );
      $( '.search-bar' ).addClass( 'show' );
      $( '.search-bar input' ).focus();

      $( '.search-state.one' ).removeClass( 'remove' );

      setTimeout( function() {
        $( '.search-state.one' ).removeClass( 'hide-opacity' );

        // delay all articles
        $( '.search .article' ).each(function( i, el ) {
          $( el ).delay( 100 * i ).queue(function(){
             $( this ).addClass( 'show' ).clearQueue();
          });
        });
      }, 400);
    }

    // AR: Fake a sort
    function _fakeSort() {
      var resultsEls = $( '.all-results .search-result-full' ).get();
      var sortOn = this.attributes["sort-trigger"].value;

      // toggle the classes
      $( '.search-results-order .selected' ).removeClass('selected');
      $( this ).addClass('selected');

      // change our parent sort val
      $( '.search-step-3' ).attr('sort', sortOn);

      $( resultsEls.reverse() ).each(function() {
          $(this).detach().appendTo('.all-results');
      });
    }

    return { init: init };
  }
);
