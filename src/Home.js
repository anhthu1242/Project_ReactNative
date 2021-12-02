import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const HomeScreen = ({navigation}) =>{

  const ListCategories = () => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View style ={styles.container}>
            <View style ={styles.body}>
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('DressScreen')}
                >
                <Text style ={styles.title} >{category.name}</Text>
                <Image 
                    style ={styles.image} 
                    source={category.image}>
                </Image>
                </TouchableOpacity>
            </View> 
          </View>
        ))}
          
        </ScrollView>
    );
  };
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop:20}}>
              Welcome to 
            </Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={1.0}
          onPress={() => navigation.navigate('CartScreen')}
        >
          <FontAwesome name="shopping-cart" size={24} color="black"  />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Tìm kiếm"
          />
        </View>
        <View style={styles.sortBtn}>
        <TouchableOpacity activeOpacity={1.0}>     
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft :16,
    paddingRight :16,
  },
  body :{
    alignItems:'center',
    padding:16,
    borderRadius:4,
    backgroundColor: '#fff',
    shadowColor:'#000',
    shadowOpacity:0.3,
    shadowRadius:10,
    shadowOffset:{width:0, height:0},
    marginBottom:16
  },
  image :{
      width:64,
      height:64
  },
  title :{
      textTransform:'uppercase',
      marginBottom:8,
      fontWeight:'700',
      textAlign :'center'
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor:'#E5E5E5',
    alignItems: 'center',
    marginBottom:16
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor:'#F9813A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;