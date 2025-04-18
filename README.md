# Kloudius Test

### App.ts file

```
import Toast from 'react-native-toast-message';
import {Provider} from 'src/context/auth-context';
import AppNavigator from 'src/navigation';

const App: React.FC = () => {
  return (
    <Provider>
      <AppNavigator />
      <Toast />
    </Provider>
  );
};

export default App;
```

- Provider Component: for Context API, State Management.
- AppNavigator Component: for controll all navigation stacks.
- Toast Component: for showing error and success messages.

### AppNavigator Component (src/navigation/index.tsx)

```
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignInScreen" id={undefined}>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={options}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};


const RootNavigator = ({navStack}: {navStack: keyof StackParamList}) => {
  return (
    <Stack.Navigator initialRouteName={navStack} id={undefined}>
      <Stack.Screen name="HomeStack" component={HomeStack} options={options} />
      <Stack.Screen name="AuthStack" component={AuthStack} options={options} />
    </Stack.Navigator>
  );
};

```

- AuthStack: It is a stack to control/support auth screens like SignInScreen, SignUpScreen or ForgotScreen (if any)

- HomeStack: It is a stack to control/support screens after authentication like HomeScreen, ProfileScreen or other.

- RootNavigator: To control all Stacks (AuthStack, HomeStack or other.)

```
export default function AppNavigator() {
  const [navStack, setNavStack] = useState<keyof StackParamList>();
  const {getUser} = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      getUser((stack: any) => {
        setNavStack(stack);
      });
    }, 300);
  }, []);

  if (navStack) {
    return (
      <NavigationContainer ref={navigationRef}>
        <KeyboardAvoidingView style={[{flex: 1}]}>
          <RootNavigator navStack={navStack} />
        </KeyboardAvoidingView>
      </NavigationContainer>
    );
  }

  return (
    <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
      <ActivityIndicator size="large" />
    </View>
  );
}
```

- AppNavigator: it is main default exported function that controls complete app screens navigations.
- I have check first from `getUser` function, if user is save in `async storage`, if yes then set HomeStack otherwise AuthStack.
- While checking it will show `Loading`.

### SignInScreen File

#### Validation Schema

- This is the schema file, where I created a schema for input validations

```
const SignInSchema = z.object({
  email: z.string().min(1, ERRORS.enterEmail).email(ERRORS.emailFormat),
  password: z.string().min(6, ERRORS.passFormat),
});

type SignInFormData = z.infer<typeof SignInSchema>;
```

#### Initialization of Schema and Submit Functions

- I have initialize, validation handler, and submit button function
- `signin(data.email, data.password);` this is a context API function to check credentails

```
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
```

#### Rendering UI

- I have add components for sign-in for like `Input`, `Button` and other.

```
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
```

### SignUpScreen File

#### Validation Schema

- This is the schema file, where I created a schema for input validations

```
const SignUpSchema = z
  .object({
    fullName: z.string().min(1, ERRORS.fullName),
    email: z.string().min(1, ERRORS.enterEmail).email(ERRORS.emailFormat),
    password: z.string().min(6, ERRORS.enterPassword),
    confirmPassword: z.string().min(6, ERRORS.confirmPassword),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: ERRORS.confirmPassword,
  });

type SignUpFormData = z.infer<typeof SignUpSchema>;
interface ISignUpScreenProps {}
```

#### Initialization of Schema and Submit Functions

- I have initialize, validation handler, and submit button function
- `signup(data.fullName, data.email, data.password);` this is a context API function to register user.

```
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
```

#### Rendering UI

- I have add components for sign-in for like `Input`, `Button` and other.

```
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
```

### Context API

#### Actions File

- This is a file for context api action file, like calling api, check user credentails or other

##### Sign Up Function

1.  I am getting `email and password`.
2.  Getting already stored users (registered users) from `async storage`.
3.  If users found then check from users current `email already exist`, if `yes` then show `error message`.
4.  If not then add to `async storage` and show `success message`

```

const signup =
  (dispatch: Dispatch) =>
  async (fullName: string, email: string, password: string): Promise<void> => {
    let _users = [];
    const users = (await getFromLocal('@users')) as any[];

    if (users) {
      const userAlreadyExist = users?.find(item => item.email === email);
      if (userAlreadyExist)
        return Toast.show({
          type: 'error',
          text1: 'Email already exist',
        });

      _users = [...users];
    }

    _users.push({fullName, email, password});
    await setToLocal('@users', _users);

    Toast.show({
      type: 'success',
      text1: 'Successfully Register',
    });

    navigationRef.reset({
      index: 0,
      routes: [{name: 'SignInScreen'}],
    });
  };

```

##### Sign In Function

1.  I am getting `email and password`.
2.  Getting already stored users (registered users) from `async storage`.
3.  Matching `email and password` from existing users.
4.  If not found then return `error message` of `wrong crendentials`.
5.  If found then saving user to `async storage`, returning `success message` and navigate to `HomeStack => HomeScreen`.

```
const signin =
  (dispatch: Dispatch) =>
  async (email: string, password: string): Promise<void> => {
    const users = (await getFromLocal('@users')) as any[];
    let authenticated = false;
    let user = null;

    if (users) {
      user = users.find(item => item.email === email);
      if (user && user.password === password) {
        authenticated = true;
      }
    }

    if (!authenticated) {
      return Toast.show({
        type: 'error',
        text1: 'Wrong Credentails',
      });
    }

    Toast.show({
      type: 'success',
      text1: 'Successfully Login',
    });
    await setToLocal('@userData', user);
    dispatch({type: USER_SESSION, payload: user});
    navigationRef.reset({
      index: 0,
      routes: [{name: 'HomeStack'}],
    });
  };
```

##### Signout Function

- Removing current user from `async storage` and `context` and navigating user to `AuthStack => AuthScreen`

```
const signout = (dispatch: Dispatch) => async (): Promise<void> => {
  await removeFromLocal('@userData');
  dispatch({type: USER_SESSION, payload: null});
  navigationRef.reset({
    index: 0,
    routes: [{name: 'AuthStack'}],
  });
};
```

##### getUser Function

- Getting current user from if exist `async storage` and saving to `context`. Finally navigation to `HomeStack`
- If user not found then navigation to `AuthStack`

```
const getUser =
  (dispatch: Dispatch) =>
  async (callback = (e: any) => {}): Promise<void> => {
    const userData = await getFromLocal('@userData');
    if (userData) {
      callback('HomeStack');
      dispatch({type: USER_SESSION, payload: userData});
    } else {
      callback('AuthStack');
    }
  };
```
