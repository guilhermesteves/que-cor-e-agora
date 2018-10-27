import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function InitialResize() {
  const lengthr = document.documentElement.clientWidth;
  // const heightr = document.documentElement.clientHeight;

  const source = document.getElementById('background');
   // uses current height of page
  source.style.width = lengthr+'px'; // Uses current width of page
}

function addEvent(element, type, listener) {
  if(element.addEventListener) {
    element.addEventListener(type, listener, false);
  }else if(element.attachEvent) {
    element.attachEvent("on"+type, listener);
  }
}

addEvent(window, "load", InitialResize);
addEvent(window, "resize", InitialResize);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
