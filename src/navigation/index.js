import * as pages from '../pages'
import { ROUTES } from '../constants/routes'
import { insertDefaultOptions } from './default-options'
import createStack from './stack'
import { Header } from '../components/header'

/**
 * @type {{name: string, component: JSX.Element, options?: import('@react-navigation/native-stack').NativeStackNavigationOptions}[]} */
const screens = [
  {
    name: ROUTES.HOME,
    component: pages.Home,
  },
  {
    name: ROUTES.INVENTORY,
    component: pages.Inventory,
    options: {
      headerShown: true,
      header: Header,
      headerTitle: 'Estoque',
    },
  },
  {
    name: ROUTES.RECIPES,
    component: pages.Recipes,
  },
  {
    name: ROUTES.REPORT,
    component: pages.Report,
  },
]

insertDefaultOptions(screens)

export default () => createStack(screens)
