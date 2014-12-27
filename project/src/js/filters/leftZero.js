module.filter('leftZero', function () {
  return function (number,length) {
    if(number !== undefined){
      number = number.toString();
      if(number.length < length){
        for(var i = 0 ; i < length - number.length; i++){
          number = "0" + number;
        }
      }
    }

    return number;
  };

} );
