import {View} from 'react-native';
import {HORIZON_SPACE, STYLES} from 'src/theme';
import {IContainerProps} from 'src/types';
import {styles} from './styles';

const Container: React.FC<IContainerProps> = ({
  children,
  extraStyle = {},
  mH = true,
}) => {
  return (
    <View
      style={[styles.container, mH && STYLES.pH(HORIZON_SPACE), extraStyle]}>
      {children}
    </View>
  );
};

export default Container;
