import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileCard from "./components/home/ProfileCard";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import List from "./components/list/List";
import Form from "./components/Form";
import Chat from "./components/chat/Chat";
import PdfGPT from "./components/pdf/PdfGPT";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
            }}
        >
            {/* <Tab.Screen name="Menu" component={ProfileCard} options={{
                tabBarLabel: "Inicio",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                }
            }} /> */}
            <Tab.Screen name="List" component={List} options={{
                tabBarLabel: "Listado",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="Nombre" component={Form} options={{
                tabBarLabel: "Nombre",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="pencil-circle-outline" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="PDF" component={PdfGPT} options={{
                tabBarLabel: "PDF",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="file-document-outline" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="ChatGPT" component={Chat} options={{
                tabBarLabel: "ChatGPT",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="chat-outline" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="Profile" component={ProfileCard} options={{
                tabBarLabel: "Perfil",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
                }
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});