import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchBooks, addCart } from '../redux/actions';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.bookList);

  const logOut = async () => {
    try {
      const data = JSON.stringify({ isLogin: false });
      await AsyncStorage.setItem('loginKey', data);
    } catch (error) {
      console.log(`Log-out Error : ${error}`);
    }
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  function Separator() {
    return (
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={books}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Separator()}
        renderItem={({ item }) => (
          <View style={styles.bookItemContainer}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <View style={styles.bookItemMetaContainer}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.textAuthor}>{item.authors}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => dispatch(addCart(item))}>
                  <Text style={styles.buttonText}>Add+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  image: { width: 100, height: 160 },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '300',
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
  button: {
    backgroundColor: '#24aaff',
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '400',
    color: 'white',
  },
});

export default HomeScreen;

{
  /* <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Çıkış Yap" onPress={async () => await logOut()} />
      <Button
        title="Sepete Git"
        onPress={() => props.navigation.navigate('Cart')}
      />
    </View> */
}
