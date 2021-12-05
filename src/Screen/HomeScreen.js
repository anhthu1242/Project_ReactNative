import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    Pressable,
    ImageBackground
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';




const Drawer = createDrawerNavigator(); 

// function VideoScreen({ navigation }) {

//     const onPressHandler = () => {
//         navigation.openDrawer();
//         navigation.navigate('./VideoScreen');
//     }
//     const ListVideo = ({video}) => {
//       return (
//           <View style ={styles.shadow}>
//               <View style ={styles.container}>
//                   <Image 
//                       style ={styles.img}
//                       source={video.image}>
//                   </Image>
//                   <View style = {styles.info}>
//                       <Text style={styles.name}>{video.name} </Text>
//                       <View style={styles.link}>
//                           <Text style={styles.link}>{video.link}</Text>
//                           <TouchableOpacity
//                           activeOpacity={0.4}
//                           onPress={() => navigation.navigate('DetailsScreen', video)}
//                           >
//                           <Text style={styles.details} > Chi tiết  </Text>
//                           </TouchableOpacity>
//                           <Pressable
//                             onPress={onPressHandler}
//                             title = "Thêm"
//                             style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
//                           >
//                           </Pressable>
  
//                       </View>
//                   </View>
//           </View>
//        </View>
//       );
//     };
//     return (
      
//         <ImageBackground
//             style={styles.body}
//             source={require('../../assets/bgScreen.png')}
//         >
//         <SafeAreaView>
//           <View style={styles.header}>
              
//             <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={navigation.goBack} />
//             <Text style={{fontSize: 20, fontWeight: 'bold'}} > Video hay  </Text>
//           </View>
//           <FlatList 
//             showsVerticalScrollIndicator={false}
//             numColumns={2}
//             data={videoes}
//             renderItem = {({item}) =><View style ={styles.wapper}>
//                                         <ListVideo dress ={item} />
//                                       </View>}
//           />     
//         </SafeAreaView>
//         </ImageBackground>
        
//     )
// }

// function AnhScreen({ navigation }) {

//     const onPressHandler = () => {
//         // navigation.navigate('Screen_A');
//         navigation.goBack();
//     }

//     return (
//         <ImageBackground
//             style={styles.body}
//             source={require('../../assets/bgScreen1.png')}
//         >
//             <View style={styles.body}>
//             <Text style={styles.text}>
//                 kho ảnh 
//         </Text>
//             <Pressable
//                 onPress={onPressHandler}
//                 style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
//             >
//             </Pressable>
//         </View>
//         </ImageBackground>
        
//     )
// }

// function CustomDrawerContent(props) {
//     return (
//       <DrawerContentScrollView {...props} 
//       >
//         <DrawerItemList {...props} />
//         <DrawerItem label="Help" onPress={() => alert('Link to help')} 
//         options={{
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5
//                 name="file-video"
//                 size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'}
//               />
              
//             )
//           }}
//         />
//       </DrawerContentScrollView>
//     );
//   }




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