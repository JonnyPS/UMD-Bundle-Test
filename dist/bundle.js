(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Entry = {}));
}(this, (function (exports) { 'use strict';

  function PrintGreeting() {
    console.log('hello world');
  }

  exports.PrintGreeting = PrintGreeting;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
