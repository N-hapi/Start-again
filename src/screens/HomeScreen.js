import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable} from "react-native";
//import ComponentScreen from './ComponentsScreen';

const HomeScreen = props1 => {
  return(
  <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
      onPress={()=> props1.navigation.navigate('Components')} 
      title="To-do"/>
      <TouchableOpacity onPress={()=> props1.navigation.navigate('Images')}>
        <Text>This is the second button</Text>
      </TouchableOpacity>
  </View>)
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

