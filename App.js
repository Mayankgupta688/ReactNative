import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";

var style = StyleSheet.create({
  topContainer: {
    marginTop: 50,
    marginLeft:20
  }, headerText: {
      color: "red",
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 15
  }, detailsContainerStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#e4dedf"
    
  }, imageContainerText: {
    marginLeft: 20,
    marginBottom: 10
  }, detailsContainer: {
    marginTop: 10
  }
})

function App() {
  let [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    debugger;
    fetch("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then(res => res.json()).then((res) => {
      setEmployeeList(res)
    })
  }, [])

  return (
    <View style={style.topContainer}>
      <Text style={style.headerText}>Employee List</Text>
      <FlatList data={employeeList} renderItem={({item}) => {
        return (
          <View style={style.detailsContainerStyle}>
            <Image source={{uri: item.avatar}} style={{width: 100, height: 100}} />
            <View style={style.detailsContainer}>
              <Text style={style.imageContainerText}>Employee Id: {item.id}</Text>
              <Text style={style.imageContainerText}>{item.name}</Text>
              <Text style={style.imageContainerText}>Created at: {new Date(item.createdAt).toDateString()}</Text>
            </View>
          </View>
        )
      }} />
    </View>
  )
}

export default App;