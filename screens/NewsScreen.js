import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import images from '../components/Slider/images';
export default class NewsScreen extends Component {
  render() {
    return (
      <View>
        <Header icon={images[5]} index={true}/>
        <Text> textInComponent </Text>
      </View>
    )
  }
}