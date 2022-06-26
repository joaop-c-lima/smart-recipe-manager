import * as pages from '../pages';
import {ROUTES} from '../constants/routes';
import createStack from './stack';

const screens = [
  {
    name: ROUTES.HOME,
    component: pages.Home,
  },
];

export default () => createStack(screens);
