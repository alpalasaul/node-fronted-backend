import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Item = ({ item }) => {
  const { id, message, prompt, numTokens, loading } = item
  return (
    <View key={id} style={styles.containerItem}>
      <View style={styles.containerPrompt}>
        <Text style={styles.text}>{"🧔"} </Text>
        <Text style={styles.text}>{prompt}</Text>
      </View>

      {
        !loading && (
          <View style={styles.containerMessage}>
            <Text style={styles.text}>{"🤖"}</Text>
            <Text style={styles.text}>
              {message}
              {"\n"}
              <Text style={{ fontWeight: 'bold' }}>
                Tokens: {numTokens}
              </Text>
            </Text>
          </View>
        )
      }
    </View>
  )
}

export default Item;

const styles = StyleSheet.create({
  containerItem: {
    width: 350
  },
  containerPrompt: {
    flex: 1,
    backgroundColor: 'orange',
    maxWidth: '80%',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  containerMessage: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#045C94',
    borderRadius: 10,
    padding: 5,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  text: {
    color: 'white',
    paddingHorizontal: 5,
    maxWidth: '80%',
  }
})