import { Image,ScrollView,StyleSheet, Text, View,Button,FlatList } from 'react-native'
import React , { useEffect, useState }from 'react'
import ModalComment from './ModalComment'
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function GameDetailScreen({navigation ,route}) {

    const game = route.params.game

    const [modalIsVisible,setModalIsVisible] = useState(false)
    const [comments,setComments] = useState([])

    function openModale(){
        console.log("clique sur bouton ajouter article")
        setModalIsVisible(true)
    }

    function closeModale(){
        console.log("clique sur bouton de ma modal pour fermer ma modal")
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
        // console.log("Ajout d'un articles à ma liste : "+article)
        setComments(commentsCurrent => [
           ...commentsCurrent,
           { text : comment , id : Math.random().toString()}
        ])
        setModalIsVisible(false) // closeModale()
       }


  return (
    <View style={styles.container}>
        <Image source={{uri : game.imageUrl}} style={styles.image}/>
        <View style={styles.detail}>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.info}>{game.genre}</Text>
          <Text>{game.description}</Text>
        </View>
        <Button title='Ajouter Commentaire' onPress={openModale}/>
        <ModalComment visible={modalIsVisible} closeModale={closeModale} addComment={addComment}/>
        <FlatList data={comments} renderItem={(itemData) => {
          return (
            <Text text={itemData.item.text} id={itemData.item.id} item={itemData.item}>{itemData.item.text}</Text>
          )
        }} keyExtractor={(item,index) => {
          return item.id
        }}></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex:1 ,
      },
      image : {
          width: "100%", 
          height: 300
      },
      detail : {
        alignItems:"center"
      },
      title : {
        fontSize:25,
        color : "black"
      },
      info :{
  
        fontSize : 15,
          color :"black",
          textAlign : "center",
          textTransform : "uppercase",
          margin : 5   
      },
      ingredient : {
        backgroundColor : "#FF5733",
        color : "black",
        margin : 5,
        borderRadius : 5
      },
      steps : {
        backgroundColor : "#FF5733",
        color : "black",
        margin : 5,
        borderRadius : 5
      },
      design : {
  
        felx : 1,
        width : "75%",
        alignItems : "center",
        justifyContent : "center"
      },
      commentaire : {
    

      }
})