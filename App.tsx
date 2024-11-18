// App.js
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Platform, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationHandler } from './src/navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const App = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationHandler />
      </Provider>
    </GestureHandlerRootView>
  );
};
export default App;
