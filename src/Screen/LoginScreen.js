import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('HomeScreen');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Email: email,
                    Password: password
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('HomeScreen');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../../assets/background.png')}
            />
            <Text style={styles.text}>
                WELLCOM TO SIGN-IN
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your email'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                 secureTextEntry
                style={styles.input}
                placeholder='Enter your password'
                onChangeText={(value) => setAge(value)}
            />
            <CustomButton
                title='Login'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {

        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})