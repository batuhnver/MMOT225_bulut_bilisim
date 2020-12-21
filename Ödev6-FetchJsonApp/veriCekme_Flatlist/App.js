import React, { Component } from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }
  onPress = ({ id, title, body }) => {
    Alert.alert(`${id}\n${body}\n${title}`);
  }

  fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    this.setState({ data: json });
  };

  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <TouchableOpacity
            onPress={() => this.onPress(item)}
            
            
            >
              <Text style = {styles.title}>Başlık = {item.title}{"\n"}</Text>
            </TouchableOpacity>
            
            

          
          }
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderColor: 'gray',
    
  },
  id: {
    color: 'red',
    fontSize: 20
    

  },
  title: {
    color: 'cyan',
    
    

  },
  body: {
    color: 'green',
    fontSize: 15
    
    

  }

  
});