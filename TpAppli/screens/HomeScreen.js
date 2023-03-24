import { StyleSheet, Text, View,TextInput,Button,Pressable,ImageBackground,Image } from 'react-native'
import React, { useState } from 'react'
import { GAMES } from '../data/data';

export default function HomeScreen({navigation}) {

    const [search,setSearch] = useState()
    const [gameFound,setGameFound] = useState([])


    // const findGame = (text) => {

    //     if(text != ''){
    //         const found = GAMES.filter(element => element.title.toUpperCase() == text.toUpperCase())
    //         setGameFound(found)r

    //     }
    // }

    const games = GAMES.filter((item) => {
        return item.title.includes(search)
    })

    console.log(games)

    const findGame = () => {
        setGameFound(games)
    }

  return (
    <View style={styles.container}>
         <ImageBackground source={require('./assets/abstract.jpg')} resizeMode="cover" style={styles.image}> 
            <View style={styles.top}>
                <Text style={styles.home}>Bienvenue</Text>
                <Image source={require('./assets/smiley.png')} style={styles.smiley}></Image>
                <Text style={styles.description}>Rechercher et commenter vos jeux préférés</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate ("Categories")}>
                    <Text style={styles.text}>Categories</Text>
                </Pressable>
            </View>
            <TextInput placeholder='Entrer le nom de votre choix' placeholderTextColor="white" onChangeText={(text) => setSearch(text)} style={styles.search} />
            <Button title="Recherche" onPress={() => findGame()}></Button>
            {games.map(i => <Pressable onPress={() => navigation.navigate ("Detail", {game : i})}><Text style={styles.result}>{i.title}</Text></Pressable>)}
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
        borderColor: 'white', 
        borderWidth: 1,
        color: "white",
        marginTop: 12,
        borderRadius : 10,
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
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width : 150,
        backgroundColor: '#01C5C1',
      },
      text: {
        fontSize: 16,
        lineHeight: 15,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      description : {
        paddingVertical: 12,
        color :'white'
      }
})