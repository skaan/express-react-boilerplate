import { log } from '../config';

export default {
  redux: content => {
    if (log) console.log('%c' + content, 'color: orange;');
  },
  component: content => {
    if (log) console.log('%c' + content, 'color: blue;');
  },
};
