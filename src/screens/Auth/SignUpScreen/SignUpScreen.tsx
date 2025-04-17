import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {COLORS} from 'src/assets/theme';
import {
  AppButton,
  AppInput,
  AppText,
  Container,
  Header,
  Space,
  Wrapper,
} from 'src/common-components';

import {LABELS} from 'src/labels';
import {NavigationProps} from 'src/types/NavigationTypes';
import {
  FormNameKey,
  IForm,
  ISignUpScreenProps,
} from 'src/types/SignUpScreenTypes';
import {trimObjectValues} from 'src/utils/helpers';

const FormDefaults: IForm = {
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen: React.FC<ISignUpScreenProps> = ({theme}) => {
  // const authState = useSelector((authState: RootState) => authState.auth);
  const navigation = useNavigation<NavigationProps>();

  const [form, setForm] = React.useState<IForm>(FormDefaults);

  const onChangeText = (name: FormNameKey, value: string) => {
    let _value = value;

    setForm({...form, [name]: _value});
  };

  const onSignIn = () => {
    navigation.navigate('SignInScreen', {});
  };

  const onSignup = () => {
    const payload = trimObjectValues(form) as IForm;
    console.debug('payload', payload);

    // navigation.navigate('HomeStack', {});

    // if (isValidatedSignup(payload) === false) return;

    // delete payload['confirmPassword'];

    // const params = {
    //   payload,
    //   successCallback: () => {
    //     navigation.navigate('OTPScreen', {
    //       type: 'authentication',
    //       email: form.email.trim(),
    //     });
    //   },
    //   errorCallback: () => {},
    // };

    // dispatch(signup(params));
  };

  return (
    <Container>
      <Header empty />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <AppText title={LABELS.signUp} variant="h1" alignSelf="center" />
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
          <Space mB={20} />

          <AppInput
            secureTextEntry
            placeholder={LABELS.confirmPassword}
            value={form.confirmPassword}
            onChangeText={(text: string) =>
              onChangeText('confirmPassword', text)
            }
          />
          <Space mB={40} />

          <AppButton
            title={LABELS.signUp}
            onPress={onSignup}
            variant="filled"
          />
          <Space mB={30} />

          <AppText
            title={LABELS.haveAccount}
            variant="body1"
            alignSelf="center">
            <AppText
              title={LABELS.signIn}
              variant="body1"
              color={COLORS.primary}
              onPress={onSignIn}
            />
          </AppText>
        </View>
      </ScrollView>
      {/* {authState.loading && <FullScreenLoaderModal />} */}
    </Container>
  );
};

export default Wrapper(SignUpScreen);
