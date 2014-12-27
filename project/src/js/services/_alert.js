module.factory('alert',[function (){
  var service = {
    show :  function(msg){
       if(!isApp){
         alert(msg);
       }else{
         intel.xdk.notification.alert(msg,"Mensagem","OK");
       }
    }
  };

  return service;

}]);





