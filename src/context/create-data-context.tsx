import {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  Context as ReactContext,
} from 'react';

type Action = {
  type: string;
  payload?: any;
};

type Reducer<S> = (state: S, action: Action) => S;

type ActionFunctions<S> = {
  [key: string]: (dispatch: Dispatch<Action>) => (...args: any[]) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export default function createDataContext<S>(
  reducer: Reducer<S>,
  actions: ActionFunctions<S>,
  defaultValue: S,
): {Context: ReactContext<any>; Provider: React.FC<ProviderProps>} {
  const Context = createContext<any>(null);

  const Provider: React.FC<ProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: {[key: string]: any} = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
}
