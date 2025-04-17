import {useNavigation} from '@react-navigation/native';
import {Fragment, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  AppButton,
  AppInput,
  AppText,
  Container,
  Header,
  Space,
} from 'src/components';
import {LABELS} from 'src/labels';
import {COLORS, STYLES} from 'src/theme';
import {FormNameKey, NavigationProps} from 'src/types';

export interface IForm {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface ISignInScreenProps {}

const formInit: IForm = {
  email: '',
  password: '',
};

const SignInScreen: React.FC<ISignInScreenProps> = props => {
  // const authState = useSelector((authState: RootState) => authState.auth);
  const navigation = useNavigation<NavigationProps>();

  const [form, setForm] = useState<IForm>(formInit);

  const onChangeText = (name: FormNameKey, value: string) => {
    setForm({...form, [name]: value});
  };

  const onSignUp = () => {
    navigation.navigate('SignUpScreen', {});
  };

  const onForgotPress = () => {
    // navigation.navigate('ForgotPasswordScreen', {});
  };

  const onSignin = () => {
    console.debug('payload', form);

    // resetStack('HomeStack', 'VerifyPasswordScreen');

    // const successCallback = (response: IDynamicObject) => {
    //   if (response.data.is_email_verified === false) {
    //     navigation.navigate('OTPScreen', {
    //       email: payload.email,
    //       type: 'authentication',
    //     });
    //     Toast(response.message);
    //     return;
    //   }
    //   resetStack('HomeStack', 'BottomTabs');
    // };

    // if (isValidatedSignin(payload) === false) return;

    // const params = {
    //   payload,
    //   successCallback,
    //   errorCallback: () => {},
    // };

    // dispatch(signin(params));
  };

  return (
    <Container>
      <Fragment>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={[STYLES.flex1]}>
          <View>
            <AppText variant="h1" title={LABELS.signIn} alignSelf="center" />
            <Space mB={40} />

            <AppInput
              placeholder={LABELS.email}
              value={form.email}
              onChangeText={(text: string) => onChangeText('email', text)}
              keyboardType="email-address"
            />
            <Space mB={20} />

            <AppInput
              secureTextEntry
              placeholder={LABELS.password}
              value={form.password}
              onChangeText={(text: string) => onChangeText('password', text)}
            />
            <Space mB={10} />

            <AppText
              title={LABELS.forgotPassword}
              variant="h5"
              alignSelf="flex-end"
              onPress={onForgotPress}
              color={COLORS.red}
            />
            <Space mB={40} />

            <AppButton
              title={LABELS.signIn}
              onPress={onSignin}
              variant="filled"
            />
            <Space mB={25} />

            <AppText
              title={LABELS.dontHaveAccount}
              variant="body1"
              alignSelf="center">
              <AppText
                title={LABELS.signUp}
                variant="body1"
                onPress={onSignUp}
                color={COLORS.primary}
              />
            </AppText>
          </View>
        </ScrollView>
        {/* {authState.loading && <FullScreenLoaderModal />} */}
      </Fragment>
    </Container>
  );
};

export default SignInScreen;
