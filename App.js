import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

import AuthStack from './src/navigate/AuthStack';
import HomeTab from './src/navigate/HomeTab';

const App = () => {
  const [isLogin, setIslogin] = useState();

  const getIsLogin = async () => {
    try {
      const getData = await AsyncStorage.getItem('loginKey');
      const responsObj = JSON.parse(getData);
      setIslogin(responsObj.isLogin);
    } catch (error) {
      console.log(`GetItem Error : ${error}`);
    }
  };

  useEffect(() => {
    getIsLogin();
  }, []);

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        {isLogin ? HomeTab() : AuthStack()}
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
