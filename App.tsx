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
