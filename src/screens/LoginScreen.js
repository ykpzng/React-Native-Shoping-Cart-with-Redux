import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Switch,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const logIn = async () => {
    try {
      const data = JSON.stringify({ isLogin: true });
      await AsyncStorage.setItem('loginKey', data);
    } catch (error) {
      console.log(`Log-in Error : ${error}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ marginTop: 100 }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://cdn.borlabs.io/wp-content/uploads/2019/09/blog-wp-login.png',
              }}
              style={{ width: 100, height: 100 }}
            />
          </View>

          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.btnContainer}>
              <Button title="Login" onPress={async () => await logIn()} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    margin: 20,
    padding: 10,
    fontSize: 20,
  },
  lightMod: {
    borderColor: '#000000',
    color: '#000000',
  },
  darkMod: {
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
  },
  swich: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default LoginScreen;
