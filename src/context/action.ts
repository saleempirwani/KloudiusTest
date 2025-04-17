import Toast from 'react-native-toast-message';
import {CREDENTIALS} from 'src/data/credentails';
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
    if (CREDENTIALS.email !== email || CREDENTIALS.password !== password) {
      return Toast.show({
        type: 'error',
        text1: 'Wrong Credentails',
      });
    }

    Toast.show({
      type: 'success',
      text1: 'Successfully Login',
    });
    await setToLocal('@userData', CREDENTIALS);
    dispatch({type: USER_SESSION, payload: CREDENTIALS});
    navigationRef.reset({
      index: 0,
      routes: [{name: 'HomeStack'}],
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
  signin,
  getUser,
  signout,
};
