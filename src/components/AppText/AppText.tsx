import {Text} from 'react-native';
import {COLORS, STYLES, TYPOGRAPHY} from 'src/theme';
import {IAppTextProps} from 'src/types';

const AppText: React.FC<IAppTextProps> = props => {
  const {
    title,
    variant,
    children = <></>,
    color = '',
    alignSelf = 'flex-start',
    textAlign = 'left',
    fontSize = 0,
    extraStyle = {},
    onPress = () => {},
    fontFamily = null,
  } = props;

  return (
    <Text
      {...props}
      onPress={onPress}
      suppressHighlighting
      style={[
        TYPOGRAPHY[variant],
        STYLES.fontSize(fontSize ? fontSize : TYPOGRAPHY[variant].fontSize),
        STYLES.alignSelf(alignSelf),
        STYLES.color(color ? color : COLORS.dark),
        STYLES.textAlign(textAlign),
        extraStyle,
      ]}>
      {title}
      {children}
    </Text>
  );
};

export default AppText;
