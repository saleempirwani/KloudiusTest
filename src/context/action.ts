import Toast from 'react-native-toast-message';
import {navigationRef} from 'src/navigation/navigationRef';
import {
  getFromLocal,
  removeFromLocal,
  setToLocal,
} from 'src/utils/localStorage';
import {AuthAction} from './reducer';
import {USER_SESSION} from './types';

type Dispatch = (action: AuthAction) => void;

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

const signout = (dispatch: Dispatch) => async (): Promise<void> => {
  await removeFromLocal('@userData');
  dispatch({type: USER_SESSION, payload: null});
  navigationRef.reset({
    index: 0,
    routes: [{name: 'AuthStack'}],
  });
};

export default {
  signup,
  signin,
  getUser,
  signout,
};
