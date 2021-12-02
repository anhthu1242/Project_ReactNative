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
          source = {require('../assets/background.png')}        
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
                activeOpacity={0.1}
                onPress={() => navigation.navigate('HomeScreen')}
              >
                <Text style={styles.linktext1}   >Don't have account ?   Sign up </Text> 

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
    height : '100%',
    width :'100%' , 
    alignItems :'center',
  },
  text :{
    fontWeight : 'bold',
    color : '#fff',
    fontFamily :'Open Sans',
    fontSize : 40,
    marginTop : 100,
  },
  inputContainer :{
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input :{
    backgroundColor :'#ffffff10',
    paddingHorizontal :10 ,
    paddingVertical :10 ,
    borderRadius :10,
    marginTop : 15,
    borderWidth :2 ,
  },
  button :{
    backgroundColor :'#999966',
    alignItems :'center',
    borderRadius :10,
    minHeight: 60,
    height: 60,
    minWidth: 100,
  },
  buttonContainer :{
    justifyContent : 'center',
    alignItems :'center',
    marginTop :30,
  },
  buttonText :{
    color :'blue',
    fontWeight : '400',
    fontSize :16,
    marginTop: 20 ,
  },
  linktext1 :{
    textDecorationLine: 'underline',
    color :'red',
    fontSize : 13,
  },


});
  
export default LoginScreen;