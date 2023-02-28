import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from './action/Actions';

const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(removeItemFromCart(index));
  };
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
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontWeight: '700', height: 25, fontSize: 20}}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
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
                    {item.title}
                  </Text>
                   {/* <View style={{flexDirection: 'row'}}> */}
                    {/* <Image
                      source={require('../image/star.png')}
                      style={{
                        width: '10%',
                        height: '70%',
                        marginTop: 2.6,
                        resizeMode: 'contain',
                      }}
                    /> */}
                    {/* <Text>{item.rating.rate}</Text> */}
                  {/* </View>  */}
                  <Text style={{fontSize: 15, fontWeight: '500'}}>
                    $ {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      borderRadius: 10,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'red',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      removeItem(index);
                    }}>
                    <Text style={{color: '#fff'}}>Remove</Text>
                  </TouchableOpacity>
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

export default Cart;
