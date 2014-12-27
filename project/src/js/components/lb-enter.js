module.directive('lbEnter', [ function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
           
            element.bind('keyup',function(){
                if(event && event.which == 13){
                    scope.$apply(attrs.lbEnter);
                }
            });
                      
        }
    };
}]);