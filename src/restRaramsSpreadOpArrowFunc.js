'use strict';
(function () {
  (function () {
    // rest params
    (function () {
      function concat(elements) {
        let res = '';
        for (let i in elements) {
          res += elements[i];
        }
        console.log(res);
      };

      concat(['A', 'B', 'C']); // ABC
      concat('A', 'B', 'C'); // A
    })();

    (function () {
      function concat(...elements) {
        let res = '';
        for (let i in elements) {
          res += elements[i];
        }
        console.log(res);
      };

      concat(['A', 'B', 'C']); // A,B,C
      concat('A', 'B', 'C'); // ABC
      // spread op
      concat(...['A', 'B', 'C']); // ABC
    })();

    (function () {
      // arrow func
      (function () {
        function Component(target, source) {
          this.target = target;
          this.source = source;
        }

        Component.prototype.render = function() {
          get(this.source, function(data) {
            //this.target.value = data; // TypeError: Cannot read property 'target' of undefined
          })
        }

        function get(src, next) {
          return next('data derived from source: ' + src);
        }

        let component = new Component({value: ''}, 'localhost');
        component.render();
      })();

      (function () {
        function Component(target, source) {
          this.target = target;
          this.source = source;
        }

        Component.prototype.render = function() {
          get(this.source, (data) => {
            this.target.value = data;
          })
        }

        function get(src, next) {
          return next('data derived from source: ' + src);
        }

        let component = new Component({value: ''}, 'localhost');
        component.render();
      })();

    })();

  })();
})();
