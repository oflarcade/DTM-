import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import Header from '../components/Header';
import Slider from '../components/Slider/index';
import SmallSlider from '../components/SmallSlider';
import AnotherSlider from '../components/AnotherSlider';
import CountDownPanel from '../components/Countdown';
import IconContainer from '../components/IconContainer';
import images from '../components/Slider/images';
import RowContainer from '../components/Row';
import RaceView from '../components/RaceView';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Header icon={images[5]} index={true} />
        <ScrollView>
          <Slider />
          <SmallSlider />
          <RaceView />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
