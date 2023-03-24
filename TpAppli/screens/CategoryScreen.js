import { Pressable,FlatList, StyleSheet, Text, View ,ImageBackground} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'


export default function CategoryScreen({navigation}) {
  return (
    <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={(itemData) => {
        return(
          <View style={styles.gridItem}>
            <ImageBackground source={require('./assets/abstract.jpg')} resizeMode="cover" style={styles.image}> 
            <Pressable onPress={() => navigation.navigate('GameScreen', {idCategory : itemData.item.id})} style={({pressed}) =>  [ styles.button, pressed ? styles.buttonPressed : null] }>
                <View style={[styles.innerContainer]}>
                    <Text style={styles.title}>{itemData.item.title}</Text>
                </View>
            </Pressable>
            </ImageBackground>
        </View>
        )
        
    }}
    
    />
  )
}

const styles = StyleSheet.create({
  gridItem : {
    flex : 1,
    margin : 16,
    height : 150,
    borderRadius : 8,
    backgroundColor : "white",
    elevation : 4,
   // overflow : 'hidden'

},
button : {
    flex : 1,
},
buttonPressed : {
    opacity : 0.5,
},
innerContainer : {
    flex : 1,
    padding : 16,
    borderRadius : 8,
    justifyContent : "center",
    alignItems : "center",
},
title : {
    fontWeight : 'bold',
    color : "white",
    fontSize : Platform.OS === 'android' ? 20 : 30,
},
image: {
  flex: 1,
  justifyContent: 'center',
},
})