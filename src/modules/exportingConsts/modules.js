import {MIN_VAL, MAX_VAL} from './constants.js';

function inRange(val) {
  return val >= MIN_VAL && val <= MAX_VAL;
};

export { inRange };
