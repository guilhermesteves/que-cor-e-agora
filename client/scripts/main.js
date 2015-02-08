$(document).ready(function(){
  $("#hiddenmenu").sticky(
    { topSpacing: 0,
      className: 'sticky-visible'
    }
  );

  printBackground();
});

function MobilescrollToThis(target){
  var theArray = target.split('#');
  var desiredElement = jQuery('#' + theArray[1]).offset().top;
  jQuery('html,body').animate({ scrollTop: desiredElement}, 'slow');
}

function printBackground() {

  $('body').css({'transition': 'all 0.8s', '-webkit-transition': 'all 0.8s'});

  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  hour = (hour < 10) ? '0'+hour : ''+hour;
  min = (min < 10) ? '0'+min : ''+min;
  sec = (sec < 10) ? '0'+sec : ''+sec;

  var hex = '#' + hour + min + sec;

  $('#agora').html(hour +' : '+ min +' : '+ sec);
  $('#cor').html(hex);

  document.body.style.background = hex;

  setTimeout(
    function(){
      printBackground();
    },
    1000
  );
}
