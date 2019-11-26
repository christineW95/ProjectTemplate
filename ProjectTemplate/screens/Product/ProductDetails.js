/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import _ from 'lodash';

import Header from '../../components/Header';
import AppIconButton from '../../components/AppButton/AppIconButton';
import {ScrollView} from 'react-native-gesture-handler';
import {Fonts} from '../../Theme';

const ProductDetails = props => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F1F2F6'}}>
      <View style={{marginHorizontal: 20, flex: 2}}>
        <Header>
          <AppIconButton
            color="#242B37"
            buttonStyle={{
              backgroundColor: 'white',
              borderRadius: 25,
              padding: 10,
              marginHorizontal: 5,
            }}
            icon="share-alt"
          />
          <AppIconButton
            color="#F42C53"
            buttonStyle={{
              backgroundColor: 'white',
              borderRadius: 25,
              padding: 10,
              marginHorizontal: 5,
            }}
            icon="star"
          />
        </Header>
      </View>
      <View style={{flex: 8, marginHorizontal: 24}}>
        <View style={{flex: 3, alignItems: 'center'}}>
          <Image
            resizeMode="cover"
            source={require('../../assets/Images/product_details.png')}
          />
        </View>
        <View style={{alignItems: 'center', flexWrap: 'wrap'}}>
          <Text
            style={{
              color: '#242B37',
              fontFamily: Fonts.PoppinsSemiBold,
              fontSize: 22,
            }}>
            California Barbeque with CDC Kitchen Spicy
          </Text>
        </View>
        <View style={{margin:5}}>
          <Text
            style={{
              color: '#4E596F',
              fontFamily: Fonts.PoppinsBold,
              fontSize: 13,
            }}>
            Description
          </Text>
          <Text
            style={{
              color: '#4E596F',
              fontFamily: Fonts.PoppinsMedium,
              fontSize: 14,
            }}>
            Mustard oil, Onion seeds (kalonjee), Fennel seeds (saunf), Garlic,
            Onion, Tomatoes, Ginger, Green chillies, Curry leaves, Chicken leg
            (cubes, boneless), Tomato paste, Red chilli powder.
          </Text>
        </View>
        <View style={{margin:5}}>
         <Text  style={{
              color: '#4E596F',
              fontFamily: Fonts.PoppinsBold,
              fontSize: 13,
            }}>EXTRAS</Text>
        </View>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      </View>
      
    </ScrollView>
  );
};
export default ProductDetails;
