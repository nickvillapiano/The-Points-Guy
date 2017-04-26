require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'jquery-2.1.4.min',
    lodash: 'lodash.min',
    signal: 'signals.min',
    waypoints: 'jquery.waypoints.min',
    src: '../src',
    components: '../src/components'
  },
  shim: {
    waypoints: [ "jquery" ]
  }
});

require(
  [
    'src/home',
    'src/search',
    'components/ticker-items',
    'components/rubric',
    'components/nav',
    'components/cards',
    'components/user',
    'components/global',
    'components/toc-trigger',
    'signal',
    'jquery',
    'lodash',
    'waypoints'
  ],
  function(
    home,
    search,
    tickerItems,
    rubric,
    nav,
    cards,
    user,
    global,
    tocTrigger,
    Signal,
    $,
    _
  )
  {
    $( document ).ready( init );

    function init()
    {
      console.log( "=== init ===" );
      var config = {
        signals: {
          'open'             : new Signal(),
          'dom-ready'        : new Signal()
        }
      };

      config.signals['dom-ready'].add( _onDomReady );

      // sk: initialize all main modules. add config object.
      if( $( 'body' ).hasClass( 'home' ) )
      {
        home.init( config );
        tickerItems.init( config );
        rubric.init( config );
      }else if( $( 'body' ).hasClass( 'hub' ) )
      {

      }else if( $( 'body' ).hasClass( 'user' ) )
      {
        user.init( config );
      }

      // sk: global interactions
      nav.init( config );
      search.init( config );
      cards.init( config );
      global.init( config );
      tocTrigger.init( config );

      _onDomReady();
    }

    function _onDomReady()
    {
      // sk: hide everything until ready
      $( 'body' ).addClass( 'in' );
      setTimeout( function(){
        $( 'body' ).removeClass( 'fade' );
      }, 300 );
    }
  }
);
