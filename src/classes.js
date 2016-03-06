'use strict';
(function () {
  (function () {
    function Component(target, value) {
      this.target = target;
      this.value = value;
    };

    Component.prototype.render = function () {
      console.log('Rendering ...');
    };

    let component = new Component('target', 'some value');
    component.render();
  })();

  (function () {
    class Component {

      constructor(target, value) {
        this.target = target;
        this.value = value;
      }

      render() {
        console.log('Rendering ...');
      }
    };

    let component = new Component('target', 'some value');
    component.render();

    class SpecificComponent extends Component {

      constructor(target, value, id) {
        super(target, value);
        this.id = id;
      }

      render() {
        super.render();
        this._useId();
      }

      _useId() { // _methodName - it's convention for private method
         console.log('What\'s about id?');
      }
    };

    let specificComponent = new SpecificComponent('target', 'some value', 'id');
    specificComponent.render();
  })();
})();
