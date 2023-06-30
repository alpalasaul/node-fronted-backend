import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const sentIcon = <Icon name='location-arrow' size={15} color="white" />

const MessageInput = ({ onSubmit, prompt, setPrompt }) => {

  const handleChange = (value) => {
    setPrompt(value)
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.inputText}
        multiline
        placeholder="Escribe tu mensaje..."
        value={prompt}
        onChangeText={handleChange}
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text>
          {sentIcon}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 370
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
})

export default MessageInput;