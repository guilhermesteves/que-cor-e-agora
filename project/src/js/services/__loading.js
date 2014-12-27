module.factory('loading',['$rootScope','$timeout', function ($rootScope,$timeout){
    var service = {
      on :  function(){
                    $rootScope.loading = true;

                    $timeout(function(){

                      if($rootScope.loading){
                        $rootScope.spinnerStyle = {visibility : "visible"};

                        safeDigest($rootScope);
                       /*
                        if(isApp){
                          intel.xdk.notification.showBusyIndicator();
                        }
                         */
                      }
                    },600);
                  },

      off : function(){

                      $rootScope.loading = false;

                      $rootScope.spinnerStyle = {visibility : "hidden"};

                      safeDigest($rootScope);
                      /*
                      if(isApp){
                        intel.xdk.notification.hideBusyIndicator();
                      }
                      */
                    }
    };

    service.off();

    return service;

}]);





