'use strict';
(function () {
  let user = {
    name: "Tom", age: 14, isActive: false
  };

  user[Symbol.iterator] = function(){

    let properties = Object.keys(this);
    let count = 0;
    let isDone = false;

    let next = () => {
      if(count >= properties.length){
        isDone = true;
      }

      let value = this[properties[count++]];

      return {done: isDone, value};
    };
    return { next };
  };

  for (let propertyValue of user) {
    console.log(propertyValue); // Tom\n14\nfalse
  }

  let props = [...user];
  console.log(props); // [ 'Tom', 14, false ]
})();
