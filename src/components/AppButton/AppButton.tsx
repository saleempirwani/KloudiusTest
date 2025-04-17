import {TouchableOpacity} from 'react-native';
import {COLORS, STYLES, WIDTH} from 'src/theme';
import {IAppButtonProps} from 'src/types';
import AppText from '../AppText/AppText';
import {styles} from './styles';

const AppButton: React.FC<IAppButtonProps> = props => {
  const {
    extraStyle,
    width = WIDTH * 0.9,
    height = 45,
    onPress,
    title,
    variant = 'filled',
    SVGLeft = null,
    SVGRight = null,
  } = props;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[
        styles.button,
        STYLES.height(height),
        STYLES.width(width),
        variant === 'outlined' && {
          ...STYLES.borderColor(COLORS.primary),
          ...STYLES.bgColor(COLORS.transparent),
        },
        extraStyle?.button,
      ]}
      onPress={onPress}>
      {SVGLeft}
      <AppText
        onPress={onPress}
        title={title}
        color={variant === 'outlined' ? COLORS.primary : COLORS.white}
        variant="body1"
        extraStyle={[extraStyle?.title]}
        alignSelf="center"
      />
      {SVGRight}
    </TouchableOpacity>
  );
};

export default AppButton;
