import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

interface IStyle {
  leftIconCont: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
  rightIconCont: ImageStyle;
}

export const styling = (theme: Theme) =>
  StyleSheet.create<IStyle>({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
    },

    leftIconCont: {
      height: 50,
      width: 50,
      borderRadius: 100,
      backgroundColor: COLORS.grayGreenLight,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
    },

    title: {
      textAlign: 'center',
      position: 'absolute',
      right: 50,
      left: 50,
    },

    rightIconCont: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: COLORS.grayGreenLight,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
    },
  });
