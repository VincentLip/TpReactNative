import { StyleSheet,Modal, Text, View,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'

export default function ModalComment(props) {

    const [textComment, setTextComment] = useState("")

    function addComment() {
        console.log("Ajout d'un article")
        props.addComment(textComment);
    }


  return (
    <Modal visible={props.visible} animationType="slide">
    <View>
            <TextInput multiline={true} numberOfLines={4} style={styles.commentaire} placeholder='text' onChangeText={(textComment) => setTextComment(textComment)}/>
            <Pressable onPress={addComment}><Text>Envoyer</Text></Pressable>
            <Text></Text>

        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})