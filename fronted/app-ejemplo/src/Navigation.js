import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from "./components/home/Menu";
import ProfileCard from "./components/home/ProfileCard";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import List from "./components/list/List";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={ProfileCard} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="list" component={List} options={{
                tabBarLabel: "Listado",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="Profile" component={ProfileCard} />
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