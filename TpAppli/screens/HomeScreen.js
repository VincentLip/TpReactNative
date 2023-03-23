import { StyleSheet, Text, View,TextInput,Button,Pressable,ImageBackground,Image } from 'react-native'
import React, { useState } from 'react'
import { GAMES } from '../data/data';

export default function HomeScreen({navigation}) {

    const [search,setSearch] = useState()
    const [gameFound,setGameFound] = useState([])


    const findGame = (text) => {
        const found = GAMES.filter(element => element.title.toUpperCase() == text.toUpperCase())
        setGameFound(found)
        console.log(found);
    }

  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/abstract.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.top}>
                <Text style={styles.home}>Bienvenue</Text>
                <Image source={require('./assets/smiley.png')} style={styles.smiley}></Image>
                <Text></Text>
            </View>
            <TextInput placeholder='text' onChangeText={(text) => setSearch(text)} style={styles.search}></TextInput>
            <Button title="Recherche" onPress={() => findGame(search)}></Button>
            {gameFound.map(i => <Pressable onPress={() => navigation.navigate ("Detail", {game : i})}><Text style={styles.result}>{i.title}</Text></Pressable>)}
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    search : {
        fontSize : 24,
        color: "white"
    },
    result : {
        fontSize : 24,
        color : "white"
    },
    home :{
        fontSize : 48,
        color : "white",
    },
    top : {
        
        justifyContent : "center",
        alignItems : "center"
    },
    smiley : {

        width : 150,
        height : 150
    }
})