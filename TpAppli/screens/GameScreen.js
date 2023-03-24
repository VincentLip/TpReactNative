import { Button,FlatList,Image,Pressable,StyleSheet, Text, View,ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, GAMES } from '../data/data'

export default function GameScreen({navigation , route}) {


    const idCategory = route.params.idCategory
    const tmpGame = []
    
    function Find(id){

        GAMES.forEach(element => {

            if(id == element.categoryIds.filter(e => e == id)){
                tmpGame.push(element)
            }        
        })
    }
    Find(idCategory)

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id == idCategory
        ).title;

        navigation.setOptions({
            title : categoryTitle
        })
    },[idCategory, navigation])

  return (
        <ImageBackground source={require('./assets/abstract.jpg')} resizeMode="cover" style={styles.imageback}> 
    <View>
        <FlatList data={tmpGame} renderItem={(itemData) => {
        return (
            <View style={styles.gameItem}>
                <Pressable style={({ pressed }) => (pressed ? styles.buttonPressed : null)}  onPress={() => navigation.navigate ("Detail", {game : itemData.item})}>
                    <View style={styles.innerContainer}>
                        <View>
                            <Image source={{uri : itemData.item.imageUrl}} style={styles.image}/>
                            <Text style={styles.title}>{itemData.item.title}</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.genre}>{itemData.item.genre}</Text>
                        </View>
            
                    </View>
                </Pressable>
            </View>
        )
    }} keyExtractor={(item,index) => {
        return item.id
    }}></FlatList>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    gameItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        color : "black",
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    genre: {
        marginHorizontal: 4,
        fontSize: 20,
        color: "black",
    },
    imageback: {
        flex: 1,
        justifyContent: 'center',
      },
})