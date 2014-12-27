
module.controller('indexController', ['$scope','$http','$filter','$window', function($scope,$http,$filter, $window){

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

    $('#t').html(hour +' : '+ min +' : '+ sec);
    $('#h').html(hex);

    document.body.style.background = hex;
    $(".navbar-brand").css({"color":hex});
    $(".main-page .navbar .nav > li > a").hover(function() {
      $(this).css({"background":hex});
    }).mouseout(function() {
      $(this).css("background","#f8f8f8");
    });

    setTimeout(
      function(){
        printBackground();
      },
      1000
    );
  }

  $scope.ie = $window.ie;
  $scope.dropdown = false;
  $scope.startColor = printBackground;

  $scope.hideDropdown = function(){
    $scope.dropdown = false;
  };

  $scope.toggleDropdown = function() {
    $scope.dropdown = !$scope.dropdown;
  };

  $scope.toRgba = function (hex,opacity){
      hex = hex.replace('#','');
      r = parseInt(hex.substring(0,2), 16);
      g = parseInt(hex.substring(2,4), 16);
      b = parseInt(hex.substring(4,6), 16);

      result = 'rgba('+r+','+g+','+b+','+opacity+')';
      return result;
  };

  // Início da função de cores
  printBackground();
}]);
