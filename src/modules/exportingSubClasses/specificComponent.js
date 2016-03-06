import {Component} from './component';

class SpecificComponent extends Component {
  render() {
    super.render();
    console.log('Rendering once again ...');
  }
}

export {SpecificComponent};
