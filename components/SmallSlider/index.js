import React, { Component } from 'react'
import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Dimensions from '../../constants/Layout';
import Colors from '../../constants/Colors';
import courses from './itemList';
class SmallSlider extends Component {
  render() {
    return (
      <View style={styles.container}>
            <FlatList
                horizontal
                data={courses}
                style={{marginHorizontal: 5, marginVertical: 5}}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item: rowData })=>{
                    return(
                        <TouchableOpacity>
                        <Text key={rowData.id} style={styles.courseTitle}>{rowData.name}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => index}
            />
            <TouchableOpacity>
                <Image source={require('../../assets/images/check-form.png')} style={styles.icon} />
            </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: Dimensions.window.height / 13,
        width: Dimensions.window.width,
        backgroundColor: Colors.DTMSLIDER,
    },
    courseTitle: {
        alignSelf: 'center',
        fontSize: 14,
        color: Colors.noticeText,
        paddingRight: 15,
        paddingTop: 5,
        fontFamily: 'DTM',
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 10,
        marginVertical: 10
    }
})

export default SmallSlider;