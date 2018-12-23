import React from 'react';
import Dimensions from '../constants/Layout';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import SideMenu from '../components/DrawerComponent';
import Drivers from '../screens/Drivers';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export const DrawerRight = createDrawerNavigator({
  Profile:{ screen: HomeScreen},
  News : {screen: NewsScreen},
  Drivers: {screen: Drivers}
  },{
    initialRouteName: 'Profile',
    drawerPosition: 'right',
    contentComponent: SideMenu,
    drawerWidth: Dimensions.window.width,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

export default createDrawerNavigator({
  DrawerRight,
});
