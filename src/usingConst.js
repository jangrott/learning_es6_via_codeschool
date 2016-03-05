'use strict';
(function () {
  const MAX_VALUE = 255;

  (function () {
    const MIN_VALUE = 0
    console.log(MAX_VALUE); // 255
    console.log(MIN_VALUE); // 0
  })();
  console.log(MAX_VALUE); // 255
  console.log(MIN_VALUE); // ReferenceError: MIN_VALUE is not defined
  //MAX_VALUE = 120; // TypeError: Assignment to constant variable.
})();
