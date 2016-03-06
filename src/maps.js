'use strict';
(function () {
  let userOne = {name: 'Adam'};
  let userTwo = {name: 'Mike'};

  (function () {
    let numberOfReplies = {};

    numberOfReplies[userOne] = 14;
    numberOfReplies[userTwo] = 28;

    console.log(numberOfReplies[userOne]); // 28
    console.log(numberOfReplies[userTwo]); // 28
    console.log(Object.keys(numberOfReplies)); // [ '[object Object]' ]

    // for (let [key, val] of numberOfReplies) {
    //   console.log(`${key} : ${val}`);
    // } // TypeError: numberOfReplies[Symbol.iterator] is not a function
  })();

  (function () {
    let numberOfReplies = new Map();
    numberOfReplies.set(userOne, 14);
    numberOfReplies.set(userTwo, 28);

    console.log(numberOfReplies.get(userOne)); // 14
    console.log(numberOfReplies.get(userTwo)); // 28

    for (let [key, val] of numberOfReplies) {
      console.log(`${key} : ${val}`);
    }

    // has, delete works as in WeakMap
  })();

  (function () {
    let numberOfReplies = new WeakMap();
    // numberOfReplies.set('primitve_key', 'value'); // TypeError: Invalid value used as weak map key
    numberOfReplies.set(userOne, 14)
    console.log(numberOfReplies.get(userOne)); // 14
    let exists = numberOfReplies.has(userOne);
    console.log(exists); // true;
    let res = numberOfReplies.delete(userOne);
    console.log(res); // true
    console.log(numberOfReplies.get(userOne)); // undefined
  })();
})();
