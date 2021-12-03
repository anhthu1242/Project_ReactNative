import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    ImageBackground
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

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
                        navigation.navigate('HomeScreen');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (email.length == 0 || password.length == 0) {
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
      <ImageBackground
            style={styles.body}
                source={require('../../assets/background.png')}
      >
                
            <Text style={styles.text}>
                WELLCOM TO SIGN-IN
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your email'
                onChangeText={(value) => setEmail(value)}
            />
            <TextInput
                 secureTextEntry
                style={styles.input}
                placeholder='Enter your password'
                onChangeText={(value) => setPassword(value)}
            />
            <CustomButton
                title='Login'
                color='#1eb90070'
                onPressFunction={setData}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    text: {
        fontSize: 30,
        marginTop: 150,
        color: '#000000',
        marginBottom: 80,
        alignContent: 'center'
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        backgroundColor: '#ffffff09',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})