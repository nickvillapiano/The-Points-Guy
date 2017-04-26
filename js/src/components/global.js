define(
  [ 'jquery' ],
  function( $ )
  {
    var signals;

    function init( config )
    {
      console.log( "  === utils ===" );
      signals = config.signals;

      _setSmoothScroll();

      // AR: kill all hash anchors
      $( 'a[href="#"]' ).on('click', function(e) {
        e.preventDefault();
      });

      // NV: Toggle Advertiser Discloser
      $('.disclosure, .advertiser-disclosure-body .x-close').click(function(){
        $('.advertiser-disclosure-body').toggleClass('show');
      });

      //NV: Soft create account notification
      $('.article .i-have-this-card').click(function(){
        setTimeout(
            function() {
              $('.notification-bar').toggleClass('expand');
            },
        3000);
      });
      $('.notification-bar .x-close').click(function(){
        $('.notification-bar').toggleClass('expand');
      });

      // NV: FPO trigger for notification on guide
      $('#choose-a-powerful-card').click(function(){
        $('.notification-bar').toggleClass('expand');
      });

      // NV: I Have This Card animation
      $('.i-have-this-card').click(function(){
        $(this).parent().toggleClass('animate');
        $(this).parent().next().toggleClass('animate');
        $(this).toggleClass('checked');
      });

      // sk: custom dropdown
      //NV: Dropdown
      $('.dropdown-trigger').click(function(){
        $(this).parent().toggleClass('open');
      });

      // sk: custom switch on user page
      //NV: Control trigger
      $('.control-macro').click(function(){
        $(this).toggleClass('enabled');
      });

      // sk: user page
      // NV: Carat animation
      $('.carat').click(function(){
        $(this).toggleClass('engaged');
        $(this).next().toggleClass('hide');
      });
      if ($(window).width() < 690) {
        $('.carat').addClass('engaged');
        $('.carat + *').addClass('hide');
      }
      else {
        $('.carat').removeClass('engaged');
        $('.carat + *').removeClass('hide');
      }
      $(window).resize(function() {
        if ($(window).width() < 690) {
          $('.carat').addClass('engaged');
          $('.carat + *').addClass('hide');
        }
       else {
          $('.carat').removeClass('engaged');
          $('.carat + *').removeClass('hide');
       }
      });

      // AR: Modal create
      $( '[modal-launch-img]' ).on( 'click', function(){
        var $template = $($('#modal-template').html());
        var imgPath = this.attributes['modal-launch-img'].value
        $template.find('.modal-core').html("<img src='"+imgPath+"'/>");
        $('body').append($template);
      });

      // AR: Modal Tear-down
      $('body, .modal-core').on('click', '[modal-destroy]', function(){
        $(this).closest('.modal').remove();
      });

      // NV: Trigger gallery
      $('.inline-img, .gallery-module .x-close').click(function(){
        $('.gallery-module').toggleClass('show');
      });

      // AR: video page junkus
      $( '.video-poster' ).on('click', function() {
        var iframe = $( this ).next().get(0);
        $( this ).fadeOut('slow');
        var player = new Vimeo.Player(iframe);
        player.play();
      });

      // NV: Toggle "Javascript" Terms/Conditions
      $('.carat-trigger').click(function(){
        $(this).parent().find('.more-things-to-know').toggleClass('show');
        $(this).parent().toggleClass('carat-flip');
      });


      //NV: Show/Hide Notes - Valuation table
      $('.table tbody td:last-of-type').click(function(){
        $(this).parent().toggleClass('show');
      });
    }

    function _setSmoothScroll()
    {
      // NV: Smooth scroll (from css-tricks.com)
      $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
    }

    return { init: init };
  }
);
