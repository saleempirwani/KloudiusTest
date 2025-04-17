import {View} from 'react-native';
import {STYLES} from 'src//theme';
import {ISpaceProps} from 'src/types';

const Space: React.FC<ISpaceProps> = ({
  mT = 0,
  mB = 0,
  mR = 0,
  mL = 0,
  mH = 0,
  mV = 0,
  children = null,
}) => {
  return (
    <View
      style={[
        mB && STYLES.mB(mB),
        mT && STYLES.mT(mT),
        mR && STYLES.mR(mR),
        mR && STYLES.mR(mR),
        mL && STYLES.mL(mL),
        mH && STYLES.mH(mH),
        mV && STYLES.mV(mV),
      ]}>
      {children && children}
    </View>
  );
};

export default Space;
