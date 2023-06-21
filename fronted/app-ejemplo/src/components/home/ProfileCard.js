import React from 'react'
import { Image, StyleSheet, View, Text, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const twitter = <Icon name='twitter' size={30} color="black" />
const instagram = <Icon name='instagram' size={30} color="black" />
const linkedin = <Icon name='linkedin' size={30} color="black" />

export default function ProfileCard() {

    const user = {
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        coverPhoto: "https://biteable.com/wp-content/uploads/2019/07/Facebook-Cover-Video-Guide.png",
        name: "Junior Alpala"
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://twitter.com")}>
                    {twitter}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://instagram.com")}>
                    {instagram}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://linkedin.com")}>
                    {linkedin}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        alignItems: 'center'
    },
    coverPhoto: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "white"
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        width: "60%",
        justifyContent: "space-between"
    }
})