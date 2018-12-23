import React, { Component } from 'react'
import { ScrollView, Image, Dimensions} from 'react-native';
import images from './images';
const { width } = Dimensions.get('window');
const height = width * 0.5

export default class Slider extends React.Component {
    state = {images: [images.DTM1, images.DTM2, images.DTM3]};
    render() {
        const {images} = this.state;
          return (
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
          >
            <Image source={require('../../assets/images/DTM1.jpg')} style={{width: width, height: height }} />
            <Image source={require('../../assets/images/DTM2.jpg')} style={{width: width, height: height }} />
            <Image source={require('../../assets/images/DTM3.jpg')} style={{width: width, height: height }} />
          </ScrollView>
            );
    }
}