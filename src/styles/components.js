import {createTheme} from '@rneui/themed';

export const DEFAULT_STYLES = {
  ROUNDING: 8,
  HEIGHT: 48,
};

export const componentStyles = createTheme({
  Button: {
    buttonStyle: {
      borderRadius: DEFAULT_STYLES.ROUNDING,
      height: DEFAULT_STYLES.HEIGHT,
    },
    titleStyle: {
      textTransform: 'uppercase',
      fontFamily: 'YuGothic-Bold',
    },
  },
});
