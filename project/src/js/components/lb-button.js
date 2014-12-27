 
 module.directive('lbButton', function() {
    return {
      restrict: 'E',
      transclude: 'element',
      template:
        '<button type="button" class="lb_btn btn" ></button>',
      compile:  function (element, attrs, transclude) {
        element.html(attrs.title);
        if(attrs.icon)
          element.addClass(attrs.icon);
      },  
      replace: true
    };
  }); 