import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Form() {

  const [fullName, setFullName] = useState({ nombre: '', apellido: '' })
  const [data, setData] = useState()

  const onSubmit = async () => {
    const { nombre, apellido } = fullName
    const response = await fetch(`http://localhost:3000/hola/${nombre}/${apellido}`)
    const data = await response.json()
    setData(data)
  }

  const handleChange = (name, value) => {
    setFullName((prevFullName) => ({
      ...prevFullName,
      [name]: value
    }))
  }

  const NameCard = ({ data }) => (
    <Text style={styles.nameCard}>
      {data.nombre} {data.apellido}
    </Text>
  )

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>
          Completa los campos
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder='Ingresa tu nombre'
          value={fullName.nombre}
          onChangeText={value => handleChange('nombre', value)}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Ingresa tu apellido'
          value={fullName.apellido}
          onChangeText={value => handleChange('apellido', value)}

        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.textButton}>
            Submit
          </Text>
        </TouchableOpacity>
        {
          data &&
          <NameCard data={data} />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  inputText: {
    width: 300,
    backgroundColor: "white",
    color: "gray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 10
  },
  button: {
    width: 120,
    height: 35,
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center'
  },
  nameCard: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    // marginBottom: 10,
    borderRadius: 20,
    minWidth: "75%",
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
