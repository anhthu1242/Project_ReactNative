import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {VideoScreen} from './VideoScreen';
import {AnhScreen} from './AnhScreen';
import {HelpScreen} from './HelpScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator(); 


export default function Home({ navigation, route }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setEmail(user.Email);
                        setPassword(user.Password);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (email.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Email: email
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
       <NavigationContainer>
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
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    // input: {
    //     width: 300,
    //     borderWidth: 1,
    //     borderColor: '#555',
    //     borderRadius: 10,
    //     backgroundColor: '#ffffff',
    //     textAlign: 'center',
    //     fontSize: 20,
    //     marginTop: 130,
    //     marginBottom: 10,
    // }
})