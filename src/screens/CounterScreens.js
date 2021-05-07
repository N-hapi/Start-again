import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { set } from "react-native-reanimated";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current count {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    //fontSize: 30,
  },
});

export default CounterScreen;
