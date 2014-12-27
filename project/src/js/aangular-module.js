var isApp = false;

var module = angular.module('QueCorEAgora', ['ui.bootstrap','angularSpinner', 'smoothScroll']);

function safeDigest(scope) {
  if(!scope.$$phase && !scope.$root.$$phase)
    scope.$digest();
}
