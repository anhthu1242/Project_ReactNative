import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import Video from './Video';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';



import Anhs from "./Anh";
import { MaterialIcons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

function VideoScreen({ navigation }) {

  const onPressHandler = () => {
    navigation.openDrawer();
    navigation.navigate('./VideoScreen');
  }
  const ListAnh = ({ anh }) => {
    return (
      <View style={styles.shadow}>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={anh.link}>
          </Image>
          <View style={styles.info}>
            <Text style={styles.name}>{anh.name} </Text>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{anh.title}</Text>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => navigation.navigate('AnhScreen', anh)}
              >
                <Text style={styles.details} > Chi tiết  </Text>
              </TouchableOpacity>
              <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
              >
              </Pressable>

            </View>
          </View>
        </View>
      </View>
    );
  };
  return (

    <ImageBackground
      style={styles.body}
      source={require('../../assets/bgScreen.png')}
    >
      <SafeAreaView>
        <View style={styles.header}>

          <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }} > Video cute </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Anhs}
          renderItem={
            ({ item }) =>
              <View style={styles.wapper}>
                <ListAnh anh={item} />
              </View>
          }
        />
      </SafeAreaView>
    </ImageBackground>

  )
}

function AnhScreen({ navigation }) {

  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  }
  const ListVideo = ({ video }) => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={video.image}>
        </Image>
        <View style={styles.info}>
          <Text style={styles.name}>{video.name} </Text>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{video.title}</Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate('DetailsScreen', video)}
            >
              <Text style={styles.details} > Chi tiết  </Text>
            </TouchableOpacity>
            <Pressable
              onPress={onPressHandler}
              style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
            </Pressable>

          </View>
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      style={styles.body}
      source={require('../../assets/bgScreen1.png')}
    >
      <SafeAreaView>
        <View style={styles.header}>

          <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }} > Video ..... </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Video}
          renderItem={
            ({ item }) =>
              <View style={styles.wapper}>
                <ListVideo video={item} />
              </View>
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

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
              color={focused ? '#0080ff' : '#990076'}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'left',
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },

  },
  container: {
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  img: {
    width: 64,
    height: 64,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  info: {
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 8
  },
  wapper: {
    flex: 1,
    paddingHorizontal: 5,
  },
  details: {
    color: 'blue',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'left',
    marginHorizontal: 20,
  },
})