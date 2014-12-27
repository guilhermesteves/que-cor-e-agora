/*
module.directive('lbPopup', [ '$modal','$rootScope', function(modal,rootScope) {
    return {
      restrict: 'A',
      link: function( scope, element, attrs ) {
        element.bind( "click", function() { 
          var instance = modal.open({ templateUrl : "view/"+ attrs.lbPopup +".html",
                                      controller : ['$scope','$modalInstance',function (scope,modalInstance){
                                                 
                                                  scope.$on('popup.close',function(){
                                                      modalInstance.close();
                                                  });

                                                  scope.$on('popup.dismiss',function(){
                                                       modalInstance.dismiss();
                                                  });
                                              }]

                                    });
          safeDigest(rootScope);
        });
      }
    };
}]);

*/


module.directive('lbPopup', [ 'popup','$rootScope', function(popup,rootScope) {
  return {
    restrict: 'A',
    link: function( scope, element, attrs ) {
      element.bind( "click", function() {
        popup.open(attrs.lbPopup);
        safeDigest(rootScope);
      });
    }
  };
}]);


module.directive('lbClosePopup', [ '$modal','$rootScope', function(modal,rootScope) {
  return {
    restrict: 'A',
    link: function( scope, element, attrs ) {
      element.bind( "click", function() {
        rootScope.$broadcast("popup.close");
      });
    }
  };
}]);

module.factory('popup',['$modal',function(modal){

  return {
    open : function(directive){
      return modal.open({
        template : "<"+directive+"/>",
        controller : ['$scope','$modalInstance',function (scope,modalInstance){

          scope.$on('popup.close',function(){
            modalInstance.close();
          });

          scope.$on('popup.dismiss',function(){
            modalInstance.dismiss();
          });
        }]
      });
    }
  };

}]);