import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from './action/Actions';
import axios from 'axios';

const Products = () => {
  const [product, setProduct] = useState([]);

  axios
    .get('https://api.escuelajs.co/api/v1/products')
    .then(response => {
      setProduct(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItem = item => {
    dispatch(addItemToCart(item));
  };

  const items = useSelector(state => state);
  let addedItems = [];
  addedItems = items;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 20, marginLeft: 20, fontWeight: '800'}}>
            Redux Store
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#b3ffd9',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 20,
            }}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image
              source={require('../image/cart.png')}
              style={{width: '35%', height: '45%', resizeMode: 'contain'}}
            />
            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '800'}}>
              {addedItems.length}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={product}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 130,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
                <View style={{width: '60%', padding: 20}}>
                  <Text style={{color: '#000', fontWeight: 'bold'}}>
                    {item.title.slice(0, 50)}...
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../image/star.png')}
                      style={{
                        width: '10%',
                        height: '70%',
                        marginTop: 2.6,
                        resizeMode: 'contain',
                      }}
                    />
                    {/* <Text>{item.rating.rate}</Text> */}
                  </View>
                  <Text style={{fontSize: 15, fontWeight: '500'}}>
                    $ {item.price}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={{
                        height: 30,
                        borderRadius: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        addItem(item);
                      }}>
                      <Text style={{color: '#fff'}}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        height: 30,
                        borderRadius: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        marginTop: 5,
                        marginLeft: 5,
                      }}
                      onPress={() => {
                        navigation.navigate('Details', {items: item});
                      }}>
                      <Text style={{color: '#fff'}}>More Details..</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  source={{uri: item.category.image}}
                  style={{
                    width: '30%',
                    height: '60%',
                    resizeMode: 'contain',
                    marginRight: 10,
                    borderRadius: 10,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
