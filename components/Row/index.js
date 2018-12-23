import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import images from '../Slider/images';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

export default class RowContainer extends Component {
    render() {
        return (
            <View style={styles.row}>
                <Image source={images[11]} style={styles.icon} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Layout.window.width,
        height: Layout.window.height / 13,
        backgroundColor: Colors.noticeText,
    }
})
