import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    ImageBackground,
} from 'react-native';

export default function VideoScreen({ navigation }) {

    const onPressHandler = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground
            style={styles.body}
            source={require('../../assets/bgScreen.png')}
        >
            <View style={styles.body}>
            <Text style={styles.text}>
                Kho video
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
            </Pressable>
        </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})