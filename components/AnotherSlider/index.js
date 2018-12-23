import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Dimensions from '../../constants/Layout';
import Colors from '../../constants/Colors';
import images from '../Slider/images';
const data = [
    { id: 1, name: 'The Events' },
    { id: 2, name: 'The Results' },
    { id: 3, name: 'My DTM' }
]
export default class AnotherSlider extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    style={{ marginHorizontal: 5, marginVertical: 5 }}
                    renderItem={({ item }) => {
                        return (<TouchableOpacity key={item.id} style={styles.button}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>)
                    }}
                />
                <TouchableOpacity>
                    <Image source={images[6]} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images[7]} style={styles.icon} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.window.width,
        height: Dimensions.window.height / 13,
        backgroundColor: Colors.noticeText,
        flexDirection: 'row',
        paddingTop: 5,
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 1,
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 10,
        marginVertical: 10
    },
    text: {
        fontFamily: 'DTM',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.DTMHeader,
        paddingRight: 15,
        paddingTop: 5,
    }
})
