import {useNavigation} from '@react-navigation/native';
import {Fragment, useContext} from 'react';
import {ScrollView, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

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
import {NavigationProps} from 'src/types';
import {zodResolver} from '@hookform/resolvers/zod';
import {ERRORS} from 'src/labels/error';
import {Context} from 'src/context/auth-context';
import Feather from 'react-native-vector-icons/Feather';

const SignInSchema = z.object({
  email: z.string().min(1, ERRORS.enterEmail).email(ERRORS.emailFormat),
  password: z.string().min(6, ERRORS.passFormat),
});

type SignInFormData = z.infer<typeof SignInSchema>;

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const {signin} = useContext(Context);

  const {
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInSchema),
  });

  const onSignUp = () => {
    navigation.navigate('SignUpScreen', {});
  };

  const onSubmit = (data: SignInFormData) => {
    signin(data.email, data.password);
  };

  return (
    <Container>
      <Fragment>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={[STYLES.flex1]}>
          <View>
            <Space mT={40} />
            <AppText variant="h1" title={LABELS.signIn} alignSelf="center" />
            <Space mB={40} />

            <AppInput
              placeholder={LABELS.email}
              keyboardType="email-address"
              onChangeText={text =>
                setValue('email', text, {shouldValidate: true})
              }
              value={getValues().email}
              error={errors.email?.message}
              SVGLeft={<Feather name="mail" size={20} />}
            />
            <Space mB={20} />

            <AppInput
              secureTextEntry
              placeholder={LABELS.password}
              onChangeText={text =>
                setValue('password', text, {shouldValidate: true})
              }
              value={getValues().password}
              error={errors.password?.message}
              SVGLeft={<Feather name="lock" size={20} />}
            />
            <Space mB={10} />

            <AppText
              title={LABELS.forgotPassword}
              variant="body2"
              alignSelf="flex-end"
              color={COLORS.primary}
            />
            <Space mB={40} />

            <AppButton
              title={LABELS.signIn}
              onPress={handleSubmit(onSubmit)}
              variant="filled"
            />
            <Space mB={25} />

            <AppText
              title={LABELS.dontHaveAccount}
              variant="body1"
              alignSelf="center">
              <AppText
                title={` ${LABELS.signUp}`}
                variant="body1"
                onPress={onSignUp}
                color={COLORS.primary}
              />
            </AppText>
          </View>
        </ScrollView>
      </Fragment>
    </Container>
  );
};

export default SignInScreen;
