define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;
    var el;
    var tickerItems;

    // number of ticket items to show
    var pageSize = 4;

    // The items to display
    var $currentTickerItems = "";

    // the current page
    var currentPage = 0;

    // the last page
    var maxPage = 0;

    function init( config )
    {
      console.log( "  === ticker-items ===" );
      signals = config.signals;

      // sk: base // waypoint element
      el = $( '.points-ticker' );
      tickerItems = el.find( '.ticker-item' );

      // set the last page
      maxPage = Math.floor(tickerItems.length / pageSize);

      // No stray items? Remove trailing page
      if (tickerItems.length % pageSize === 0) {
        maxPage--;
      }

      // AR: Keep waypoint from screaming if ticker not present
      if ( el.length > 0 ) {
        // sk: waypint, 75% down the page
        var waypoint = new Waypoint({
          element: el[0],
          handler: function(){
            _showTickerItems('init');

            // AR: kill this once it's executed
            this.destroy();
          },
          offset: '75%'
        });
      }

      // [AR] TODO: THROTTLE THESE
      $('body').on('click', '.ticker-nav.next', function() {
        _refreshTickerItems('next');
      });
      $('body').on('click', '.ticker-nav.prev', function() {
        _refreshTickerItems('prev');
      });
    }

    // AR: Show the ticker items
    function _showTickerItems(direction)
    {

      // the page we're moving to
      var newPage;

      if (direction == "init") {
        newPage = 0;
      }

      if (direction == "next") {
        newPage = (currentPage + 1 > maxPage) ? 0 : currentPage + 1;
      }

      if (direction == "prev") {
        newPage = (currentPage - 1 < 0) ? maxPage : currentPage - 1;
      }

      // set our page boundaries
      var newMin = newPage * pageSize;
      var newMax = newMin + pageSize;

      // grab the ticker items to show
      $currentTickerItems = tickerItems.slice(newMin, newMax);

      // update the global value
      currentPage = newPage;

      // add the nav thing to our stack
      var itemsToShow = $currentTickerItems.addClass('toShow');

      // sk: delay the presentation
      itemsToShow.each(function( i, el ){
        $( el ).delay( 150 * i ).queue(function(){
          var $this = $(this);
          $this.addClass( 'show' ).clearQueue();
          _animateNumber($this.find('.number-animate'));
        });
      });
    }

    // AR: Remove current ticker items.
    function _refreshTickerItems(direction)
    {
      // add the nav thing to our stack
      var itemsToHide = $currentTickerItems;

      itemsToHide.each(function( i, el ){
        $( el ).delay( 100 * i ).queue(function(){
          $(this).addClass('out').removeClass( 'show' ).clearQueue();
        });
      });

      // switch the elements to `display: none` when animations are finished on final el
      $('.ticker-item.show:last').one('transitionend', function(e) {
        itemsToHide.removeClass('toShow out');
        _showTickerItems(direction);
      });
    }

    // AR: Given a number, count upwards
    function _animateNumber($elToAnimate) {
      var currentNum = 0;
      // grab/parse the current number from the element
      var numberCap = parseFloat($elToAnimate.html());

      var interval = setInterval(function() {

        // increment
        currentNum += 0.1;

        // set the el to ONE decimal place
        $elToAnimate.html(currentNum.toFixed(1));

        // kill the interval once original number is reached
        if (currentNum >= numberCap) {
          clearInterval(interval);
        }
      }, 50);
    }

    return { init: init };
  }
);
