module.factory('storage',['$rootScope', function (rootScope){
    var storage = (typeof(Storage)!=="undefined" ? localStorage : {});

   var service = {
     put : function(key,value){
         storage["cr_"+key] = value;
     },
     get : function(key){
         return storage["cr_"+key];
     },
     remove : function(key){
         delete storage["cr_"+key];
     }
   };


    return service;

}]);



