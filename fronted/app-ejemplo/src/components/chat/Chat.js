import React from 'react'
import { FlatList } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { useCompletition } from './useCompletition'
import MessageInput from './MessageInput'
import Icon from 'react-native-vector-icons/FontAwesome'

const trashIcon = <Icon name='trash' size={20} color="red" />

const Chat = () => {
  const { listMessage, clearList, prompt, setPrompt, onSubmit } = useCompletition()

  const Item = ({ item }) => {
    const { id, message, prompt, numTokens } = item
    return (
      <View key={id}>
        <Text style={styles.prompt}> {"🧔"} {prompt}</Text>
        <Text style={styles.item}>{"🤖"} {message}</Text>
        <Text style={styles.token}>Token utilizados: {numTokens}</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatGPT</Text>
      {
        listMessage.length === 0
        &&
        <View style={styles.titleVoid}>
          <Text style={styles.message}>¡Hola! Soy un bot que te ayudará a responder tus preguntas. Escribe algo para comenzar.</Text>
          <Text style={{ fontSize: 50}}>{"🐧"}</Text>
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
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 20
  },
  button: {
    width: 60,
    height: 35,
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 370
  },
  titleChat: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  inputText: {
    width: 300,
    backgroundColor: "white",
    color: "gray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    width: 370,
    borderRadius: 5,
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
  },
  prompt: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    width: 370,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },
  token: {
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 10,
  }
})