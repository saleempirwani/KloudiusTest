import {Fragment, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText, Container, Header} from 'src/components';
import {Context} from 'src/context/auth-context';
import {COLORS, HORIZON_SPACE, STYLES} from 'src/theme';
import {pixelSizeX, pixelSizeY} from 'src/utils/sizes';

interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  const {state} = useContext(Context);
  console.log('🚀 ~ state:', state);

  return (
    <Container mH={false}>
      <Fragment>
        <Header title="Home" />
        <View style={[STYLES.pH(HORIZON_SPACE)]}>
          <View style={styles.list}>
            <AppText
              title={`Name: ${state?.userData?.fullName}`}
              variant="body2"
            />
          </View>
          <View style={styles.list}>
            <AppText
              title={`Email: ${state?.userData?.email}`}
              variant="body2"
            />
          </View>
        </View>
      </Fragment>
    </Container>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  list: {
    backgroundColor: COLORS.leaveGreen,
    paddingHorizontal: pixelSizeX(10),
    paddingVertical: pixelSizeX(10),
    borderRadius: 5,
    marginTop: pixelSizeY(20),
    ...STYLES.shadow,
  },
});
