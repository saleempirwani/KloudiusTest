import actions from './action';
import createDataContext from './create-data-context';
import {INIT_STATE, authReducer} from './reducer';

export const {Provider, Context} = createDataContext(
  authReducer,
  actions,
  INIT_STATE,
);
