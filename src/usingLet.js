'use strict';
(function (condition) {
  if (condition) {
    var varA = 'Variable declared with var';
    let varB = 'Variable declared with let';
  }
  console.log(varA); // undefined
  console.log(varB); // ReferenceError: varB is not defined
})(false);
