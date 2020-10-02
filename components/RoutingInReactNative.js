// https://reactnavigation.org/docs/navigating

import React from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: .5
  }
})

function HomeScreen(props) {
  function navigateUser() {
    props.navigation.navigate("Details")
  }
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableHighlight style={{
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        height: 50,
        backgroundColor: "red",
        margin: 10
      }} onPress={navigateUser}>
        <Text>Add Data</Text>
      </TouchableHighlight>
    </View>
  );
}

function DetailsScreen() {
  let [showDatePicker, setShowDatePicker] = React.useState(false);
  let [dateSelected, setDateSelected] = React.useState(false);

  function showDatePickerData() {
    setShowDatePicker(true)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen Data</Text>
      <View style={styles.container}>
        <TextInput value="ajsgdhasldgh" style={{border: "1 solid red"}}></TextInput>
      </View>
      <View style={styles.container}>
        <TextInput></TextInput>
      </View>
      
    </View>
  );
}

const Stack = createStackNavigator();

function RoutingInReactNative() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutingInReactNative;