import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./components/Home";
import About from "./components/About";
import { MaterialCommunityIcons } from "react-native-vector-icons"

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                }
            }} />
            <Tab.Screen name="About" component={About} />
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