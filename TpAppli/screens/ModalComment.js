import { StyleSheet,Modal, Text, View,TextInput,Pressable,ImageBackground } from 'react-native'
import React, { useState } from 'react'

export default function ModalComment(props) {

    const [textComment, setTextComment] = useState("")

    function addComment() {
       
        props.addComment(textComment);
    }

    function closeModal() {
       
      props.closeModale()
    
  }


  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground source={require('./assets/abstract.jpg')} resizeMode="cover" style={styles.imageback}> 
        <View style={styles.container}>
            <TextInput multiline={true} numberOfLines={15} placeholder='text' onChangeText={(textComment) => setTextComment(textComment)} style={styles.comment}/>
              <View>
              <Pressable style={styles.button}  onPress={addComment}>
                <Text style={styles.text}>Envoyer</Text>
              </Pressable>
              <Pressable style={styles.buttonback} >
                <Text style={styles.back} onPress={closeModal}>Retour</Text>
              </Pressable>
              </View>
        </View>
      </ImageBackground>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageback: {
    flex: 1,
    justifyContent: 'center',
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
      margin : 10,
    },
    text: {
      fontSize: 16,
      lineHeight: 15,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      
    },
    comment : {
      borderColor: 'white', 
      borderWidth: 1,
      color: "white",
      marginTop: 12,
      borderRadius : 10,
      width : "75%",
      fontSize : 18
    },
    buttonback: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width : 150,
      backgroundColor: '#d79811',
      margin : 10,
    },
    back: {
      fontSize: 16,
      lineHeight: 15,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      
    },
})