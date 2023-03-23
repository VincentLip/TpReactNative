import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from './screens/CategoryScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GameScreen from './screens/GameScreen';
import GameDetailScreen from './screens/GameDetailScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Drawer.Screen name="Categories" component={CategoryScreen} options={{ title: 'All Categories' }} />
      </Drawer.Navigator>
  )

}


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="GameScreen" component={GameScreen}/>
            <Stack.Screen name="Detail" component={GameDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})