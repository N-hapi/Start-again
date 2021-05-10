import React, { useState } from "react";
import { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorAdjuster from "../components/ColorAdjuster";



const SquaredScreen = () => {
    
    
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const COLOR_INCREMENT = 15;

    console.log(red);

    return (
        
        <View>
            
            <ColorAdjuster 
            onIncrease={()=> setRed(red + COLOR_INCREMENT)}
            onDecrease= {()=> setRed(red - COLOR_INCREMENT)} 
            colorb="Red"/>

            <ColorAdjuster colorb="green"
            onIncrease = {() => setGreen(green + COLOR_INCREMENT)}
            onDecrease = {() => setGreen(green - COLOR_INCREMENT)} 

            />
            <ColorAdjuster colorb="blue"
            onIncrease = {() => setBlue(blue + COLOR_INCREMENT)}
            onDecrease = {() => setBlue(blue - COLOR_INCREMENT)} 
            
            />
            

            <View 
                style={{

                    height:150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`




                }}
            
            
            />



        </View>
    
    );

};

const Styles = StyleSheet.create({});


export default SquaredScreen;

