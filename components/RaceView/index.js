import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Animated, Image, FlatList } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import AnotherSlider from '../AnotherSlider';
import Countdown from '../Countdown';
import IconContainer from '../IconContainer';
import RowContainer from '../Row';
import Colors from '../../constants/Colors';
import images from '../Slider/images';
import Button from '../Button';
import RaceList from '../../constants/RaceList';
const FirstRoute = () => (
    <View>
        <Countdown />
        <IconContainer />
        <RowContainer />
        <FlatList 
            data={RaceList}
            renderItem={(item)=> {
                return(
                    <Button text={item.item} />
                )
            }}
        />
    </View>
);
const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
export default class componentName extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'The Event' },
            { key: 'second', title: 'The Results' },
            { key: 'third', title: 'My DTM' },
        ],
    };

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
    
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const color = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map(
                  inputIndex => (inputIndex === i ? '#D6356C' : '#222')
                ),
              });
              return (
                <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => this.setState({ index: i })}>
                  <Animated.Text style={styles.text}>{route.title}</Animated.Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity>
                    <Image source={images[6]} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images[7]} style={styles.icon} />
                </TouchableOpacity>
          </View>
        );
      };
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderTabBar={this._renderTabBar}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                    third: ThirdRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        )
    }
}
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabItem: {
        flex:1,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
      },
      tabBar: {
        flexDirection: 'row',
      },
      text: {
        fontFamily: 'DTM',
        fontSize: 11,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.DTMHeader,
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 10,
        marginVertical: 10
    },
});