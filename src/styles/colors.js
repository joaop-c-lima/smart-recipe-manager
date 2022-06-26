import {createTheme} from '@rneui/themed';

export const COLORS = {
  FUEL_YELLOW: '#EEA734',
  BUTTERSCOTCH: '#F8B64C',
};

export const themeColors = createTheme({
  lightColors: {
    primary: COLORS.FUEL_YELLOW,
  },
});
