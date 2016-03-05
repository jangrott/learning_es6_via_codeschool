'use strict';
(function () {
  var names = ['Thomas', 'Robert', 'Mike'];

  for (var i in names) {
    setTimeout(function () {
      console.log('Hello %s', names[i]); // each time prints Hello Mike
    }, 1000);
  }

  for (let i in names) {
    setTimeout(function () {
      console.log('Hello %s', names[i]); // works as we wish
    }, 1000);
  }

  let hello = 'Hello Devs';
  hello = 'Hello JS Devs';
  //let hello = 'Hello All'; // SyntaxError: Identifier 'hello' has already been declared

})();
