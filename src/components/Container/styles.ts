import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from 'src/theme';

interface IStyle {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
});
