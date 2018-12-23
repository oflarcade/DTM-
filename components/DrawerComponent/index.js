import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Header from '../Header';
import images from '../Slider/images';
import { withNavigation } from 'react-navigation';
class SideMenu extends Component {

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'space-around'}}>
        <Header icon={images[3]} index={false} />
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')}><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Overview</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('News')}><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>News</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Drivers')}><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Drivers 2018</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Live Experience</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Expert Version</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Staging 2018</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Inside DTM</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Backstage</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Settings</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>Ticket</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{marginHorizontal: 20, marginVertical:10 ,fontFamily: 'DTM', fontStyle: 'italic', fontSize: 18, fontWeight: 'bold'}}>shop</Text></TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      width: Layout.window.width,
      backgroundColor: Colors.DTMLOGO,
      height: Layout.window.height,
      flexDirection: 'column',
  }
})

export default withNavigation(SideMenu);