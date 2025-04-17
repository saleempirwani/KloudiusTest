import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {
  AppButton,
  AppInput,
  AppText,
  Container,
  Header,
  Space,
} from 'src/components';
import {LABELS} from 'src/labels';
import {ERRORS} from 'src/labels/error';
import {COLORS} from 'src/theme';
import {NavigationProps} from 'src/types';
import {z} from 'zod';

const SignUpSchema = z
  .object({
    email: z.string().email(ERRORS.enterEmail),
    password: z.string().min(8, ERRORS.enterPassword),
    confirmPassword: z.string().min(8, ERRORS.confirmPassword),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: ERRORS.confirmPassword,
  });

type SignUpFormData = z.infer<typeof SignUpSchema>;
interface ISignUpScreenProps {}

const SignUpScreen: React.FC<ISignUpScreenProps> = ({}) => {
  const navigation = useNavigation<NavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSignIn = () => {
    navigation.navigate('SignInScreen', {});
  };

  const onSubmit = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully Register',
    });
    navigation.navigate('SignInScreen', {});
  };

  return (
    <Container>
      <Fragment>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Space mT={40} />

            <AppText title={LABELS.signUp} variant="h1" alignSelf="center" />
            <Space mB={40} />

            <AppInput
              placeholder={LABELS.email}
              onChangeText={text =>
                setValue('email', text, {shouldValidate: true})
              }
              value={getValues().email}
              keyboardType="email-address"
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
            <Space mB={20} />

            <AppInput
              secureTextEntry
              placeholder={LABELS.confirmPassword}
              onChangeText={text =>
                setValue('confirmPassword', text, {shouldValidate: true})
              }
              value={getValues().confirmPassword}
              error={errors.confirmPassword?.message}
            />
            <Space mB={40} />

            <AppButton
              title={LABELS.signUp}
              onPress={handleSubmit(onSubmit)}
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
      </Fragment>
    </Container>
  );
};

export default SignUpScreen;
