/** @type {import('@react-navigation/native-stack').NativeStackNavigationOptions} */
const defaultOptions = {
  headerShown: false,
};

export const insertDefaultOptions = (screens = []) =>
  screens.map((screen) => {
    screen.options = {
      ...defaultOptions,
      ...screen.options,
    };
  });
