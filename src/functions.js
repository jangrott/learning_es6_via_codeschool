'use strict';
(function () {

  (function () {
    function count(elements) {
      console.log('Length: %s', elements.length);
    };

    count(['A', 'B', 'C']); // 3
    count([]); // 0
    //count(); // TypeError: Cannot read property 'length' of undefined
    //count(undefined); // TypeError: Cannot read property 'length' of undefined
  })();

  (function () {
    function count(elements = []) {
      console.log('Length: %s', elements.length);
    };

    count(['A', 'B', 'C']); // 3
    count([]); // 0
    count(); // 0
    count(undefined); // 0
  })();

  (function () {
    function getProfile(name, additionalInfo) {
      console.log('Name: %s', name);
      console.log(additionalInfo.countryCode);
      console.log(additionalInfo.age);
    };

    getProfile('Tomasz', {countryCode: 'PL', age: '27'});
    getProfile('Tomasz', {countryCode: 'PL'}); // age undefined
    //getProfile('Tomasz'); // TypeError: Cannot read property 'countryCode' of undefined
  })();

  (function () {
    function getProfile(name, {countryCode, age} = {}) {
      console.log('Name: %s', name);
      console.log(countryCode);
      console.log(age);
    };

    getProfile('Tomasz', {countryCode: 'PL', age: '27'});
    getProfile('Tomasz', {countryCode: 'PL'}); // age undefined
    getProfile('Tomasz'); // countryCode undefined, age undefined
  })();

})();
