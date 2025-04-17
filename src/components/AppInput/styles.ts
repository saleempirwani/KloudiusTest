import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, TYPOGRAPHY} from 'src/theme';

export interface IStyle {
  textInput: TextStyle;
  textInputCont: ViewStyle;
  iconCont: ViewStyle;
}

export const styles = StyleSheet.create<IStyle>({
  textInput: {
    width: '100%',
    padding: 0,
    flex: 1,
    color: COLORS.black,
    ...TYPOGRAPHY.body1,
  },

  iconCont: {
    paddingHorizontal: 15,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputCont: {
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
