import { Image,ScrollView,StyleSheet, Text, View,Button,FlatList,TextInput,Pressable } from 'react-native'
import React , { useEffect, useLayoutEffect, useState }from 'react'
import ModalComment from './ModalComment'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GAMES } from '../data/data'



export default function GameDetailScreen({navigation ,route}) {

    const game = route.params.game

    const [modalIsVisible,setModalIsVisible] = useState(false)
    const [comments,setComments] = useState([])


    useLayoutEffect(() => {
      const gameTitle = GAMES.find(
          (games) => games.id == game.id
      ).title;

      navigation.setOptions({
          title : gameTitle
      })
  },[game.id, navigation])


    function openModale(){
       
        setModalIsVisible(true)
        console.log(game.comment)
    }

    function closeModale(){
        
        setModalIsVisible(false)
    }


    useEffect(() => {
        if(comments.length == 0){
            getComment()
        }else{
            setComment()
        }
      },[comments])

    const setComment = async () => {
        try{
          const jsonComment = JSON.stringify(comments)
          await AsyncStorage.setItem('comments',jsonComment)
        }catch(error){
          console.log(error)
        }
      }

      const getComment = async () => {
        try {
                const jsonArticle = await AsyncStorage.getItem('comments')
                if(jsonArticle != null){
                    setComments(JSON.parse(jsonArticle))
                } 

            }catch(error){
                console.log(error)
            } 
      }

      function addComment(comment){
        
        setComments(commentsCurrent => [
           ...commentsCurrent,
           { text : comment , id : Math.random().toString() , title : game.title}
        ])
        setModalIsVisible(false) // closeModale()
       }

       function deleteArticle(id) {
        console.log("il faut delete l'article avec l'id : "+id)
        setComments((articlesCurrent) => {
          return articlesCurrent.filter((item) => item.id != id)
        })
    }


  return (
    <View style={styles.container}>
        <Image source={{uri : game.imageUrl}} style={styles.image}/>
        <View style={styles.detail}>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.info}>{game.genre}</Text>
          <Text style={styles.description}>{game.description}</Text>
          <Pressable style={styles.button} onPress={openModale}>
              <Text style={styles.text}>Ajouter Commentaire</Text>
          </Pressable>
        </View>
        {/* <Button title='Ajouter Commentaire' onPress={openModale}/> */}
         <ModalComment visible={modalIsVisible} closeModale={closeModale} addComment={addComment} ig={game.id}/>
        <FlatList data={comments} renderItem={(itemData) => {
          if(itemData.item.title == game.title){
            return (
              <Pressable onPress={() => deleteArticle(itemData.item.id)}>
              <Text style={styles.comment}>{itemData.item.text}</Text>
              </Pressable>
            )
          }
        }} keyExtractor={(item,index) => {
          return item.id
        }}></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex:1 ,
        backgroundColor : 'black'
      },
      image : {
          width: "100%", 
          height: 300
      },
      detail : {
        alignItems:"center",
      },
      title : {
        fontSize:25,
        color : "white"
      },
      info :{
  
        fontSize : 15,
          color :"white",
          textAlign : "center",
          textTransform : "uppercase",
          margin : 5   
      },
      ingredient : {
        backgroundColor : "#FF5733",
        color : "white",
        margin : 5,
        borderRadius : 5
      },
      steps : {
        backgroundColor : "#FF5733",
        color : "white",
        margin : 5,
        borderRadius : 5
      },
      design : {
  
        felx : 1,
        width : "75%",
        alignItems : "center",
        justifyContent : "center",
      },
      description :{

        margin : 10,
        color :"white"
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width : 250,
        backgroundColor: '#01C5C1',
      },
      text: {
        fontSize: 16,
        lineHeight: 15,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      comment : {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        color : "white",
        borderColor: '#01C5C1', 
        borderWidth: 1,
        margin : 10,
        borderRadius : 10
      }
      
})