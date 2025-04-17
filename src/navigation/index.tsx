import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
// import {COLORS, STYLES} from 'src/assets/theme';
import {SignInScreen} from 'src/screens';
// import {dispatch} from 'src/store';
// import {userSession} from 'src/store/slices/authSlice';
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
      {/* <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={options}
      /> */}
    </Stack.Navigator>
  );
};

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={options}
//       />
//     </Stack.Navigator>
//   );
// };

const RootNavigator = ({navStack}: {navStack: keyof StackParamList}) => {
  return (
    <Stack.Navigator initialRouteName={navStack} id={undefined}>
      <Stack.Screen name="AuthStack" component={AuthStack} options={options} />
      {/* <Stack.Screen name="HomeStack" component={HomeStack} options={options} /> */}
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  const [navStack, setNavStack] = useState<keyof StackParamList>('AuthStack');

  const checkAuth = () => {
    const params = {
      successCallback: () => {
        setNavStack('HomeStack');
      },
      errorCallback: () => {
        setNavStack('AuthStack');
      },
    };

    // dispatch(userSession(params));
  };

  useEffect(() => {
    // checkAuth();
  }, []);

  useEffect(() => {
    // navStack && SplashScreen.hide();
  }, [navStack]);

  if (navStack) {
    return (
      <NavigationContainer ref={navigationRef}>
        {/* <StatusBar
          backgroundColor={COLORS[LIGHT].bgColor}
          barStyle="dark-content"
        /> */}
        <KeyboardAvoidingView style={[{flex: 1}]}>
          <RootNavigator navStack={navStack} />
        </KeyboardAvoidingView>
      </NavigationContainer>
    );
  }

  return <></>;
}
