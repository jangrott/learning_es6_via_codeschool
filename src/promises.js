'use strict';
(function () {

  function checkEven(val) {
    return val % 2 == 0;
  };

  (function () {
    function get(num, callback) {
      if (checkEven(num)) {
        return callback(null, num);
      }
      return callback('error');
    };

    function after(error, data) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(`${data} is even`);
    };

    get(2, after);
    get(3, after);
  })();

  (function () {
    function get(num) {
      return new Promise(function (resolve, reject) {
        if (checkEven(num)) {
          resolve(num);
        } else {
          reject(new Error('error'));
        }
      });
    };

    function success(data) {
      console.log(`${data} is even`)
    };

    function error(error) {
      console.log(error.toString());
    };

    get(2)
      .then(success)
      .catch(error);

    get(7)
        .then(success)
        .catch(error);
  })();
})();
