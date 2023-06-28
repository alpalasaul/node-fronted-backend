import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from "./components/home/Menu";
import ProfileCard from "./components/home/ProfileCard";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import List from "./components/list/List";
import Form from "./components/Form";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={ProfileCard} options={{
                tabBarLabel: "Inicio",
                tabBarIcon: ({ color, size }) => {
                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                }
            }} />
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