import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

export default class componentName extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{this.props.text} </Text>
                <Image source={require('../../assets/images/down-arrow.png')} style={styles.icon} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Layout.window.width,
        height: Layout.window.height / 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: Colors.DTMLOGO
    },
    icon: {
        width: 10,
        height: 10,
        alignSelf: 'center',
        transform: [{ rotate: '-90deg'}],
        marginHorizontal: 5,
        marginVertical: 10,
    },
    text: {
        fontFamily: 'DTM',
        fontSize: 18,
        alignSelf: 'center',
        marginHorizontal: 5,
        marginVertical: 10,
        fontWeight: 'bold',
        color: Colors.DTMHeader,
    }
})
