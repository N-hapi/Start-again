import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Touchable
} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
    
      <ImageDetail
        title="here is the extra information"
        imageSource={require('../../assets/beach.jpg')}
        score= "5"
      />
      <ImageDetail
        title="more information"
        imageSource={require('../../assets/beach.jpg')}
        score= "2"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    //fontSize: 30,
  },
});

export default ImageScreen;
