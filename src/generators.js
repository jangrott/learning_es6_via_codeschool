'use strict';
(function () {
  let user = {
    name: "Tom", age: 14, isActive: false
  };

  user[Symbol.iterator] =  function* () {
    let properties = Object.keys(this);

    for (let property of properties) {
      yield this[property];
    }
  };

  for (let propertyValue of user) {
    console.log(propertyValue); // Tom\n14\nfalse
  }

  let props = [...user];
  console.log(props); // [ 'Tom', 14, false ]
})();
