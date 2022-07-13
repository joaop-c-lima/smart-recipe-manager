import * as pages from '../pages';
import { ROUTES } from '../constants/routes';
import { insertDefaultOptions } from './default-options';
import createStack from './stack';

/**
 * @type {{name: string, component: JSX.Element, options?: import('@react-navigation/native-stack').NativeStackNavigationOptions}[]} */
const screens = [
  {
    name: ROUTES.HOME,
    component: pages.Home,
  },
];

insertDefaultOptions(screens);

export default () => createStack(screens);
