define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;

    function init( config )
    {
      console.log( "  === cards ===" );
      signals = config.signals;

      // NV: Card Pick tooltip
      $('.card-pick .tooltip-trigger, .card-pick-tooltip .x-close').click(function(){
        $(this).parents().find('.tooltip-trigger').toggleClass('active');
        $(this).parents().find('.card-pick-tooltip').toggleClass('show');
        $(this).parents().find('.notch').toggleClass('active');
      });

      // AR: /hub-all-cards : All Cards view activator
      $('.cards-feed input').on('keyup', function() {
        if ($(this).val()) {
          $('.cards-feed-container').addClass('searching');
          $('.button.load-more, #arrow-icon').hide();
        } else {
          $('.cards-feed-container').removeClass('searching');
          $('.button.load-more, #arrow-icon').show();
        }
      });

      //NV: Add a Card flow
      // $('.card-mgmt, .user .card.new').click(function(){
      $('.add-card-trigger, .trigger-label, .user .card.new').click(function(){
        $('.add-a-card').addClass('show');
      });
      $('.add-a-card input').keypress(function(){
        $('.add-a-card .input-results').addClass('show');
      });
      $('.add-a-card .line-item').click(function(){
        $('.add-a-card .input-results').removeClass('show');
        $('.add-a-card .button').removeClass('inactive');
        $('.add-a-card input').val('Chase Sapphire Preferred');
        $('.add-a-card .selected-result').addClass('show');
      });
      $('.add-a-card .x-close, .add-a-card .button').click(function(){
        $('.add-a-card').removeClass('show');
      });

      //NV: Show Card Stats in Interactive Card Module
      $('.card-stats').click(function(){
        $('.card-stats').toggleClass('show');
      });

      // sk: beginners guide -- move to that page?
      var waypoint = $('.guide .card-pick').waypoint(function() {
        $('.card-pick.triggerable').addClass( 'notification-show' );
      },
      {
        offset: "70%",
        triggerOnce: true
      });
    }

    return { init: init };
  }
);
