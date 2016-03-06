'use strict';
(function () {
  (function () {
    let elements = [];
    elements.push('A');
    elements.push('B');
    elements.push('C');
    elements.push('A');

    console.log(elements.length); // 4 - duplicates allowed
  })();

  (function () {
    let elements = new Set();
    elements.add('A');
    elements.add('B');
    elements.add('C');
    elements.add('A');

    console.log(elements.size); // 3

    let exists = elements.has('D');
    console.log(exists); // false

    elements.delete('A');
    exists = elements.has('A');
    console.log(exists); // false

    for (let element of elements) {
      console.log(element);
    }

    let [first] = elements;
    console.log(first); // B
  })();

  (function () {
    let elements = new WeakSet();
    // elements.add(12); // TypeError: Invalid value used in weak set

    elements.add({name: 'JS'});
    let exists = elements.has({name: 'JS'});

    console.log(exists); // false

    let java = {name: 'Java'};
    elements.add(java);
    exists = elements.has(java);

    console.log(exists); // true
  })();
})();
