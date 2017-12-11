$(function(){

  var videos = {
    'evangelion': '-nmmQ6k-JbY',
    'black-steve-nash': 'mjmVHt5ZubA',
    'dmbh': '2CJihhJixc8'
  };

  if (typeof(Storage) !== "undefined") {
    if (Number(localStorage.visitCount) > 1) {

      $('.intro').removeClass('intro');
    } else {
      $('body').addClass('intro');
    }

    if (localStorage.visitCount) {

      localStorage.visitCount = Number(localStorage.visitCount) + 1;
    } else {
      localStorage.visitCount = 1
    }
  } else {
      // Sorry! No Web Storage support..
  }

  var vendor = $('.vendor');
  var main = $('main');

  $("#video").fitVids();

  // on click switch link

  $('.topbar__item').on('click', function(){

    var elem = $(this);

    // don't switch video for active or tbd
    if (elem.hasClass('topbar__item--active') || elem.hasClass('topbar__item--tbd')) {

      return false;
    }

    var video = elem.data('video');
    var videoId = videos[video];
    var videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1';

    $('#video__frame').attr('src', videoUrl);

    scrollCenter();


    // update classes
    $('.topbar__item--active').removeClass('topbar__item--active');

    $('div[data-video="' + video + '"]').addClass('topbar__item--active');
  });

  function scrollCenter() {

    if (window.matchMedia('(max-width: 600px)').matches) {

      $('html, body').scrollTop(9000);
      return;
    }

    var offsetNav = 75; //150;
    var centerOfVideo = (vendor.offset().top - offsetNav - ( $(window).height() - vendor.outerHeight(true) ) / 2);

    $('html, body').scrollTop(centerOfVideo);
  }

  setTimeout(function(){
    scrollCenter();

  }, 500)

  setTimeout(function(){
    $('.intro').removeClass('intro');

  }, 5000)

});
