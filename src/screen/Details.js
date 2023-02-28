import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Card} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../../redux/action/Actions';
import ImageSlider from 'react-native-image-slider';

const Details = ({route}) => {
  const [image, setImage] = useState(route.params.items.images);
  const {width, height} = Dimensions.get('window');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addItem = item => {
    dispatch(addItemToCart(item));
  };
  const items = useSelector(state => state);
  let addedItems = [];
  addedItems = items;

  return (
    <ScrollView>
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
            source={require('../../image/cart.png')}
            style={{width: '35%', height: '45%', resizeMode: 'contain'}}
          />
          <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '800'}}>
            {addedItems.length}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Card>
          <View style={{height: 300, width: '100%'}}>
            <ImageSlider
              style={{
                resizeMode: 'contain',
              }}
              images={image}
            />
          </View>
          <Card.Divider />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            {route.params.items.title}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: 5,
              marginBottom: 5,
              color: '#000',
            }}>
            $ {route.params.items.price}
          </Text>

          <Card.Divider />
          <Text style={{marginBottom: 10, fontWeight: '500'}}>
            {route.params.items.description}
          </Text>
          <Card.Divider />
          <TouchableOpacity
            style={{
              height: 40,
              borderRadius: 10,
              width: 100,
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: 'green',
              marginTop: 5,
              marginLeft: 5,
            }}
            onPress={() => {
              addItem(route.params.items);
            }}>
            <Text style={{color: '#fff', alignSelf: 'center'}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Details;
