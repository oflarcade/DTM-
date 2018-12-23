import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import images from '../Slider/images';
export default class IconContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cell}>
          <Image source={images[8]}  style={styles.icon}/> 
          <Text style={styles.text}>TICKETS</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.cellInside}>
          <View style={styles.divider} />
          <View style={styles.cellTwo}>
            <Image source={images[9]}  style={styles.icon}/>
            <Text style={styles.text}>FACEB...K-EVENT</Text>
          </View>
          <View style={styles.divider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Image source={images[10]}  style={styles.icon}/>
            <Text style={styles.text}>DIRECT...&INFO</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: Colors.DTMHeader,
      width: Layout.window.width,
      height: Layout.window.height/ 10,
  },
  cellTwo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cell: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  cellInside: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  text: {
      fontFamily: 'DTM',
      fontSize: 12,
      color: Colors.noticeText,
  },
  icon: {
    width: 25,
    height: 25
  },
  divider: {
    marginHorizontal: 5,
    width: StyleSheet.hairlineWidth,
    backgroundColor: Colors.noticeText,
  }
})
