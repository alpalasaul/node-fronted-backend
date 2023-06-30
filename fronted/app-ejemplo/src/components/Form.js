import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const pencilIcon = <Icon name='pencil' size={15} color="blue" />
const trashIcon = <Icon name='trash' size={15} color="red" />

const initialData = []

// temperatura contexto / respuesta

const initialFullName = { nombre: '', apellido: '' }

export default function Form() {

  const [fullName, setFullName] = useState(initialFullName)
  const [listNames, setListNames] = useState(initialData)

  const onSubmit = async () => {
    const { nombre, apellido } = fullName

    if (fullName.id) {
      const newList = listNames.map((item) => (item.id === fullName.id ? fullName : item));
      setListNames(newList)
    } else {
      // const response = await fetch(`http://localhost:3000/hola/${nombre}/${apellido}`)
      // const jsonData = await response.json()
      const newId = getLastId();
      // setListNames((prevValues) => [...prevValues, { id: newId, ...jsonData }]);
      setListNames((prevValues) => [...prevValues, { id: newId, nombre, apellido }]);
    }
    setFullName(initialFullName)
  }

  const getLastId = () => {
    const listLegth = listNames.length
    return listLegth + 1
  }

  const handleChange = (name, value) => {
    setFullName((prevFullName) => ({
      ...prevFullName,
      [name]: value
    }))
  }

  const handleDelete = (id) => {
    const newList = listNames.filter((item) => item.id !== id)
    setListNames(newList)
  }

  const handleEdit = (id) => {
    setFullName(listNames.find((item) => item.id === id))
  }

  const Card = ({ data }) => {
    const { id, nombre, apellido } = data
    return (
      <View style={styles.containerItem}>
        <View style={styles.itemFullName}>
          <Text key={id} >{nombre} {apellido}</Text>
        </View>
        <View style={styles.itemActions}>
          <Text onPress={() => handleEdit(id)} >{pencilIcon}</Text>
          <Text onPress={() => handleDelete(id)}>{trashIcon}</Text>
        </View>
      </View>
    )
  }

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
      </View>

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.textButton}>
          {
            fullName.id ? 'Editar' : 'Guardar'
          }
        </Text>
      </TouchableOpacity>

      <FlatList
        data={listNames}
        renderItem={({ item }) => <Card data={item} />}
      >
      </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
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
    // fontSize: 10
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
    // fontSize: 10,
    textAlign: 'center'
  },
  containerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  itemFullName: {
    width: '70%'
  },
  itemActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%'
  }
})
