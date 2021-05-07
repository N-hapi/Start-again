//this is the component screen (props are the extra fetures of a component) this component only has 
// the defult text or image passign throgh it

import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, Touchable} from "react-native";


const ImageDetail = props => {
    console.log(props);
   return( 
    <View>
        
        <Text>{props.title}</Text>
        <Image source={props.imageSource}/>
        <Text>This is the score the image got {props.score}</Text>
    </View>);
};

// const styles = StyleSheet.create({
//     textStyle: {
//         fontSize: 30
//     }


// });

export default ImageDetail;





