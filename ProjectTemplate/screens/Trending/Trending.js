/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import NavigationTabs from '../Home/Tabs';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import DashboardCard from '../../components/Card/DashboardCard';
import AppText from '../../components/AppText/AppText';
import Stars from '../../components/StarReview/StarReview';
import {Fonts} from '../../Theme';
import Header from '../../components/Header';
const DATA_Trending = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    additional_info: 78,
    icon: require('../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    additional_info: 78,
    icon: require('../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    additional_info: 78,
    icon: require('../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    additional_info: 78,
    icon: require('../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    additional_info: 78,
    icon: require('../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    additional_info: 78,
    icon: require('../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    additional_info: 78,
    icon: require('../../assets/Images/image.png'),
  },
];
export default class Trending extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2}}>
          <Header />
        </View>
        <View style={{flex: 8}}>
          <FlatList
            data={DATA_Trending}
            contentContainerStyle={{backgroundColor: '#F1F2F6'}}
            renderItem={({item}) => (
              <DashboardCard
                style={{margin: 10}}
                cardColor={'white'}
                imageContainerStyles={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  overflow: 'hidden',
                }}
                cardImage={item.icon}
                cardImageStyles={{resizeMode: 'contain', flex: 1, margin: 7}}
                title={item.title}
                textStyles={{
                  color: '#F42C53',
                  fontFamily: Fonts.PoppinsMedium,
                }}
                titleContainerStyles={{
                  flex: 1,
                  alignItems: 'flex-start',
                  margin: 10,
                }}>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    marginVertical: 5,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <AppText
                      textStyles={{
                        color: '#4E596F',
                        fontFamily: Fonts.PoppinsRegular,
                      }}
                      text={item.location}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      flex: 1,
                      marginBottom: 10,
                      flexDirection: 'row',
                    }}>
                    <View style={{flex: 8, alignItems: 'flex-start'}}>
                      <Stars />
                    </View>
                    <View style={{flex: 2}}>
                      <AppText textStyles={{color: 'black'}}>
                        ${item.additional_info}
                      </AppText>
                    </View>
                  </View>
                </View>
              </DashboardCard>
            )}
          />
        </View>
      </View>
    );
  }
}
