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
        <View style={styles.body}>
            <Text style={[
                styles.text
            ]}>
                Shin Welcome to {email} !
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                value={email}
                onChangeText={(value) => setEmail(value)}
            />
            <CustomButton
                title='Update'
                color='#ff7f00'
                onPressFunction={updateData}
            />
            <CustomButton
                title='Remove'
                color='#f40100'
                onPressFunction={removeData}
            />
        </View>
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
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})