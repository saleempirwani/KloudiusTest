import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from 'src/theme';

export interface IStyle {
  button: ViewStyle;
}

export const styles = StyleSheet.create<IStyle>({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
});
