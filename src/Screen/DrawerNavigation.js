
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator(); 

export default function Home({ navigation, route }) {

    return ( 
    <Drawer.Navigator
    initialRouteName="VideoScreen"
    drawerPosition='left'
    drawerType="front"
    edgeWidth={100}
    hideStatusBar={false}
    overlayColor='#00000090'
    drawerStyle={{
      backgroundColor: '#c6cbef',
      width: 240,
    }}
    
    screenOptions={{
      headerShown: true,
      swipeEnabled: true,
      gestureEnabled: true,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#0080ff'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold'
      }
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
    <Drawer.Screen
      name="VideoScreen"
      component={VideoScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <FontAwesome5
            name="file-video"
            size={focused ? 25 : 20}
            color={focused ? '#0080ff' : '#999999'}
          />
          
        )
      }}
    />
    <Drawer.Screen
      name="AnhScreen"
      component={AnhScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <FontAwesome5
            name="file-image"
            size={focused ? 25 : 20}
            color={focused ? '#0080ff' : '#999999'}
          />
        )
      }}
    />
    </Drawer.Navigator>
)
}