

(function () {
    var $ = this.jQuery;

    this.myExample = function () {};
    this.myVar = 99;
}());

//Make a React object globally so that we can access it inside index.html
//To demonstrate how the react library exports React object so that we are able to access it globally wherever imported
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.React = {}));
  }(this, (function (exports) { 'use strict';

  var ReactVersion = '18.2.0';

  exports.version = ReactVersion;

})));