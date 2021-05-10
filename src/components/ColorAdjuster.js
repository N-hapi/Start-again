import React, { useState } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorAdjuster = ({ colorb, onIncrease, onDecrease }) => {
    return (


        <View>
        <Text>{colorb}</Text>
        <Button onPress={()=> onIncrease()} title= {`Increase Red ${colorb}`}/>
        <Button onPress={()=> onDecrease()} title= {`Decncrease Red ${colorb}`}/>

        </View>

    );

};

const Styles = StyleSheet.create({});


export default ColorAdjuster;

