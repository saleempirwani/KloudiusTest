import {useNavigation} from '@react-navigation/native';
import {Fragment} from 'react';
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

const SignInSchema = z.object({
  email: z.string().email(ERRORS.enterEmail),
  password: z.string().min(8, ERRORS.enterPassword),
});

type SignInFormData = z.infer<typeof SignInSchema>;

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const {
    control,
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

  const onSubmit = (data: SignInFormData) => {};

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
            />
            <Space mB={10} />

            <AppText
              title={LABELS.forgotPassword}
              variant="body2"
              alignSelf="flex-end"
              color={COLORS.red}
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
