/* -- Larger Initial Top Section -- */
function InitialResize(){
  var lengthr = document.documentElement.clientWidth,
  heightr = document.documentElement.clientHeight;

  var source = document.getElementById('inicio');
  source.style.height = heightr+'px'; // uses current height of page
  source.style.width = lengthr+'px'; // Uses current width of page
}

function addEvent(element, type, listener){
  if(element.addEventListener){
    element.addEventListener(type, listener, false);
  }else if(element.attachEvent){
    element.attachEvent("on"+type, listener);
  }
}

addEvent(window, "load", InitialResize);
addEvent(window, "resize", InitialResize);
