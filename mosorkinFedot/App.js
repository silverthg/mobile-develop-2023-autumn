<<<<<<< HEAD
import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Lab1 from "./screens/lab1.js";
import Lab2 from "./screens/lab2.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./imgs/lab1icon.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./imgs/lab2icon.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> parent of cd32da8... Added lab1
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  img: {
    height: 30,
    width: 30,
=======
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> parent of cd32da8... Added lab1
  },
});
