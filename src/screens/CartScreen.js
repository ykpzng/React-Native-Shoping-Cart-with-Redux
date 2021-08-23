import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../redux/actions';

const CartScreen = props => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cartList);

  function Separator() {
    return (
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
    );
  }
  console.log('cart count :', carts.length);
  return (
    <View style={styles.container}>
      {carts.length !== 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={carts}
          keyExtractor={(item, index) => `${item.id}_index${index}`}
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
                    onPress={() => dispatch(removeCart(item))}>
                    <Text style={styles.buttonText}>Remove+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View
          style={{
            marginTop: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icons name="cart" size={80} color="red" />
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>
            Sepetiniz Boş!!!
          </Text>
        </View>
      )}
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
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '400',
    color: 'white',
  },
});

export default CartScreen;

// <View>
//       <Text>Cart - Page</Text>
//       <Button
//         title="Anasayfaya Git"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//     </View>
