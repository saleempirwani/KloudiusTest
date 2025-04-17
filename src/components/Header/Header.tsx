import {useContext} from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Context} from 'src/context/auth-context';
import {COLORS, HORIZON_SPACE} from 'src/theme';
import {pixelSizeY} from 'src/utils/sizes';
import AppText from '../AppText/AppText';

interface IProps {
  title?: string;
}

export default function Header({title}: IProps) {
  const {signout} = useContext(Context);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            signout();
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View>
      <SafeAreaView />
      {!!title && (
        <View style={styles.container}>
          <AppText
            title={title}
            variant="h2"
            color={COLORS.black}
            alignSelf="center"
          />
          <AntDesign
            name="logout"
            size={24}
            color={COLORS.red}
            onPress={handleLogout}
          />
        </View>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: pixelSizeY(60),
    backgroundColor: COLORS.white,
    paddingHorizontal: HORIZON_SPACE,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // ...STYLES.shadow,
  },
});
