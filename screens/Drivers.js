import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import DriverList from '../constants/DriverList';
import Header from '../components/Header';
import images from '../components/Slider/images';
import { Dimensions } from '../constants';
const names = ["Aekkein", "Erna", "Gica", "Iris", "Laen", "Oanei", "Urusla", "Unt", "Zy", "Giny", "Teni", "Tania",
"Tenisa", "Falish", "Tirs", "Bera", "Boria", "Terkia", "Tronash", "Si", "Gi", "Ti", "Fi", "Di", "Mi", "Peli", "Irnia", "Beth",
"Riven", "Vi", "Lio", "Nayeli"];

const surnames = ["Golpeo", "Anorda", "Severnin", "Part", "Kek-vek-loah", "Vaen", "Nerivin", "Haeshi", "Vin-ti-selh",
"Ver-to", "Vintoret", "Da Teri", "Von Bien", "Maer", "Serisn", "Vintaren", "Bertis", "Tetirit", "Tornet", "Bellabi",
"Geron", "Tornes", "Gorez", "Lorez", "Gareth"];

const teams = ["Audi", "BMW" , "Mercedes", "Ford", "VW", "Renault", "Chevrolet"];

export default class Drivers extends Component {

    render() {
        return (
            <View>
                <Header icon={images[5]} index={true} />
                <ScrollView>
                <FlatList
                    data={DriverList}
                    renderItem={({ item }) => {
                        const randomNumber = Math.floor(Math.random() * 20) + 1;
                        const random = Math.floor(Math.random() * 6) ;
                        return (
                            <TouchableOpacity style={styles.rowContainer}>
                                <View style={styles.row}>
                                    <Text style={styles.text}>{names[randomNumber - Math.floor(Math.random() * 4)]},</Text>
                                    <Text style={styles.text}>{surnames[randomNumber - Math.floor(Math.random() * 4)]}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.number}>#{randomNumber < 10 ? `0${randomNumber}` : randomNumber}</Text>
                                    <View style={styles.insideContainer}>
                                        <Text style={styles.insideText}>{item.description}</Text>
                                        <Text style={styles.insideText}>{teams[random]}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    rowContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    text: {
        fontFamily: 'DTM',
        fontSize: 18,
        fontWeight: 'bold',
    },
    number: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 5
    },
    insideContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 3
    },
    insideText: {
        fontFamily: 'DTM',
        fontSize: 14,
    }
})
