import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Touchable
} from "react-native";

const NameScreen = () => {
    const [name, setName] = useState(''); 


    return(
    <View>
        <Text>Enter name here</Text>
        <TextInput
            style={styles.Input}
            autoCapitalize= "none"
            autoCorrect={false}
            value={name}
            onChangeText={newValue => setName(newValue)}
        
        />
    
    
    </View>)
};

const styles = StyleSheet.create({
    
        Input: {
            fontSize: 30,
            margin: 15, 
            borderColor: 'black', 
            borderWidth: 1

            
        }
        
    


});

export default NameScreen; 