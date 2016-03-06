'use strict';
(function () {

  (function () {
    function buildUser(name, surname, age) {
      let fullName = name + " " + surname;
      const OLD_START_AGE = 60;
      return {name: name, surname: surname, fullName: fullName, isOld: function () {
        return age >= OLD_START_AGE;
      }};
    };

    let user = buildUser('Adam', 'Mickiewicz', 80);
    console.log(user.name);
    console.log(user.surname);
    console.log(user.fullName);
    console.log(user.isOld());
  })();

  (function () {
    function buildUser(name, surname, age) {
      let fullName = `${name} ${surname}`;
      const OLD_START_AGE = 60;
      return {name, surname, fullName, isOld() {
        return age >= OLD_START_AGE;
      }};
    };

    (function () {
      let user = buildUser('Adam', 'Mickiewicz', 80);
      console.log(user.name);
      console.log(user.surname);
      console.log(user.fullName);
      console.log(user.isOld());
    })();

    (function () {
      let {name, surname, fullName, isOld} = buildUser('Jan', 'Kochanowski', 59);
      console.log(name);
      console.log(surname);
      console.log(fullName);
      console.log(isOld());
    })();

    (function () {
      let {fullName} = buildUser('Juliusz', 'Slowacki', 92);
      console.log(fullName);
    })();

  })();

  (function () {

    (function () {
      function settings(options) {
        let settings = {};
        settings.color = options.color || 'black';
        settings.size = options.size || 18;
        settings.bg = options.bg || 'white';

        console.log(settings);
      };
      settings({}); // { color: 'black', size: 18, bg: 'white' }
      settings({color: 'white', bg: 'black'}); // { color: 'white', size: 18, bg: 'black' }
    })();

    (function () {
      function settings(options = {}, additionalOptions = {}) {
        let defaults = {
          color: 'black',
          size: 18,
          bg: 'white'
        };

        let settings = Object.assign({}, defaults, options, additionalOptions);

        console.log(settings);
      };

      settings({}); // { color: 'black', size: 18, bg: 'white' }
      settings({color: 'white', bg: 'black'}); // { color: 'white', size: 18, bg: 'black' }
      settings({color: 'white', bg: 'black'}, {size: 22}); // { color: 'white', size: 22, bg: 'black' }
    })();

  })();

})();
