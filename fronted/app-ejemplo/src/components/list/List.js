import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Task from './Task'

export default function List() {

    const [taskItems, setTaskItems] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/?client_id=ZXjOAAdwefwfYGtyhjJmAerkWnGDxNNnEwTlnHkSqk4')
            const jsonData = await response.json()
            setTaskItems(jsonData)
            console.log(jsonData)
        } catch (error) {
            console.error(error)
        }
    }

    const getProfile = (task) => {

    }

    const Item = ({task, i}) => {
        return (
            <TouchableOpacity style={styles.peritem} key={i} onPress={getProfile(task)}>
                <Task task={task} />
            </TouchableOpacity>
        )
    }

    return(taskItems &&
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>
                    Se listan los perfiles
                </Text>
                <View style={styles.items}>
                    <FlatList 
                        data={taskItems}
                        renderItem={(item, i) => <Item task={item} i={i} />}    
                    >
                    </FlatList>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    taskWrapper: {

    },
    sectionTitle: {

    },
    items: {

    },
    peritem: {

    }
})