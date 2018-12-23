import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Dimensions from '../../constants/Layout';
import Colors from '../../constants/Colors';
import { withNavigation } from 'react-navigation';
class componentName extends Component {

  drawerHelper(value) {
    if(value){
      this.props.navigation.openDrawer();
    } else {
      this.props.navigation.closeDrawer();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{width: 20, height:20, backgroundColor: 'transparent'}}></Text>
        <Text style={styles.logo}> DTM </Text>
        <TouchableOpacity onPress={()=> this.drawerHelper(this.props.index)}>
        <Image source={this.props.icon} style={{width: 25, height: 25}} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.window.width,
        height: Dimensions.window.height / 11,
        backgroundColor : Colors.DTMHeader,
        marginTop: 24,
        paddingRight: 20
    },
    logo: {
        fontSize: 30,
        fontFamily: 'DTM',
        fontWeight: 'bold',
        color: Colors.noticeText,
        alignSelf: 'center',
        fontStyle: 'italic',
    }
})

export default withNavigation(componentName)