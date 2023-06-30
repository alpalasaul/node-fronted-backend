import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const instagram_username = <Icon name='instagram' size={30} color="black" />
const portfolio_url = <Icon name='globe' size={30} color="black" />

/*

campos con nombre y apellido 
y submit 
peticion al endpoint 

y retorno hola nombre apellido

examen endpoint para el crud 

debajo del input
listar el usuario 
borrar el usuario 

*/

export default function Profile({ task, closeProfile }) {
    return (
        <View style={styles.item}>
            <View style={styles.supimage}>
                <View style={styles.leftSide}>
                    <Image
                        style={styles.image}
                        source={{ uri: task.urls.raw }}
                    />
                </View>
                <View style={styles.rightSide}>
                    <Text style={{ color: 'blue' }} onPress={() => {
                        Linking.openURL(task.user.portfolio_url)
                    }} >
                        {task.user.name}
                    </Text>
                    <View style={styles.redes}>
                        <Text style={{ color: 'blue' }} onPress={() => {
                            Linking.openURL(task.user.social.instagram_username)
                        }}>
                            {instagram_username}
                        </Text>
                        <Text style={{ color: 'blue' }} onPress={() => {
                            Linking.openURL(task.user.portfolio_url)
                        }}>
                            {portfolio_url}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerkpi}>
                <View style={styles.kpiR}>
                    <Image
                        style={styles.image2}
                        source={require('../../../assets/like.png')}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={closeProfile}>
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    supimage: {
        height: "100%",
        width: "100%",
        flexBasis: "70%",
        display: "flex",
        flexDirection: "row"
    },
    leftSide: {
        flexBasis: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    rightSide: {
        flexBasis: "50%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    redes: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    containerkpi: {
        width: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    kpiR: {
        width: 20
    },
    image2: {
        width: 20,
        height: 20
    }
})