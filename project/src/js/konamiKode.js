  $(function () {
    // Konami code - up up down down left right left right b a
    var code1 = String.fromCharCode(38, 38, 40, 40, 37, 39, 37, 39, 66, 65);
    var code2 = String.fromCharCode(38, 38, 40, 40, 37, 39, 37, 39, 65, 66);
    var codeBuffer = "";
    $(document).keyup(function (e) {
      codeBuffer += String.fromCharCode(e.which);
      if (code1.substring(0, codeBuffer.length) == codeBuffer) {
        if (code1.length == codeBuffer.length) {
          toggle1();
          codeBuffer = String.fromCharCode(38, 38, 40, 40, 37, 39, 37, 39, 66);
        }
      } else if (code2.substring(0, codeBuffer.length) == codeBuffer) {
        if (code2.length == codeBuffer.length) {
          toggle2();
          codeBuffer = "";
        }
      } else {
        codeBuffer = "";
      }
    });

    function toggle1() {
      $("body").allejoNeles();
    }

    function toggle2() {
      window.DEBUG_FLAG = !window.DEBUG_FLAG;
      window.DEBUG_FILTER_INCLUDE = null;
      window.DEBUG_FILTER_EXCLUDE = null;
      window.DEBUG_TO_CONSOLE = false;
      window.logInited=true;

      updateConsoleVisibility();
    }
  });

  (function ($) {

    var contadorDeAllejo = 0;

    $.fn.allejoNeles = function (options) {

      var allejoComemoraImgUrl = '../img/allejo-comemora.png';
      var allejoBicicletaImgUrl = '../img/allejo-bicicleta.png';
      var allejoDrible = '../img/allejo-drible.png';
      var allejoGolImgUrl = '../img/allejo-gol.png';
      var allejoBGImgUrl = '../img/allejo-bg.jpg';

      var viking1 = '../img/viking-01.png';
      var viking2 = '../img/viking-02.png';
      var viking3 = '../img/viking-02.png';

      var allejoNoArray = [ viking1, viking2, viking3, allejoComemoraImgUrl, allejoBicicletaImgUrl, allejoDrible ];
      var randomIndex = getIndexByPercentage();
      var allejoImgUrl = allejoNoArray[randomIndex];

      var defaults = {
        enterOn: 'timer',
        delayTime: 100
      };

    //Extend those options
    options = $.extend(defaults, options);

    function getIndexByPercentage() {
        /*
        * Se 1,2 ou 3 --> imagens dos vikings, peso 1
        * Se 3 ou superior --> imagens do allejo, peso 5
        *
        */
        var min = 1, max = 23;
        var random = parseInt(Math.random() * (max - min) + min);
        console.log(random);
        if (random > 3) {
          if (random > 18) {
            return 5;
          } else {
            if (random < 13) {
              return 3;
            } else {
              return 4;
            }
          }
        } else {
          return random-1;
        }
      }

    return this.each(function () {

      var _this = $(this);
      var audioSupported = false;

      $("#allejo").remove();
      var locked = false;

      var aMaxWidth;
      var aMaxHeight;

      if (randomIndex == 4 || randomIndex == 5) {
        aMaxWidth = "220px";
        aMaxHeight = "160px";
      } else {
        aMaxWidth = "120px";
        aMaxHeight = "110px";
      }

      var aBottom;
      if (randomIndex === 0 || randomIndex == 1 || randomIndex == 2) {
        aBottom = "-35px";
      } else {
        aBottom = "-310px";
      }

      var allejoImg = '<img style="display: none;z-index:30000" src="' + allejoImgUrl + '" />';
      var allejo = $(allejoImg);
      $('body').append(allejo);
      allejo.css({
        "position": "fixed",
        "bottom": aBottom,
        "right": "0",
        "display": "block",
        "z-index": "999",
        "max-width": aMaxWidth,
        "max-height": aMaxHeight
      });

      var allejoWidth = parseInt($( window ).width() / 4);
      var allejoHeight = parseInt($( window ).height() / 4);

      if (allejoWidth < 410) {
        allejoWidth = 410;
      }

      if (allejoHeight < 116) {
        allejoHeight = 116;
      }

      var top = (parseInt($( window ).height() / 2) - allejoHeight ).toString();
      var right = (parseInt($( window ).width() / 2) - allejoWidth ).toString();

      var allejoGolImg = '<img style="display: none;z-index:30000" src="' + allejoGolImgUrl + '" />';
      var allejoGol = $(allejoGolImg);
      $('body').append(allejoGol);
      allejoGol.css({
        "position": "fixed",
        "top": top+"px",
        "right": right+"px",
        "display": "none",
        "z-index": "995",
        "min-width": allejoWidth.toString()+"px !important",
        "min-height": allejoHeight.toString()+"px !important"
      });

      var allejoBGImg = '<img style="display: none;z-index:30000" src="' + allejoBGImgUrl + '" />';
      var allejoBG = $(allejoBGImg);
      $('body').append(allejoBG);
      allejoBG.css({
        "position": "fixed",
        "top": "0",
        "right": "0",
        "display": "none",
        "width": "100%",
        "height": "100%",
        "z-index": "990",
        "max-width": "1024px !important",
        "max-height": "768px !important"
      });

      init();

      function init() {
        var imageAllejo = new Image();
        imageAllejo.onload = function () { vaiAllejo(); };
        imageAllejo.src = allejoImgUrl;

        var imageGol = new Image();
        imageGol.onload = function () { vaiGol(); };
        imageGol.src = allejoBGImgUrl;

        /*var imageBG = new Image();
        imageBG.onload = function () { vaiBackground(); };
        imageBG.src = allejoBGImgUrl;*/
      }

      function vaiAllejo() {
        locked = true;

          // Movement Hilarity
          allejo.animate({
            "bottom": "0"
          }, function () {

            $(this).animate({
              "bottom": "-10px"
            }, 100, function () {
              var offset = (($(this).position().left) + 400);
              $(this).delay(300).animate({
                "right": offset
              }, 2200, function () {
                allejo.remove();
                locked = false;
              });
            });
          });
        }

      function vaiBackground() {

        allejoBG.fadeIn( 100, function() {
          allejoBG.fadeOut( 2200, function() {
            allejoBG.remove();
          });
        });
      }

      function vaiGol() {
        allejoGol.show();
        var options = {direction: "up", times: 7, distance: 10};

        allejoGol.effect( "shake", options, 100, function() {
          setTimeout(function(){
            allejoGol.removeAttr('style').hide().remove();
          }, 10);
        });
      }
    });
};
})(jQuery);
