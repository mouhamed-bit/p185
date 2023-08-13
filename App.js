import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import Main from "./screens/Main";

const stack = createStackNavigator();
export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
        >
          <stack.screen name="Home" component = {Home}/>
          <stack.screen name="Main" component = {main}/>
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}
