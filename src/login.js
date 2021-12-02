import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native';



const LoginScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <ImageBackground  style={styles.imgbg}
          source = {require('../../assets/background.png')}
         
          >
              
            <Text style={styles.text}>ĐĂNG NHẬP</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder ="Tên đăng nhập "
                style ={styles.input}
                >
              </TextInput>

              <TextInput
                placeholder ="Mật khẩu"
                style ={styles.input}
                secureTextEntry
              >
              </TextInput>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.4}
                onPress={() => navigation.navigate('HomeScreen')}
              >
                <Text style={styles.buttonText} >Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => navigation.navigate('HomeScreen')}
              >
                <Text style={styles.linktext} >Don't have account ? Sign up</Text>
              </TouchableOpacity>
            </View>

          </ImageBackground>
          
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imgbg :{
    height : 300,
    width :300 , 
    alignItems :'center',
  },
  text :{
    fontWeight : 'bold',
    fontSize :20,
    color : 'white',
    fontFamily :'Open Sans',
    fontSize : 13,
    marginTop : 40,
  },
  inputContainer :{
    width :'70%'
  },
  input :{
    backgroundColor :'white',
    paddingHorizontal :10 ,
    paddingVertical :10 ,
    borderRadius :10,
    marginTop : 15,
    borderWidth :2 ,
  },
  button :{
    backgroundColor :'orange',
    width : '70%',
    padding :6 ,
    alignItems :'center',
    borderRadius :10,
  },
  buttonContainer :{
    width : '60%',
    justifyContent : 'center',
    alignItems :'center',
    marginTop :40,
  },
  buttonText :{
    color :'black',
    fontWeight : '400',
    fontSize :10,
    marginTop: 10 ,
    fontSize : 16,
  },
  linktext :{
    textDecorationLine: 'underline',
    color :'red',
    marginTop : 10 ,
    fontSize : 13,
  }
});
  
export default LoginScreen;