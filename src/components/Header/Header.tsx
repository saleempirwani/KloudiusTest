import {SafeAreaView, View} from 'react-native';
import {HORIZON_SPACE, STYLES} from 'src/theme';

export default function Header() {
  return (
    <View style={[STYLES.mH(HORIZON_SPACE)]}>
      <SafeAreaView />
    </View>
  );
}
