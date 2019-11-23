/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  FlatList,
  Text,
} from 'react-native';
import TabStyles from './Tabs.styles';
import DashboardCard from '../../../components/Card/DashboardCard';
import AppButton from '../../../components/AppButton/AppButton';
import {Fonts, Colors} from '../../../Theme';
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
                <DashboardCard
                  title={item.title}
                  NumberOfplaces={item.NumberOfPlaces}
                  icon={item.icon}
                  cardColor={item.cardColor}
                />
              )}
            />
          </View>
          <View style={{backgroundColor: 'black', flex: 2, marginVertical: 10}}>
            <View
              style={{
                flex: 2,
                backgroundColor: 'yellow',
                flexDirection: 'row',
              }}>
              <View style={{flex: 8, justifyContent: 'center'}}>
                <Text style={{fontFamily: Fonts.PoppinsBold}}>
                  TRENDING THIS WEEK
                </Text>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginHorizontal: 25,
                }}>
                <Text
                  style={{fontFamily: Fonts.PoppinsBold, color: Colors.blue}}>
                  Show all
                </Text>
              </View>
            </View>

            <View style={{flex: 8, backgroundColor: 'green'}}>
              <FlatList
                data={DATA}
                contentContainerStyle={{
                  justifyContent: 'space-evenly',
                  flexGrow: 1,
                  marginVertical: 10,
                }}
                horizontal={true}
                renderItem={({item}) => (
                  <DashboardCard
                    title={item.title}
                    NumberOfplaces={item.NumberOfPlaces}
                    icon={item.icon}
                    cardColor={item.cardColor}
                  />
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
