import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {Fragment, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  AppButton,
  AppInput,
  AppText,
  Container,
  Header,
  Space,
} from 'src/components';
import {Context} from 'src/context/auth-context';
import {LABELS} from 'src/labels';
import {ERRORS} from 'src/labels/error';
import {COLORS} from 'src/theme';
import {NavigationProps} from 'src/types';
import {z} from 'zod';

const SignUpSchema = z
  .object({
    fullName: z.string().min(1, ERRORS.fullName),
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
  const {signup} = useContext(Context);

  const {
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSignIn = () => {
    navigation.navigate('SignInScreen', {});
  };

  const onSubmit = (data: SignUpFormData) => {
    signup(data.fullName, data.email, data.password);
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
              placeholder={LABELS.fullName}
              onChangeText={text =>
                setValue('fullName', text, {shouldValidate: true})
              }
              value={getValues().fullName}
              keyboardType="email-address"
              error={errors.fullName?.message}
              SVGLeft={<Feather name="user" size={20} />}
            />
            <Space mB={20} />

            <AppInput
              placeholder={LABELS.email}
              onChangeText={text =>
                setValue('email', text, {shouldValidate: true})
              }
              value={getValues().email}
              keyboardType="email-address"
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
            <Space mB={20} />

            <AppInput
              secureTextEntry
              placeholder={LABELS.confirmPassword}
              onChangeText={text =>
                setValue('confirmPassword', text, {shouldValidate: true})
              }
              value={getValues().confirmPassword}
              error={errors.confirmPassword?.message}
              SVGLeft={<Feather name="lock" size={20} />}
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
