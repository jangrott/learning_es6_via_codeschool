'use strict';
(function () {
  let elements = ['A', 'B', 'C'];
  (function () {
    let first = elements[0];
    let second = elements[1];
    let third = elements[2];
    console.log("%s, %s, %s", first, second, third);
  })();

  (function () {
    let [first, second, third] = elements;
    console.log("%s, %s, %s", first, second, third);
  })();

  (function () {
    let [first, , third] = elements;
    console.log("%s, %s", first, third);
  })();

  (function () {
    let [first, ...others] = elements;
    console.log(first); // A
    console.log(others); // [B,C]
  })();

  (function () {
    for (let index in elements) {
      console.log(elements[index]);
    }

    for (let element of elements) {
      console.log(element);
    }
  })();

  (function () {
    let users = [
      {
        name: 'Tomasz',
        isActive: false
      },
      {
        name: 'Mike',
        isActive: true
      },
      {
        name: 'Robert',
        isActive: false
      }
    ];

    let activeUser = users.find( (user) => user.isActive);
    console.log(activeUser.name); // Mike
  })();

})();
