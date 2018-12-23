import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Dimensions from '../../constants/Layout';
import Colors from '../../constants/Colors';
import CountDown from 'react-native-countdown-component';
export default class CountDownPanel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> {this.props.title} </Text>
                <Text style={styles.secondTitle}> COUNTDOWN </Text>
                <CountDown
                    until={50}
                    onFinish={() => alert('finished')}
                    onPress={() => alert('hello')}
                    size={20}
                    digitBgColor={'transparent'}
                    digitTxtColor={Colors.DTMLOGO}
                    label
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: Dimensions.window.width,
        height: Dimensions.window.height / 5,
        backgroundColor: Colors.DTMSLIDER
    },
    title: {
        fontFamily: 'DTM',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: Colors.DTMLOGO,
    },
    secondTitle: {
        fontFamily: 'DTM',
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: Colors.DTMLOGO,
    }
})
