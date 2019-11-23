/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View, FlatList, Text} from 'react-native';
import TabStyles from './Tabs.styles';
import DashboardCard from '../../../components/Card/DashboardCard';
import {Fonts, Colors} from '../../../Theme';
import AppText from '../../../components/AppText/AppText';
import CardImage from '../../../components/Card/Image';
import Stars from '../../../components/StarReview/StarReview';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Burgers',
    NumberOfPlaces: '1248',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#F68D1A',
  },
  {
    id: 'bd7acea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pizza',
    NumberOfPlaces: '456',
    icon: require('../../../assets/Images/noodles.png'),
    cardColor: '#5653D4',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53hhb28ba',
    title: 'Barbeque',
    NumberOfPlaces: '788',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#FF2994',
  },
  {
    id: 'bd7acbea-c1f1-46c2-aed5-3ad53hhb28ba',
    title: 'Noodles',
    NumberOfPlaces: '4652',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#4CDA64',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Burgers',
    NumberOfPlaces: '1248',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#FF2994',
  },
  {
    id: 'bd7acea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pizza',
    NumberOfPlaces: '456',
    icon: require('../../../assets/Images/noodles.png'),
    cardColor: '#F68D1A',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53hhb28ba',
    title: 'Barbeque',
    NumberOfPlaces: '788',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#4CDA64',
  },
  {
    id: 'bd7acbea-c1f1-46c2-aed5-3ad53hhb28ba',
    title: 'Noodles',
    NumberOfPlaces: '4652',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#FF2994',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Burgers',
    NumberOfPlaces: '1248',
    icon: require('../../../assets/Images/noodles.png'),
    cardColor: '#4CDA64',
  },
  {
    id: 'bd7acea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pizza',
    NumberOfPlaces: '456',
    icon: require('../../../assets/Images/noodles.png'),
    cardColor: '#F68D1A',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53hhb28ba',
    title: 'Barbeque',
    NumberOfPlaces: '788',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#4CDA64',
  },
  {
    id: 'bd7acbea-c1f1-46c2-aed5-3ad53hhb28ba',
    title: 'Noodles',
    NumberOfPlaces: '4652',
    icon: require('../../../assets/Images/Pizza.png'),
    cardColor: '#F68D1A',
  },
];
const DATA_Trending = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    price: 78,
    icon: require('../../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    price: 78,
    icon: require('../../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    price: 78,
    icon: require('../../../assets/Images/image.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'CDC Kitchen Spicy',
    location: 'Evansville,USA',
    reviews: 3,
    price: 78,
    icon: require('../../../assets/Images/image.png'),
  },
];
export default class Main extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{
            ...TabStyles.container,
            marginVertical: 10,
            marginHorizontal: 10,
          }}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{backgroundColor: 'lightblue', flex: 1}} />
          <View
            style={{
              alignContent: 'space-around',
            }}>
            <FlatList
              data={DATA}
              contentContainerStyle={{
                justifyContent: 'space-evenly',
                flexGrow: 1,
                marginVertical: 10,
              }}
              horizontal={true}
              renderItem={({item}) => (
                <DashboardCard cardColor={item.cardColor}>
                  <View style={{alignItems: 'center'}}>
                    <CardImage icon={item.icon} />
                  </View>
                  <View
                    style={{alignItems: 'center', flex: 1, marginBottom: 10}}>
                    <AppText text={item.title} />
                    <AppText>{item.NumberOfPlaces} places</AppText>
                  </View>
                </DashboardCard>
              )}
            />
          </View>
          <View style={{ flex: 2, marginVertical: 8}}>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
              }}>
              <View style={{flex: 8, justifyContent: 'center'}}>
                <Text style={{fontFamily: Fonts.PoppinsBold}}>
                  TRENDING THIS WEEK
                </Text>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginHorizontal: 25,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.PoppinsBold,
                    color: Colors.blue,
                    flexWrap: 'nowrap',
                  }}>
                  Show all
                </Text>
              </View>
            </View>

            <View>
              <FlatList
                data={DATA_Trending}
                contentContainerStyle={{
                  justifyContent: 'space-evenly',
                  // flexGrow: 1,
                  marginVertical: 10,
                }}
                horizontal={true}
                renderItem={({item}) => (
                  <DashboardCard cardColor={'white'}>
                    <View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                          overflow: 'hidden',
                        }}>
                        <CardImage icon={item.icon} style={{resizeMode:'contain'}}/>
                      </View>
                      <View style={{flex: 1,marginHorizontal: 10,marginVertical: 5,}}>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                          }}>
                          <AppText
                            text={item.title}
                            style={{
                              color: '#F42C53',
                              fontFamily: Fonts.PoppinsMedium,
                            }}
                          />
                          <AppText
                            style={{
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
                            <AppText style={{color:'black'}}>
                              ${item.price}
                            </AppText>
                          </View>
                        </View>
                      </View>
                    </View>
                  </DashboardCard>
                )}
              />
            </View>
          </View>
          <View style={{backgroundColor: 'blue', flex: 2}} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
