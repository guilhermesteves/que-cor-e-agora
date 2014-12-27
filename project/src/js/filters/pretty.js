module.filter('pretty', function () {
    return function (text) {
        if(text){
            var arr = text.split(" ");

            for(var i = 0; i < arr.length; i++){
                var s = arr[i].toLowerCase();
                if( s != "com" && s != "de" && s != "do" && s != "da" && s != "em" && s != "no" && s != "na")
                    arr[i] =  arr[i].substring(0,1).toUpperCase() +  arr[i].substr(1).toLowerCase();
                else
                    arr[i] =  arr[i].toLowerCase();

            }
            return  arr.join(" ");
        }
        else
            return text;
    };

} );
