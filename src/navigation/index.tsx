import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, KeyboardAvoidingView, View} from 'react-native';
import {Context} from 'src/context/auth-context';
import {HomeScreen, SignInScreen} from 'src/screens';
import SignUpScreen from 'src/screens/Auth/SignUpScreen/SignUpScreen';
import {StackParamList} from 'src/types';
import {navigationRef} from './navigationRef';

const Stack = createNativeStackNavigator<StackParamList>();

const options = {headerShown: false};

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
