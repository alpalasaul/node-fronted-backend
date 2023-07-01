import React from 'react'
import { FlatList } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { useCompletition } from '../hooks/useCompletition'
import MessageInput from './MessageInput'
import Icon from 'react-native-vector-icons/FontAwesome'
import Item from './Item'

const trashIcon = <Icon name='trash' size={20} color="red" />

const Chat = () => {
  const { listMessage, clearList, prompt, setPrompt, onSubmit } = useCompletition()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatGPT</Text>
      {
        listMessage.length === 0
        &&
        <View style={styles.titleVoid}>
          <Text style={styles.message}>¡Hola! Soy un bot que te ayudará a responder tus preguntas. Escribe algo para comenzar.</Text>
          <Text style={{ fontSize: 50 }}>{"🐧"}</Text>
        </View>
      }
      <FlatList
        data={listMessage}
        renderItem={({ item }) => <Item item={item} />}
      />
      {
        listMessage.length > 0
        &&
        <Text onPress={clearList}>
          {trashIcon}
        </Text>
      }
      <MessageInput prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 20
  },
  titleVoid: {
    margin: 20,
    textAlign: 'center',
    color: 'gray',
    width: 370,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  }
})